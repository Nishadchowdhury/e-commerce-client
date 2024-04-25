"use client";

import { Tab } from "@headlessui/react";

import { Image as ImageType } from "@/types"
import GalleryTab from "./GalleryTab";
import Image from "next/image";

interface pageProps {
    images: ImageType[];

}
const Gallery: React.FC<pageProps> = ({ images = [] }) => {


    return (
        <Tab.Group
            as={"div"}
            className="flex flex-col-reverse"
        >
            <div className=" mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none lg:w-2/3">
                <Tab.List className={"grid grid-cols-4 gap-6"}>
                    {images.map(image => (
                        <GalleryTab key={image.id} image={image} />
                    ))}
                </Tab.List>
            </div>

            <Tab.Panels className={"aspect-square lg:w-2/3 "}>
                {images.map((image) => (
                    <Tab.Panel key={image.id} >
                        <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden ">
                            <Image
                                fill
                                src={image.url}
                                alt="Image"
                                className="object-cover object-center"
                            />

                        </div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    )

}

export default Gallery;