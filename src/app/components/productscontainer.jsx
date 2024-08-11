import Pagination from "./pagination"
import ProductCards from "./productcards"
import Productfilter from "./productfilter"

export default function ProductsContainer() {
    return (
        <section className="container mx-auto py-8 antialiased  md:py-12">
            <Productfilter />
            <ProductCards />

            <Pagination />

        </section>
    )
}