'use server';

import { categorySchema } from "@/types/category-schema";
import { actionClient } from "@/types/safe-action";



export const createCategoriesAction = actionClient
    .inputSchema(categorySchema)