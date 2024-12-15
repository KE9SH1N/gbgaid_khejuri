import React from "react";
import ProductGallerySlider from "./ProductGallerySlider";
import ProductDetails from "./ProductDetails";
import CustomerSupport from "./CustomerSupport";

const SingleProductDetailsPage = () => {
	return (
		<div className="ct-container my-5">
			<div className="ct-flex-between items-start gap-x-5">
				<div className="w-[40%]">
					<ProductGallerySlider />
				</div>
				<div className="w-[55%]">
					<ProductDetails />
					<CustomerSupport />
				</div>
			</div>
		</div>
	);
};

export default SingleProductDetailsPage;
