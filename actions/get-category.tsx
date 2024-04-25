import { Category } from "@/types";

const URL_ = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategory = async (id: string): Promise<Category> => {
    const res = await fetch(`${URL_}/${id}`)

    return res.json()
}


export default getCategory;