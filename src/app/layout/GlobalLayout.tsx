import React from "react";
import FooterMain from "../components/footer/FooterMain";
import Navbar from "../components/header/Navbar";

const GlobalLayout = ({ children }: any) => {
	return (
		<div>
			<Navbar />
			{children}
			<FooterMain />
		</div>
	);
};

export default GlobalLayout;
