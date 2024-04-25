import { Color } from "@/types";

const URL_ = `${process.env.NEXT_PUBLIC_API_URL}/colors`

const getColors = async (): Promise<Color[]> => {
    const res = await fetch(URL_)

    return res.json()
}


export default getColors;