"use client";
import PreviewModal from "@/components/PreviewModal";
import { useEffect, useState } from "react";


interface pageProps {

}
const ModalProvider: React.FC<pageProps> = () => {

    //hydration error solved
    const [isMounted, setIsMounted] = useState(false); useEffect(() => { setIsMounted(true) }, []); if (!isMounted) { return null }

    return (
        <>
            <PreviewModal />
        </>
    )

}

export default ModalProvider;