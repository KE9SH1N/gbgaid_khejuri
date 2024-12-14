import FooterMain from "./components/footer/FooterMain";
import Navbar from "./components/header/Navbar";
import HeroBanner from "./components/hero/HeroBanner";
import AllProducts from "./components/products/AllProducts";

export default function Home() {
	return (
		<main>
			<Navbar />
			<HeroBanner />
			<AllProducts />
			<FooterMain />
		</main>
	);
}
