import {z, defineCollection} from 'astro:content'

const fragmentCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        code: z.object({
            head: z.string(),
            main: z.string(),
        }),
        name: z.string().optional(),
        description: z.string().optional(),
        // list the dependencies ids
        dependencies: z.array(z.string()).optional(),
        author: z.object({
            name: z.string(),
            link: z.string().url().optional(),
        }),
    })
})

export const colletions = {
    fragments: fragmentCollection
}