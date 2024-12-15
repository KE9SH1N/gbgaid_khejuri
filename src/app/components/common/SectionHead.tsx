import React from "react";

interface SectionHeadingText {
	headingText?: string;
	paragraphOne?: string;
	paragraphTwo?: string;
}
const SectionHead: React.FC<SectionHeadingText> = ({
	headingText,
	paragraphOne,
	paragraphTwo,
}) => {
	return (
		<div className="ct-flex-center flex-col space-y-3 font-poppins font-medium">
			<h1 className="text-[#808080] text-lg">{headingText}</h1>
			<p className="text-center text-3xl leading-[48px] font-bold text-[#4E4E4E]">
				<span className="block">{paragraphOne}</span>
				<span className="block">{paragraphTwo}</span>
			</p>
		</div>
	);
};

export default SectionHead;
