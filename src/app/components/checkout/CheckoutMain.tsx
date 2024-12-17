"use client";
import { closeCheckoutModal } from "@/app/redux/feature/checkout/checkoutModalSlice";
import React, { useState } from "react";
import { CgCloseR } from "react-icons/cg";
import { useDispatch } from "react-redux";
import CustomerInfoForm from "./CustomerInfoForm";
import CheckoutPaymentMethod from "./CheckoutPaymentMethod";
import CheckoutProductList from "./CheckoutProductList";
import { IoMdArrowDropup } from "react-icons/io";

const CheckoutMain = () => {
	const dispatch = useDispatch();

	const [openIndex, setOpenIndex] = useState(0);

	const handleToggle = (index: number) => {
		setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
	};
	const handleCloseCheckoutModal = () => {
		dispatch(closeCheckoutModal());
	};

	return (
		<div className="w-full fixed lg:top-12 lg:left-4 transform  flex justify-center z-40">
			<div className="relative bg-white rounded-[4px] shadow-lg py-4 lg:p-6 max-w-4xl w-full z-10">
				<h2 className="text-3xl font-poppins font-semibold text-center text-[#4E4E4E] pb-4">
					চেকআউট
				</h2>

				<div className="w-full ct-flex-start flex-col space-y-5 my-5 max-h-[600px] lg:max-h-[550px] overflow-y-scroll">
					{/* Operation Details Section */}
					<div className="w-full px-20">
						<h3 className="font-poppins font-semibold text-[#4E4E4E] leading-7">
							ক্রেতার তথ্য
						</h3>
						<div className="w-full">
							<CustomerInfoForm />
							<div className="w-full flex flex-col my-5">
								<div className="border-b border-gray-200">
									<button
										onClick={() => handleToggle(0)}
										className="w-full text-left py-3 px-5 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
									>
										<span className="font-poppins font-semibold capitalize text-sm">
											পণ্যের তালিকা
										</span>
										<IoMdArrowDropup
											className={`text-xl smooth-animation-mid ${
												openIndex !== 0 ? "rotate-180" : ""
											}`}
										/>
									</button>
									{openIndex !== 0 && (
										<div>
											<CheckoutProductList />
										</div>
									)}
								</div>
							</div>
							<CheckoutPaymentMethod />
						</div>
					</div>
				</div>
				{/* Close Button */}
				<div
					onClick={handleCloseCheckoutModal}
					className=" absolute top-3 right-6 cursor-pointer"
				>
					<CgCloseR className="text-2xl hover:text-khejuriPrimaryColor smooth-animation-mid-linear" />
				</div>
			</div>
		</div>
	);
};

export default CheckoutMain;
