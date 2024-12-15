import FooterMain from "./components/footer/FooterMain";
import Navbar from "./components/header/Navbar";
import HeroBanner from "./components/hero/HeroBanner";
import AllProducts from "./components/home/AllProducts";
import Gallery from "./components/home/Gallery";
import VideoSlider from "./components/home/VideoSlider";

export default function Home() {
	return (
		<main>
			<Navbar />
			<HeroBanner />
			<AllProducts />
			<VideoSlider />
			<Gallery />
			<FooterMain />
		</main>
	);
}
