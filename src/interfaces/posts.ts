import { CategoriesBlog } from "./categories";
import { TagsBlog } from "./tags";
import { User } from "./user";

export interface Post {
    id: number;
    author_id: User;
    title: string;
    description: string;
    content: string;
    cover: string[];
    tags: TagsBlog[];
    category: CategoriesBlog;
    category_id: number;
    created_at: string;
    updated_at: string;
    video?: string;
}