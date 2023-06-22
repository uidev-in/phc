import { Inter } from "next/font/google";
import Hero from "@/components/Hero/Hero";
import Form from "@/components/Form";
import Perks from "@/components/Perks";
import Faq from "@/components/Faq";
import Talks from "@/components/Talks";
import Clients from "@/components/Clients";
import { faq, clients } from "@/constant/home.constant";
import AboutProduct from "@/components/Products";
import ProductDetailTab from "@/components/ProductDetails";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Perks />
      <AboutProduct />
      <Talks />
      <Faq data={faq} />
      <Clients data={clients} />
      {/* <ProductDetailTab /> */}
      <Form />
    </>
  );
}
