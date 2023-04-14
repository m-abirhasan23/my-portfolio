import { defineCollection, z } from "astro:content";
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.enum(["Abir Hasan"]),
    date: z.date(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collection = { blog };
