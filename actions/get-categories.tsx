import { Category } from "@/types";

const URL_ = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategories = async (): Promise<Category[]> => {
    const res = await fetch(URL_)

    return res.json()
}


export default getCategories;