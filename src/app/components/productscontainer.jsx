import Pagination from "./pagination"
import ProductCards from "./productcards"


export default function ProductsContainer() {
    return (
        <section className="container mx-auto">
            <ProductCards />
            <Pagination />
        </section>
    )
}