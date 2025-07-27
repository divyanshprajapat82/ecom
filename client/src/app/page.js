import Image from "next/image";
import TopSlider from "./components/home/TopSlider";
import ChairCards from "./components/home/ChairCards";
import HomeProduct from "./components/home/HomeProduct";
import TrendingBanner from "./components/home/TrendingBanner";
import Bestsell_Slider from "./components/home/Bestsell_Slider";
import Service from "./components/home/Service";
import CustumersSay from "./components/CustumersSay";
import Newsletter from "./components/home/Newsletter";
import Footer from "./common/Footer";

export default function Home() {
  return (

    <>
      <TopSlider />
      <ChairCards />
      <HomeProduct />
      <TrendingBanner />
      <Bestsell_Slider />
      <Service />
      <CustumersSay />
      <Newsletter />
    </>
  );
}
