"use client";

import { formatter } from "@/lib/utils";
import { useEffect, useState } from "react";


interface pageProps {
    value?: string | number;
}
const Currency: React.FC<pageProps> = ({ value }) => {

    //hydration error solved
    const [isMounted, setIsMounted] = useState(false); useEffect(() => { setIsMounted(true) }, []); if (!isMounted) { return null }

    return (
        <div className='font-semibold' >
            {formatter.format(Number(value))}
        </div>
    )

}

export default Currency;