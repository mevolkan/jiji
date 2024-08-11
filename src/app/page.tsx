import Image from "next/image";
import Footer from "./components/footer";
import Prefooter from "./components/prefooter";
import ProductsContainer from "./components/productscontainer"
import Header from "./components/header";

export default function Home() {
  return (
    <>
    <Header />
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <ProductsContainer />
        <Prefooter />
      </main>
      <Footer />
    </>
  );
}
