import Image from "next/image";
import React from "react";

const HeroBanner = () => {
	return (
		<div className="ct-container my-5">
			<Image
				src="/image/hero-banner.png"
				alt="hero-banner"
				width={1250}
				height={528}
			/>
		</div>
	);
};

export default HeroBanner;
