import React from "react";
import SectionHead from "../common/SectionHead";
import Slider from "../common/Slider";

const VideoSlider = () => {
	return (
		<div className="ct-container py-14">
			<SectionHead
				headingText="ভিডিওতে জানুন"
				paragraphOne="খেজুরের গুড় কেন আপনার"
				paragraphTwo="ভোজনসংস্কৃতির সুপারহিরো!"
			/>
			<Slider />
		</div>
	);
};

export default VideoSlider;
