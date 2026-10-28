// <flow-field>: particles drift along a slowly changing noise field and
// leave fading ink trails. Colours and density come from CSS custom
// properties, so the page's light and dark themes restyle it.
(() => {
  const STEP = 1.2;
  const TIME_STEP = 0.0025;
  const NOISE_SCALE = 0.0035;
  const GOLD_SHARE = 0.3;
  // With reduced motion, run this many frames once and show the result.
  const STILL_FRAMES = 150;
  // A reset clears the field, so wait for a window drag to settle.
  const RESIZE_DELAY_MS = 150;

  class FlowField extends HTMLElement {
    connectedCallback() {
      if (!this.canvas) {
        this.canvas = document.createElement("canvas");
        this.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
      }
      this.time = 0;

      this.motion = matchMedia("(prefers-reduced-motion: reduce)");
      this.scheme = matchMedia("(prefers-color-scheme: dark)");
      this.onPreferenceChange = () => this.reset();
      this.motion.addEventListener("change", this.onPreferenceChange);
      this.scheme.addEventListener("change", this.onPreferenceChange);
      this.observer = new ResizeObserver(() => this.scheduleResize());
      this.observer.observe(this);
      this.reset();
    }

    disconnectedCallback() {
      this.stop();
      clearTimeout(this.pendingResize);
      this.observer.disconnect();
      this.motion.removeEventListener("change", this.onPreferenceChange);
      this.scheme.removeEventListener("change", this.onPreferenceChange);
    }

    scheduleResize() {
      clearTimeout(this.pendingResize);
      this.pendingResize = setTimeout(() => {
        const rect = this.getBoundingClientRect();
        if (rect.width === this.w && rect.height === this.h) return;
        this.reset();
      }, RESIZE_DELAY_MS);
    }

    start() {
      const loop = () => {
        this.draw();
        this.frame = requestAnimationFrame(loop);
      };
      this.frame = requestAnimationFrame(loop);
    }

    stop() {
      cancelAnimationFrame(this.frame);
    }

    reset() {
      this.stop();
      const rect = this.getBoundingClientRect();
      const dpr = Math.min(2, devicePixelRatio || 1);
      this.w = Math.max(1, rect.width);
      this.h = Math.max(1, rect.height);
      this.canvas.width = this.w * dpr;
      this.canvas.height = this.h * dpr;
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.readPalette();

      const count = Math.round((this.w * this.h) / this.palette.areaPerParticle);
      this.particles = Array.from({ length: count }, () => this.spawn({}));
      if (this.motion.matches) {
        for (let i = 0; i < STILL_FRAMES; i++) this.draw();
      } else {
        this.start();
      }
    }

    readPalette() {
      const css = getComputedStyle(this);
      const read = (name) => css.getPropertyValue(name).trim();
      this.palette = {
        ink: read("--flow-ink"),
        gold: read("--flow-accent"),
        alpha: Number(read("--flow-alpha")),
        tail: Number(read("--flow-tail")),
        areaPerParticle: Number(read("--flow-area-per-particle")),
      };
    }

    spawn(p) {
      p.x = Math.random() * this.w;
      p.y = Math.random() * this.h;
      p.life = 80 + Math.random() * 220;
      p.gold = Math.random() < GOLD_SHARE;
      return p;
    }

    draw() {
      const { ctx, w, h, palette } = this;
      this.time += TIME_STEP;

      // Fade towards transparent, not towards a colour, so the page
      // background always shows through.
      ctx.globalCompositeOperation = "destination-out";
      ctx.globalAlpha = palette.tail;
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = palette.alpha;
      ctx.lineWidth = 1;
      ctx.lineCap = "round";
      for (const p of this.particles) this.move(p);
      ctx.globalAlpha = 1;
    }

    move(p) {
      const angle =
        noise(p.x * NOISE_SCALE, p.y * NOISE_SCALE, this.time) * Math.PI * 4 -
        Math.PI / 2;
      const x = p.x + Math.cos(angle) * STEP;
      const y = p.y + Math.sin(angle) * STEP;
      const outside = x < -2 || x > this.w + 2 || y < -2 || y > this.h + 2;
      if (--p.life < 0 || outside) {
        this.spawn(p);
        return;
      }

      const { ctx } = this;
      ctx.strokeStyle = p.gold ? this.palette.gold : this.palette.ink;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(x, y);
      ctx.stroke();
      p.x = x;
      p.y = y;
    }
  }

  // Improved Perlin noise, 3D, with a fixed seed so the field looks the
  // same on every visit. Returns a value in [0, 1].
  const PERM = (() => {
    let seed = 1337;
    const random = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const p = Array.from({ length: 256 }, (_, i) => i);
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [p[i], p[j]] = [p[j], p[i]];
    }
    return Uint8Array.from({ length: 512 }, (_, i) => p[i & 255]);
  })();

  function noise(x, y, z) {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);
    const u = fade(x);
    const v = fade(y);
    const w = fade(z);

    const A = PERM[X] + Y;
    const AA = PERM[A] + Z;
    const AB = PERM[A + 1] + Z;
    const B = PERM[X + 1] + Y;
    const BA = PERM[B] + Z;
    const BB = PERM[B + 1] + Z;

    const near = lerp(
      lerp(grad(PERM[AA], x, y, z), grad(PERM[BA], x - 1, y, z), u),
      lerp(grad(PERM[AB], x, y - 1, z), grad(PERM[BB], x - 1, y - 1, z), u),
      v,
    );
    const far = lerp(
      lerp(grad(PERM[AA + 1], x, y, z - 1), grad(PERM[BA + 1], x - 1, y, z - 1), u),
      lerp(
        grad(PERM[AB + 1], x, y - 1, z - 1),
        grad(PERM[BB + 1], x - 1, y - 1, z - 1),
        u,
      ),
      v,
    );
    return 0.5 + 0.5 * lerp(near, far, w);
  }

  function grad(hash, x, y, z) {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return (h & 1 ? -u : u) + (h & 2 ? -v : v);
  }

  function fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  function lerp(a, b, t) {
    return a + t * (b - a);
  }

  customElements.define("flow-field", FlowField);
})();
