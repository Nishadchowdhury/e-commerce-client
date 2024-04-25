"use client"
import { Color, Size } from "@/types"
import { useRouter, useSearchParams } from "next/navigation"
import queryString from "query-string"
import Button from "./ui/custom/Button"
import { cn } from "@/lib/utils"


interface pageProps {
    valueKey: string
    name: string
    data: (Size | Color)[]
}
const Filter: React.FC<pageProps> = ({
    valueKey,
    name,
    data
}) => {

    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKey);

    const onClick = (id: string) => {
        const current = queryString.parse(searchParams.toString());

        const query = {
            ...current,
            [valueKey]: id
        }

        if (current[valueKey] === id) {
            query[valueKey] = null;
        }

        const url = queryString.stringifyUrl({
            url: window.location.href, // it gives the url from the browser 
            query // it's the query string
        }, { skipNull: true }); // ti means if any of key holds nullish values then will not add to the url

        router.push(url)
    };

    return (
        <div className='mb-8 ' >
            <h3 className="text-lg font-semibold" >
                {name}
            </h3>

            <hr className="my-4" />

            <div className="flex flex-wrap gap-2">
                {data.map(filter => (
                    <div key={filter.id} className="flex items-center">
                        <Button
                            className={cn(
                                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300 ",
                                selectedValue === filter.id && "bg-black text-gray-200"
                            )}

                            onClick={() => onClick(filter.id)}
                        >
                            {filter.name}
                        </Button>
                    </div>
                ))}
            </div>

        </div>
    )

}

export default Filter;