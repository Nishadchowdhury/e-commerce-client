"use client";

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react"


import { Product } from "@/types";
import IconButton from "@/components/ui/custom/IconButton";
import Currency from "./Currency";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";


interface pageProps {
    data: Product
}
const ProductCard: React.FC<pageProps> = ({ data }) => {

    const previewModal = usePreviewModal();
    const cart = useCart();

    const router = useRouter();
    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    };

    const onPreview: MouseEventHandler<HTMLButtonElement> = e => {
        // it is import to prevent the event propagation because the root element has an onClick.
        e.stopPropagation();
        previewModal.onOpen((data))
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = e => {
        // it is import to prevent the event propagation because the root element has an onClick.
        e.stopPropagation();

        cart.addItem(data)
    }



    return (
        <div onClick={handleClick} className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4' >
            {/* images and actions */}

            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    alt="product image"
                    src={data?.images?.[0]?.url}
                    fill
                    className="aspect-square object-cover rounded-md"
                />

                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5 ">

                    <div className="flex gap-x-6 justify-center ">
                        <IconButton
                            onClick={onPreview}
                            icon={<Expand size={20} className="text-gray-600" />}
                        />

                        <IconButton
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={20} className="text-gray-600" />}
                        />
                    </div>

                </div>
            </div>
            {/* description */}
            <div className="">

                <p className="font-semibold text-lg">
                    {data?.name}
                </p>

                <p className="text-sm text-gray-500">
                    {data?.category?.name}
                </p>

            </div>
            {/* price */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price} />
            </div>
        </div>
    )

}

export default ProductCard;

// https://youtu.be/5miHyP6lExg?si=hWX-OPPshS306-m3&t=30182