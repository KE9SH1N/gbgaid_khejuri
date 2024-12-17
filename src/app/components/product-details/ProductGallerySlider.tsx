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
							src="/image/product-image-2.png"
							alt="gallery images"
							// alt={productData?.product_title_bn}
							width={360}
							height={360}
							className="w-full mx-auto"
							onDragStart={(e) => e.preventDefault()}
						/>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="w-full">
						<Image
							// src={`${getBaseUrl(true)}/${item}`}
							src="/image/product-image-2.png"
							alt="gallery images"
							// alt={productData?.product_title_bn}
							width={360}
							height={360}
							className="w-full mx-auto"
							onDragStart={(e) => e.preventDefault()}
						/>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="w-full">
						<Image
							// src={`${getBaseUrl(true)}/${item}`}
							src="/image/product-image-2.png"
							alt="gallery images"
							// alt={productData?.product_title_bn}
							width={360}
							height={360}
							className="w-full mx-auto"
							onDragStart={(e) => e.preventDefault()}
						/>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="w-full">
						<Image
							// src={`${getBaseUrl(true)}/${item}`}
							src="/image/product-image-2.png"
							alt="gallery images"
							// alt={productData?.product_title_bn}
							width={600}
							height={600}
							className="w-full mx-auto"
						/>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default ProductGallerySlider;
