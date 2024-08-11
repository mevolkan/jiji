import Pagination from "./pagination"
import ProductCards from "./productcards"


export default function ProductsContainer() {
    return (
        <section className="container mx-auto py-8 antialiased  md:py-12">
            <ProductCards />
            
            <Pagination />

        </section>
    )
}