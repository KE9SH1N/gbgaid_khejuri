import React from "react";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";

import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { cartItem } from "../../types/cartItemType";
import {
	decrementQuantity,
	incrementQuantity,
	removefromCart,
	updateQuantity,
} from "@/app/redux/feature/checkout/shoppingcartSlice";

interface CartItemProps {
	item: cartItem;
}

const CartProductList: React.FC<CartItemProps> = ({ item }) => {
	const dispatch = useDispatch();

	const handleQuantityChange = (productId: number, newQuantity: number) => {
		dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
	};

	return (
		<div>
			<li
				key={item.id}
				className="w-full ct-flex-between items-start bg-khejuriBgSecondaryWhite rounded shadow-md"
			>
				<div className="ct-flex-start items-start p-2 overflow-x-hidden w-full">
					<div className="ct-flex-between w-full gap-x-5 ">
						<div>
							<Image
								// src={`${getBaseUrl(true)}//${item.product_image}`}
								src="/image/product-image-2.png"
								alt={item.product_title_bn}
								width={64}
								height={64}
							/>
						</div>
						<div className="ct-flex-start font-poppins flex-col w-80 pl-4">
							<h3 className="w-full text-xs md:text-sm line-clamp-2 overflow-hidden capitalize">
								{item.product_title_bn}
							</h3>
							<p className="text-center text-xs capitalize font-semibold text-black py-1 rounded">
								<span>{item.pack_size}</span>
							</p>
						</div>
						<div className="w-32">
							<div className="font-semibold">
								{item.discount_amount > 0 && (
									<p>
										৳&nbsp;
										<span>{item?.current_prices?.toFixed(2)}</span>
									</p>
								)}

								{item.discount_amount == 0 && (
									<p>
										৳&nbsp;<span>{item?.regular_prices?.toFixed(2)}</span>
									</p>
								)}
							</div>
						</div>
						<div>
							<div className="ct-flex-between gap-x-6 w-full">
								<div className="border border-khejuriBgSecondaryWhite rounded p-1 ct-flex-center w-32 md:w-24 xl:w-20 gap-x-2 xl:gap-x-2">
									<button
										className="rounded cursor-pointer"
										onClick={() => dispatch(decrementQuantity(item.id))}
									>
										<FaMinus className=" text-xs" />
									</button>

									<input
										type="text"
										value={item.quantity}
										className="text-xs text-center w-full"
										onChange={(e) => {
											const inputValue = e.target.value.trim();
											if (/^[1-9]\d*$/.test(inputValue)) {
												handleQuantityChange(item.id, parseInt(inputValue));
											} else if (inputValue === "") {
												handleQuantityChange(item.id, 1);
											}
										}}
									/>
									<button
										className="rounded cursor-pointer"
										onClick={() => dispatch(incrementQuantity(item.id))}
									>
										<FaPlus className=" font-thin text-xs" />
									</button>
								</div>
							</div>
						</div>
						<div>
							<button
								className="cursor-pointer"
								onClick={() => dispatch(removefromCart(item.id))}
							>
								<RiDeleteBin5Fill className="text-khejuriInactiveColorLight w-8 h-8 p-1  bg-khejuriPrimaryColorLight" />
							</button>
						</div>
					</div>
				</div>
			</li>
		</div>
	);
};

export default CartProductList;
