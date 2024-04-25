import { Product } from "@/types";
import NoResults from "./ui/custom/NoResults";
import ProductCard from "./ui/custom/ProductCard";

interface pageProps {
    title: string;
    items: Product[];

}
const ProductList: React.FC<pageProps> = ({ title, items }) => {


    return (
        <div className='space-y-4' >
            <h3 className="font-bold text-3xl">{title}</h3>
            {items.length === 0 && <NoResults />}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map(item => (
                    <ProductCard key={item.id} data={item} />
                ))}
            </div>

        </div>
    )

}

export default ProductList;
