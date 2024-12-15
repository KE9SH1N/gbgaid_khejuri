import Image from "next/image";
import SectionHead from "../common/SectionHead";

const Gallery = () => {
	const images = [
		"/path-to-your-image/image.png",
		"/path-to-your-image/image.png",
		"/path-to-your-image/image.png",
		"/path-to-your-image/image.png",
	];

	return (
		<div className="ct-container my-5">
			<SectionHead
				headingText="ভিডিওতে জানুন"
				paragraphOne="খেজুরের গুড় কেন আপনার"
				paragraphTwo="ভোজনসংস্কৃতির সুপারহিরো!"
			/>
			<div className=" mx-auto px-4 py-8">
				<div className="grid grid-cols-1 gap-y-2 md:ct-grid-cols-2 lg:ct-grid-cols-4">
					{images.map((src, index) => (
						<div
							key={index}
							className="w-full h-[340px] bg-gray-300 rounded overflow-hidden"
						>
							{/* <Image
								src={src}
								alt={`Image ${index + 1}`}
								fill
								className="w-full h-full object-cover"
							/> */}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Gallery;
