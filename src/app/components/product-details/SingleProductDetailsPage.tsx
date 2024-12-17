import React from "react";
import ProductGallerySlider from "./ProductGallerySlider";
import ProductDetails from "./ProductDetails";
import CustomerSupport from "./CustomerSupport";
import ProductSpecification from "./ProductSpecification";
import ProductSpecificationMobile from "./ProductSpecificationMobile";

const SingleProductDetailsPage = () => {
	return (
		<div className="ct-container my-5">
			<div className="ct-flex-start flex-col lg:flex-row gap-x-10">
				<div className="w-full lg:w-[40%]">
					<ProductGallerySlider />
				</div>
				<div className="w-full lg:w-[55%]">
					<ProductDetails />
					<CustomerSupport />
				</div>
			</div>
			<div className="w-full hidden lg:block">
				<ProductSpecification />
			</div>
			<div className=" lg:hidden">
				<ProductSpecificationMobile />
			</div>
		</div>
	);
};

export default SingleProductDetailsPage;
