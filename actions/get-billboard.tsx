import { Billboard } from "@/types";

const URL_ = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboard = async (id: string): Promise<Billboard> => {
    const res = await fetch(`${URL_}/${id}`)

    return res.json()
}


export default getBillboard;