"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
import { selectTotalQuantity } from "@/app/redux/feature/checkout/shoppingcartSlice";
import { toggleCart } from "@/app/redux/feature/checkout/cartSlice";

const FloatingCart: React.FC = () => {
	const dispatch = useDispatch();
	const totalQuantity = useSelector(selectTotalQuantity);

	const handleToggleCart = () => {
		dispatch(toggleCart());
	};

	return (
		<div onClick={handleToggleCart}>
			{totalQuantity > 0 ? (
				<div className=" p-0">
					<div className="">
						<button className=" fixed z-40 top-[70%] right-[14%]  lg:right-[2%] xl:w-[7%] lg:w-[12%] hidden lg:flex py-4 ct-flex-center flex-row gap-x-1 capitalize text-white text-xs bg-khejuriPrimaryColor rounded-full">
							<div className="w-5 h-5 top-[3%] right-[2%] absolute rounded-full bg-white">
								<div className="w-3 h-3 top-[20%] left-[20%] absolute rounded-full bg-red-700"></div>
							</div>
							<div className="ct-flex-center space-x-1 text-sm">
								<TiShoppingCart className="text-2xl" />
								<p className="">কার্ট</p>&nbsp;
								<span>({totalQuantity})</span>
							</div>
						</button>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default FloatingCart;
