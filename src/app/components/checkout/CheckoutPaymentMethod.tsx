import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
	paymentMethodSelector,
	setSelectedPaymentMethod,
} from "@/app/redux/feature/checkout/paymentMethodSlice";

const CheckoutPaymentMethod = () => {
	const dispatch = useDispatch();

	const selectedPaymentMethod = useSelector(paymentMethodSelector);

	const handleDeliveryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSelectedPaymentMethod(event.target.value));
	};

	return (
		<div className="relative w-full flex flex-col gap-y-2 ">
			<div className="text-center md:text-start">
				<h3 className=" text-2xl font-poppins font-semibold uppercase pb-4">
					পেমেন্ট অপশন নির্বাচন করুন
					<span className="text-khejuriInactiveColor">*</span>
				</h3>
			</div>
			<div className="relative w-full ct-flex-start flex-col lg:flex-row gap-y-4 lg:gap-x-4">
				<label className="inline-flex items-center w-full border border-gray-300 rounded py-3 pl-7 cursor-pointer">
					<input
						type="radio"
						className="form-radio h-4 w-4 cursor-pointer"
						name="radio-option"
						value={"COD"}
						checked={selectedPaymentMethod === "COD"}
						onChange={handleDeliveryChange}
					/>
					<span className="ml-2 capitalize">Cash on delivery (COD)</span>
				</label>

				<label className="inline-flex items-center w-full border border-borderLine rounded pl-7 cursor-not-allowed blur-[2px]">
					<input
						type="radio"
						className="form-radio h-4 w-4 text-indigo-600 cursor-not-allowed"
						name="radio-option"
						value="bKash"
						onChange={handleDeliveryChange}
						disabled
					/>
					<p className="w-full ml-2 ct-flex-between pr-4">
						<span className="ml-2">bKash</span>
						<span>
							<Image
								src="/image/bKash-logo.svg"
								alt=""
								width={72}
								height={48}
							/>
						</span>
					</p>
				</label>
			</div>
		</div>
	);
};

export default CheckoutPaymentMethod;
