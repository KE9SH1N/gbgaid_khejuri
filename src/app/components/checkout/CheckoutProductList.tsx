"use client";
import React from "react";
import { useSelector } from "react-redux";
import { Product } from "@/app/types/productsType";
import { cartItemList } from "@/app/redux/feature/checkout/shoppingcartSlice";
import CartProductList from "../cart/CartProductList";
import CartProductListMobile from "../cart/CartProductListMobile";

const CheckoutProductList = () => {
	const cartItems = useSelector(cartItemList);

	return (
		<div>
			<div className="my-2 py-2 overflow-auto bg-white flex-grow max-h-[365px] lg:max-h-[530px] lg:scrollbar-thin lg:scrollbar-thumb-gbCustomScrollThumbColor lg:scrollbar-track-[#FEF3E9]">
				<ul className="w-full flex flex-col space-y-2 relative z-0">
					{cartItems.map((item: Product) => {
						return (
							<div key={item.id} className="w-full">
								<div className="lg:hidden">
									<CartProductListMobile key={item.id} item={item} />
								</div>
								<div className="hidden lg:block w-full">
									<CartProductList key={item.id} item={item} />
								</div>
							</div>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default CheckoutProductList;
