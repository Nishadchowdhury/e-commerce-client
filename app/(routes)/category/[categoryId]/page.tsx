import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/Billboard";
import Filter from "@/components/Filter";
import MobileFilters from "@/components/MobileFilters";
import Container from "@/components/ui/custom/Container";
import NoResults from "@/components/ui/custom/NoResults";
import ProductCard from "@/components/ui/custom/ProductCard";

interface pageProps {
    params: { categoryId: string },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}

export const revalidate = 0;

const page: React.FC<pageProps> = async ({
    params,
    searchParams
}) => {

    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId

    });

    const sizes = await getSizes()
    const colors = await getColors()
    const category = await getCategory(params.categoryId)


    return (
        <div className='bg-white' >
            <Container>
                <Billboard data={category.billboard} />

                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        {/* Add Mobile Filters */}
                        <MobileFilters sizes={sizes} colors={colors} />

                        <div className="hidden lg:block">

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

                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <NoResults />}

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map(product => (
                                    <ProductCard
                                        key={product.id}
                                        data={product}
                                    />))}
                            </div>

                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )

}

export default page;