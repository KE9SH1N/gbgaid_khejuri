import HeroBanner from "./components/hero/HeroBanner";
import AllProducts from "./components/home/AllProducts";
import Gallery from "./components/home/Gallery";
import VideoSlider from "./components/home/VideoSlider";
import GlobalLayout from "./layout/GlobalLayout";

export default function Home() {
	return (
		<main>
			<GlobalLayout>
				<HeroBanner />
				<AllProducts />
				<VideoSlider />
				<Gallery />
			</GlobalLayout>
		</main>
	);
}
