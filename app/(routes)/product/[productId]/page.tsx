import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/ProductList";
import Gallery from "@/components/gallery";
import Container from "@/components/ui/custom/Container";

interface pageProps {
    params: { productId: string }
}
const page: React.FC<pageProps> = async ({
    params
}) => {

    const product = await getProduct(params.productId);

    const suggestedProduct = await getProducts({
        categoryId: product?.category?.id
    })

    return (
        <div className='bg-white' >
            <Container >
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 ">
                        {/* Gallery */}
                        <Gallery 
                        
                        />
                        {/* Info */}
                        <div
                            className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0"
                        >
                            Info
                        </div>
                    </div>
                    <hr className="my-10" />

                    <ProductList title="Related Items" items={suggestedProduct} />

                </div>
            </Container>

        </div>
    )

}

export default page;