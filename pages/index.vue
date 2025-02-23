<template>
  <div class="prose-custom mx-auto max-w-prose p-4">
    <p>
      Hello, I’m <span class="highlight">Sabu Siyad</span>. I write useful,
      reusable and maintainable code!
    </p>
    <p>
      I absolutely adore <span class="highlight">crafting products</span> that
      folks find a breeze to use and genuinely love. Ensuring
      <span class="highlight">user-friendliness</span> is my top priority in
      design, because I'm a firm believer that the best products aren't just
      useful, but also <span class="highlight">super simple to use</span>. My
      ultimate goal? To make life a little bit easier for us humans, by whipping
      up tools that assist in zipping through tasks with
      <span class="highlight">ease</span> and
      <span class="highlight">efficiency</span>.
    </p>
    <p>
      My toolkit is pretty broad and includes a bunch of programming languages.
      <span class="highlight">Python</span> is my first love and go-to language
      for most use cases. I'm also pretty handy with
      <span class="highlight">Typescript</span>, which I use a lot for building
      applications that are easy to maintain and can scale up real nice. When in
      need of a web frontend, I often reach for
      <span class="highlight">Vue</span> and
      <span class="highlight">Tailwind</span>. Right now, I'm learning
      <span class="highlight">Rust</span>, which is both a challenge and a
      revelation. On top of all that, I really dig checking out the latest and
      greatest technologies and messing around with them to
      <span class="highlight">learn new things</span> and keep up with the tech
      scene. If you're curious about my work, feel free to check out some of my
      projects
      <a
        href="https://github.com/ssiyad?tab=repositories&q=&type=source&sort=stargazers"
        >here</a
      >.
    </p>
    <p>
      When not immersed in the world of coding, you can find me reading a book,
      cheering for <a href="https://www.arsenal.com/">Arsenal</a>, or exploring
      new places . If you're curious about my travels, you can catch a glimpse
      through the photos I occasionally share on my
      <a href="https://www.instagram.com/sabu.siyad/">Instagram</a>!
    </p>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Sabu Siyad',
});
definePageMeta({
  layout: 'basic',
});
</script>

<style scoped>
@reference '../assets/css/main.css'

.highlight {
  @apply font-medium text-neutral-900 dark:invert;
}
</style>
