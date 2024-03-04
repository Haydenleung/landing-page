import Image from "next/image";
import Spline from '@splinetool/react-spline';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Banner from "@/components/Banner";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={"main"}>
      <Header />
      <Hero />
      <Pricing />
      <Banner />
      <News />
      <Footer />
      <Image src="/image/rain.png" alt="bg" width={2000} height={2000} className="bg" />
    </main>
  );
}
