import { newBlogSchema } from "@/types/new-blog-schema";
import { actionClient } from "@/types/safe-action";


export const createBlogAction = actionClient
    .inputSchema(newBlogSchema)
    .action(async ({ parsedInput: { title, resume, description, cover, tags, categories }, ctx: { } }) => {
        console.log(title, resume, description, cover, tags, categories);
    });