import { Product } from "@/types";

const URL_ = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProduct = async (id: string): Promise<Product> => {
    const res = await fetch(`${URL_}/${id}`)

    return res.json()
}


export default getProduct;