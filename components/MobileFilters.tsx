"use client";

import { Color, Size } from "@/types";
import { useState } from "react";
import Button from "./ui/custom/Button";
import { Plus, X } from "lucide-react";

import { Dialog } from "@headlessui/react"
import IconButton from "./ui/custom/IconButton";
import Filter from "./Filter";

interface pageProps {
    sizes: Size[];
    colors: Color[];
}
const MobileFilters: React.FC<pageProps> = ({
    colors,
    sizes
}) => {
    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <>
            <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden " >
                Filters
                <Plus size={20} />
            </Button>

            <Dialog open={open} onClose={onClose} as="div" className={"relative z-40 lg:hidden"}>
                {/* Background */}
                <div className="fixed inset-0 bg-black bg-opacity-25" />

                {/* Dialog position */}
                <div className="fixed inset-0 z-40 flex">
                    <Dialog.Panel className="relative ml-auto flex size-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">

                        {/* Close button */}
                        <div onClick={onClose} className="flex items-center justify-end px-4">
                            <IconButton icon={<X size={15} />} />
                        </div>

                        {/* Render the filters */}
                        <div className="p-4">
                            {/* SIZE FILTER */}
                            <Filter
                                valueKey="sizeId"
                                name="sizes"
                                data={sizes}
                            />

                            {/* COLOR FILTER */}
                            <Filter
                                valueKey="colorId"
                                name="colors"
                                data={colors}
                            />
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog >

        </>
    )

}

export default MobileFilters;