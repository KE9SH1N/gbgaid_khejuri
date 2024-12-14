import Image from "next/image";
import React from "react";

const HeroBanner = () => {
	return (
		<div className="ct-container w-full h-[400px] my-3 relative">
			<Image
				src="/image/hero-banner.png"
				alt="hero-banner"
				// width={802}
				// height={328}
				fill
				className=" object-cover px-4"
			/>
		</div>
	);
};

export default HeroBanner;
