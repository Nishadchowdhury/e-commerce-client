import { Size } from "@/types";

const URL_ = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSizes = async (): Promise<Size[]> => {
    const res = await fetch(URL_)

    return res.json()
}


export default getSizes;