"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { Product } from "@/app/types/productsType";
import {
	addtoCart,
	decrementQuantity,
	incrementQuantity,
} from "@/app/redux/feature/checkout/shoppingcartSlice";
import { useParams } from "next/navigation";
import { getBaseUrl } from "@/app/helper/getBaseUrl";
import { toggleCart } from "@/app/redux/feature/checkout/cartSlice";

interface ProductCardProps {
	product: Product;
	index: number;
	findQuantityForProduct: (productId: number) => number;
	handleRequestStock: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
	product,
	index,
	findQuantityForProduct,
	handleRequestStock,
}) => {
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState<{ [productId: number]: number }>({});
	const params = useParams();

	const [imageUrl, setImageUrl] = useState(
		`${getBaseUrl(true)}/${product.product_image}`
	);

	const handleMouseEnter = () => {
		setImageUrl(`${getBaseUrl(true)}/${product.product_gallery[1]}`);
	};

	const handleMouseLeave = () => {
		setImageUrl(`${getBaseUrl(true)}/${product.product_image}`);
	};

	//   Add to cart button
	const handleAddToCart = (product: Product, index: number) => {
		let productQuantity = quantity[product.id] || 1;
		if (productQuantity >= 0) {
			dispatch(addtoCart({ ...product, quantity: productQuantity }));
			setQuantity((prevQuantity) => ({
				...prevQuantity,
				[product.id]: 1,
			}));
		}
	};

	// Cart open function
	const handleToggleCart = () => {
		dispatch(toggleCart());
	};

	return (
		<div
			key={product.id}
			className="h-auto p-2 border border-borderLine rounded shadow"
		>
			<div>
				<Link href={`/products/${product?.product_slug}`}>
					<div className=" relative">
						<div className=" overflow-hidden min-h-[210px] relative">
							<Image
								src={product?.product_image}
								alt={product.product_title_bn}
								width={186}
								height={186}
								className={`mx-auto scale-101 ct-zoom-in-hover h-full object-cover w-full will-change-transform`}
								layout="responsive"
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							/>
						</div>

						{/* Discount tag */}
						{product.discount_amount > 0 && (
							<div className="absolute top-[2%] md:top-[3%] right-[3%] px-2 py-1 rounded-full drop-shadow-md bg-khejuriSecondaryActiveColor">
								<p className="text-[10px] sm:text-xs text-white md:font-bold capitalize">
									<span>-</span>
									{product.discount_amount}
									<span>{product.discount_type}</span>
								</p>
							</div>
						)}

						{/* Product status */}
						{product.product_status === "undefined" ||
						product.product_status === " " ||
						product.product_status === "" ? (
							""
						) : (
							<div className="absolute top-[2%] md:top-[3%] left-[3%] px-2 py-1 bg-khejuriPrimaryColor rounded-full drop-shadow-md">
								<p className="text-[10px] sm:text-xs text-white md:font-bold capitalize">
									<span>{product.product_status}</span>
								</p>
							</div>
						)}
					</div>
				</Link>

				<div className="my-2">
					<Link href={`/products/${product?.product_slug}`}>
						<h2 className=" text-[#0B0B0B] h-10 overflow-hidden line-clamp-2 capitalize font-black">
							{product.product_title_bn}
						</h2>
						<p className="w-[70%] lg:w-[50%] mt-1 text-center text-xs text-khejuriPrimaryColor font-bold px-4 py-1 rounded-2xl bg-khejuriPrimaryColorLight capitalize">
							<span>{product.pack_size}</span>
						</p>
					</Link>
					<div className="ct-flex-start items-center gap-x-2 py-2">
						<p
							className={`${
								product.discount_amount > 0
									? "text-xs text-[#C1C1C1] line-through"
									: "text-sm text-black font-bold"
							} `}
						>
							৳&nbsp;
							<span className=" font-poppins font-bold">
								{product?.regular_prices?.toFixed(2)}
							</span>
						</p>

						{product.discount_amount > 0 && (
							<p>
								৳&nbsp;
								<span className="text-sm font-poppins font-bold">
									{product?.current_prices?.toFixed(2)}
								</span>
							</p>
						)}
					</div>
					{product.active_status === 1 ? (
						<div>
							{findQuantityForProduct(product.id) > 0 ? (
								<div className="ct-flex-center overflow-hidden flex-col gap-2">
									<div className="w-full cursor-pointer">
										<div className="bg-khejuriPrimaryColor py-2.5 text-[10px] sm:text-sm w-full ct-flex-between px-1 md:px-2 rounded capitalize text-white">
											<button
												className="p-[3px] md:p-1 rounded bg-white shadow-2xl"
												onClick={() => dispatch(decrementQuantity(product.id))}
											>
												<FaMinus className=" text-[8px] sm:text-xs text-black" />
											</button>

											<button
												className=" px-1 md:px-0 text-[10px] sm:text-sm"
												onClick={handleToggleCart}
											>
												<span>{findQuantityForProduct(product.id)}</span>
												&nbsp;&nbsp;&nbsp;&nbsp;
												<span className=" capitalize">টি যোগ হয়েছে</span>
											</button>

											<button
												className="p-[3px] md:p-1 rounded bg-white shadow-2xl"
												onClick={() => dispatch(incrementQuantity(product.id))}
											>
												<FaPlus className="text-[8px] sm:text-xs text-black" />
											</button>
										</div>
									</div>
								</div>
							) : (
								<div>
									<div>
										<button
											className={`bg-khejuriPrimaryColor py-2.5 text-[10px] sm:text-sm w-full rounded capitalize text-white`}
											onClick={() => {
												handleAddToCart(product, index);
											}}
										>
											কার্টে এড করুন
										</button>
									</div>
								</div>
							)}
						</div>
					) : (
						<div>
							<button
								// onClick={handleRequestStock}
								onClick={() => {
									handleRequestStock(product.id);
								}}
								className={`bg-gbInactiveColor py-2 text-[10px] sm:text-sm w-full rounded capitalize text-white`}
							>
								stock out
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
