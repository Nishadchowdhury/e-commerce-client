import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard"
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/custom/Container"

export const revalidate = 1;

interface PageProps {

}

const Page: React.FC<PageProps> = async () => {

    const billboard = await getBillboard("252769de-667e-4b61-84de-564a7b0fedf0")
    const products = await getProducts({
        isFeatured: true,

    })

    return (
        <Container>
            <div className='space-y-10 pb-10 ' >
                <Billboard data={billboard} />


                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured products" items={products} />
                </div>

            </div>
        </Container>
    )

}

export default Page