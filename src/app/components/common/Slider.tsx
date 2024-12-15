"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { sliders } from "@/data/sliderData";
import Image from "next/image";

const Slider = () => {
	return (
		<div className="swiper-container mt-8">
			<Swiper
				modules={[Pagination, Autoplay]}
				spaceBetween={20}
				slidesPerView={2}
				pagination={{ clickable: true }}
				loop={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				breakpoints={{
					320: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 2 },
				}}
				className="mySwiper"
			>
				{sliders.map((item: any) => {
					return (
						<SwiperSlide key={item?.id}>
							<div className="ct-flex-start flex-col w-[600px] h-[338px] bg-[#F8F8F8] cursor-pointer relative">
								<Image
									src={item?.slider_image}
									width={500}
									height={350}
									alt="slider-image"
									className="rounded-md w-full object-cover"
								/>
								{/* Overlay */}
								<div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>

								<div className="w-fit mx-auto">
									<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
										<div className="w-24 h-24 bg-black bg-opacity-30 rounded-full"></div>

										<button className="absolute bg-green-900 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-md">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 16 16"
												className="w-8 h-8"
											>
												<path d="M10.804 8 5.5 11.5v-7L10.804 8z" />
											</svg>
										</button>
									</div>

									<div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-[#00000026] text-white bg-opacity-80 px-4 py-2 rounded-md text-sm">
										ভিডিও দেখতে ক্লিক করুন
									</div>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Slider;
