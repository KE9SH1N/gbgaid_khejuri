"use client";
import React from "react";
import HeroBanner from "../hero/HeroBanner";
import AllProducts from "./AllProducts";
import VideoSlider from "./VideoSlider";
import Gallery from "./Gallery";
import { useSelector } from "react-redux";
import { checkoutModalOpen } from "@/app/redux/feature/checkout/checkoutModalSlice";
import CheckoutMain from "../checkout/CheckoutMain";

const Landing = () => {
	const isCheckoutModalOpen = useSelector(checkoutModalOpen);
	return (
		<div>
			<HeroBanner />
			<AllProducts />
			<VideoSlider />
			<Gallery />
			<div
				className={`smooth-animation-mid ${
					isCheckoutModalOpen
						? "opacity-100 fixed inset-0 z-40 bg-black bg-opacity-50"
						: "opacity-0 pointer-events-none bg-transparent bg-opacity-0"
				}`}
			>
				<CheckoutMain />
			</div>
		</div>
	);
};

export default Landing;
