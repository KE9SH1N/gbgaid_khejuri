import Image from "next/image";
import React from "react";

const HeroBanner = () => {
	return (
		<div className="ct-container w-full h-[350px] overflow-hidden my-3 relative">
			<Image
				src="/image/hero-banner.png"
				alt="hero-banner"
				layout="fill"
				objectFit="cover"
				className="px-4"
			/>
		</div>
	);
};

export default HeroBanner;
