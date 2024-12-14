"use client";
import {
	cartOpen,
	closeCart,
	toggleCart,
} from "@/app/redux/feature/checkout/cartSlice";
import { selectTotalQuantity } from "@/app/redux/feature/checkout/shoppingcartSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import FloatingCart from "../cart/FloatingCart";
import CartSlider from "../cart/CartSlider";

const Navbar: React.FC = ({}) => {
	const dispatch = useDispatch();
	const totalQuantity = useSelector(selectTotalQuantity);
	const isCartOpen = useSelector(cartOpen);

	// Toggle cartslider
	const handleToggleCart = () => {
		dispatch(toggleCart());
	};

	// Close cartslider
	const handleCloseCart = () => {
		dispatch(closeCart());
	};
	return (
		<div className="bg-[#F9F9F9] py-[20px] sticky top-0 z-30 shadow-sm border border-b-khejuriPrimaryColorLight">
			<div className="ct-container ct-flex-between">
				<div></div>
				<Link href={`/`}>
					<div>
						<Image
							src="/image/brand-logo.svg"
							alt=""
							width={100}
							height={50}
							priority={true}
						/>
					</div>
				</Link>

				<div className="mr-5 lg:mr-0">
					<button
						className="flex cursor-pointer text-khejuriPrimaryColor"
						onClick={handleToggleCart}
					>
						<FiShoppingCart className="text-2xl" />
						<span>({totalQuantity})</span>
					</button>
				</div>
			</div>

			<div className="relative">
				<div onClick={handleCloseCart}>
					<div
						className={`h-screen w-full smooth-animation-mid z-40 cursor-pointer bg-[#00000023] ${
							isCartOpen
								? "fixed top-0 right-0 translate-x-0"
								: "fixed top-0 -right-full translate-x-full"
						}`}
					></div>
				</div>

				<div className="relative">
					<div
						className={`w-full smooth-animation-high z-50  ${
							isCartOpen
								? "translate-x-0 fixed top-0 right-0"
								: "translate-x-full fixed top-0 -right-full"
						}`}
					>
						<CartSlider />
					</div>
				</div>
			</div>

			{/* Floating Cart */}
			<div
			// className={`smooth-animation absolute ${
			// 	isFloatCartOpen && pathname !== `/${selectedLanguage}/checkout`
			// 		? "opacity-100 pointer-events-auto"
			// 		: "opacity-0 pointer-events-none"
			// }`}
			>
				<FloatingCart />
			</div>
		</div>
	);
};

export default Navbar;
