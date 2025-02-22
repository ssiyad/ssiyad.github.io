import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: 'blog/*.md',
      type: 'page',
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        date: z.string().nonempty(),
        draft: z.boolean().optional(),
      }),
    }),
  },
});
