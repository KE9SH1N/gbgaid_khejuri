import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "@/app/redux/feature/checkout/cartSlice";

const EmptyCart = () => {
	const dispatch = useDispatch();

	const handleCloseCart = () => {
		dispatch(closeCart());
	};
	return (
		<div className="relative">
			<div className="ct-flex-center w-full flex-col gap-y-4 absolute top-0 left-0 translate-y-[70%] lg:translate-y-full z-10">
				<div>
					<FaCartArrowDown className=" text-6xl text-khejuriPrimaryColor" />
				</div>
				<strong className="capitalize text-black">
					কার্টে কোনো পণ্য নেই !
				</strong>
				<Link
					href={`/`}
					onClick={handleCloseCart}
					className=" capitalize bg-khejuriPrimaryColor py-4 rounded text-white shadow-md"
				>
					<p className=" w-52 text-center">পণ্য যোগ করুন</p>
				</Link>
			</div>
		</div>
	);
};

export default EmptyCart;
