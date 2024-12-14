"use client";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { cartItem } from "../../types/cartItemType";
import {
	cartItemList,
	selectSubtotal,
	selectTotalQuantity,
} from "@/app/redux/feature/checkout/shoppingcartSlice";
import { closeCart } from "@/app/redux/feature/checkout/cartSlice";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";

const CartSlider: React.FC = () => {
	const dispatch = useDispatch();

	const cartItems = useSelector(cartItemList);
	const subtotal = useSelector(selectSubtotal);
	const totalQuantity = useSelector(selectTotalQuantity);

	const handleCloseCart = () => {
		dispatch(closeCart());
	};

	function adjustCartSliderHeight() {
		const cartSlider = document.querySelector(".cart-slider") as HTMLElement; // Assert the type
		if (cartSlider) {
			// Set height to the inner height of the window
			const sliderHeight = window.innerHeight; // Get current inner height
			cartSlider.style.height = `${sliderHeight}px`; // Set the height directly
			// Optionally, update the CSS variable if you want to use it elsewhere
			document.documentElement.style.setProperty(
				"--slider-height",
				`${sliderHeight}px`
			);
		}
	}

	// Call the function on load and resize
	window.addEventListener("load", adjustCartSliderHeight);
	window.addEventListener("resize", adjustCartSliderHeight);
	return (
		<div className="relative w-full">
			<div className=" relative w-full">
				<div className="cart-slider w-full absolute z-50 top-0 right-0 md:w-[450px] shadow-md flex flex-col justify-between">
					<div className="px-4 py-[27.5px] ct-flex-between relative text-white border-b border-b-borderLine bg-khejuriPrimaryColor">
						<h3 className=" text-xl font-semibold capitalize">
							শপিং ব্যাগ
							<span className="ml-2">({totalQuantity})</span>
						</h3>

						<button className="cursor-pointer" onClick={handleCloseCart}>
							<RxCross2 className="text-2xl" />
						</button>
					</div>

					<div className="p-4 overflow-auto bg-white scrollbar-thin scrollbar-thumb-khejuriPrimaryColor scrollbar-track-[#e3e9e3] scrollbar-thumb-rounded flex-grow ">
						<ul className="w-full flex flex-col space-y-2 relative z-20">
							{cartItems.map((item: cartItem) => {
								return <CartItem key={item.id} item={item} />;
							})}
						</ul>
						<div
							className={`smooth-animation-mid ${
								cartItems.length < 1 ? "opacity-100" : "hidden"
							}`}
						>
							<EmptyCart />
						</div>
					</div>

					<div className="px-4 py-4 flex-shrink-0 border-t-2 border-solid border-khejuriPrimaryColor bg-gray-100 flex flex-col gap-4">
						<div className="ct-flex-between text-xl text-black font-semibold">
							<p className="capitalize">সর্বমোট</p>
							<p>
								৳&nbsp;<span>{subtotal.toFixed(2)}</span>
							</p>
						</div>
						{totalQuantity > 0 && (
							<Link
								href={`/checkout`}
								className="ct-flex-center bg-khejuriPrimaryColor py-3 w-full rounded capitalize text-white"
								onClick={handleCloseCart}
							>
								চেকআউট
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartSlider;
