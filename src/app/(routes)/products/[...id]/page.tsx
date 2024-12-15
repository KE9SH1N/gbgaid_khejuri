import SingleProductDetailsPage from "@/app/components/product-details/SingleProductDetailsPage";
import GlobalLayout from "@/app/layout/GlobalLayout";
import React from "react";

const page = () => {
	return (
		<div>
			<GlobalLayout>
				<SingleProductDetailsPage />
			</GlobalLayout>
		</div>
	);
};

export default page;
