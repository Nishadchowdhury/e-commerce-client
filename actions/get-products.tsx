import { Product } from "@/types";

import queryString from "query-string"; //it use to create query string with filters.
/*
queryString.stringifyUrl({url: 'https://foo.bar', query: {foo: 'bar'}});
=> 'https://foo.bar?foo=bar'
 */

const URL_ = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
};

const getProducts = async (query: Query): Promise<Product[]> => {

    const url = queryString.stringifyUrl({
        url: URL_,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
        }
    })
    const res = await fetch(url)

    return res.json()
}


export default getProducts;