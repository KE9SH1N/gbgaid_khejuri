import HeroBanner from "./components/hero/HeroBanner";
import AllProducts from "./components/home/AllProducts";
import Gallery from "./components/home/Gallery";
import Landing from "./components/home/Landing";
import VideoSlider from "./components/home/VideoSlider";
import GlobalLayout from "./layout/GlobalLayout";

export default function Home() {
	return (
		<main>
			<GlobalLayout>
				<Landing />
			</GlobalLayout>
		</main>
	);
}
