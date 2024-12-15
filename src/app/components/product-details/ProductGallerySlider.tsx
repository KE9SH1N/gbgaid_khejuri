"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import { getBaseUrl } from "@/app/helper/getBaseUrl";

const ProductGallerySlider = () => {
	// const productData = useSelector(selectProductDetailsData);

	// const productMultiImage = productData?.product_gallery;
	return (
		<>
			<Swiper
				modules={[Pagination, Navigation, Autoplay]}
				navigation={true}
				pagination={{ clickable: true }}
				loop={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				className="mySwiper border border-gray-300 rounded-sm"
			>
				{/* {productMultiImage?.map((item: any) => (
					<SwiperSlide key={item}>
						<div className="w-full">
							<Image
								// src={`${getBaseUrl(true)}/${item}`}
								src=""
								alt="gallery images"
								// alt={productData?.product_title_bn}
								width={328}
								height={328}
								className="w-full mx-auto"
								onDragStart={(e) => e.preventDefault()}
							/>
						</div>
					</SwiperSlide>
				))} */}

				<SwiperSlide>
					<div className="w-full">
						<Image
							// src={`${getBaseUrl(true)}/${item}`}
							src="/image/product-gallery.jpeg"
							alt="gallery images"
							// alt={productData?.product_title_bn}
							width={888}
							height={592}
							className="w-full mx-auto"
							onDragStart={(e) => e.preventDefault()}
						/>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="w-full">
						<Image
							// src={`${getBaseUrl(true)}/${item}`}
							src="/image/product-gallery.jpeg"
							alt="gallery images"
							// alt={productData?.product_title_bn}
							width={888}
							height={592}
							className="w-full mx-auto"
							onDragStart={(e) => e.preventDefault()}
						/>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="w-full">
						<Image
							// src={`${getBaseUrl(true)}/${item}`}
							src="/image/product-gallery.jpeg"
							alt="gallery images"
							// alt={productData?.product_title_bn}
							width={888}
							height={592}
							className="w-full mx-auto"
							onDragStart={(e) => e.preventDefault()}
						/>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="w-full">
						<Image
							// src={`${getBaseUrl(true)}/${item}`}
							src="/image/product-gallery.jpeg"
							alt="gallery images"
							// alt={productData?.product_title_bn}
							width={888}
							height={592}
							className="w-full mx-auto"
						/>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default ProductGallerySlider;
