import { BookItem, CategoryItem } from "../types/types";
import sourceData from "../data/db.json";
import { setCategoryName } from "./utils";

class DataService {
    public getCategories(): CategoryItem[] {
        return sourceData.categories;
    }
    public getCategoryByName(data: CategoryItem[], name: string): CategoryItem | undefined {
        name = setCategoryName(name);
        return data.find((item) => item.name === name);
    }

    public getAllBooks(data: BookItem[], limit?: number, page?: number, sort?: string): BookItem[] {
        if (sort === "asc") {
            data.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sort === "desc") {
            data.sort((a, b) => b.title.localeCompare(a.title));
        }
        if (!limit || !page) {
            return data;
        }
        return data.slice((page - 1) * limit, page * limit);
    }
    public getCountBooksByCategory(data: BookItem[], categoryId: number): number {
        return data.filter((book) => book.categoryId === categoryId).length;
    }

    public getBooksByCategory(data: BookItem[], categoryId: number, limit: number, page: number, sort: string): BookItem[] {
        const books = data.filter((book) => book.categoryId === categoryId);
        if (sort === "asc") {
            books.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sort === "desc") {
            books.sort((a, b) => b.title.localeCompare(a.title));
        }
        return books.slice((page - 1) * limit, page * limit);
    }
}

export default new DataService();