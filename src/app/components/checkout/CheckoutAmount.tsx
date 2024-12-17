"use client";

// import { fetchDeliveryChargeData } from "../../api/locationApiService";
// import {
// 	deliveryChargePrice,
// 	selectDeliveryCharge,
// 	setShippingThanaPrice,
// } from "../../redux/features/checkout/deliveryChargeSlice";
// import { selectSubtotal } from "../../redux/features/checkout/shoppingcartSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
// 	selectBillerThana,
// 	selectGift,
// 	selectShippingThana,
// } from "../../redux/features/form/formSlice";
// import { paymentMethodSelector } from "../../redux/features/checkout/paymentMethodSlice";

const CheckoutAmount = () => {
	const dispatch = useDispatch();

	//Data Selector From RTk
	// const subtotal = useSelector(selectSubtotal);
	// const deliveryChargeValue = useSelector(selectDeliveryCharge);
	// const billerThana = useSelector(selectBillerThana);
	// const shippingThana = useSelector(selectShippingThana);
	// const deliveryCharge = useSelector(deliveryChargePrice);
	// const selectedPaymentMethod = useSelector(paymentMethodSelector);
	// const selectedLanguage = useSelector(languageSelector);
	// const isGift = useSelector(selectGift);
	// const activeTab = useSelector(activeResident);

	// useEffect(() => {
	// 	let shippingThanaPrice = 0;
	// 	if (activeTab === "inBangladesh" && !isGift) {
	// 		const findDeliveryCharge = () => {
	// 			if (deliveryChargeValue && billerThana) {
	// 				const charge = deliveryChargeValue.find(
	// 					(item) => item.thana_id === billerThana.id
	// 				);

	// 				return charge ? charge.prices : 0;
	// 			}
	// 			return 0;
	// 		};
	// 		const shippingThanaPrice = findDeliveryCharge();
	// 		dispatch(setShippingThanaPrice(shippingThanaPrice));
	// 	} else if (activeTab === "inBangladesh" && isGift) {
	// 		const findDeliveryCharge = () => {
	// 			if (deliveryChargeValue && shippingThana) {
	// 				const charge = deliveryChargeValue.find(
	// 					(item) => item.thana_id === shippingThana.id
	// 				);
	// 				return charge ? charge.prices : 0;
	// 			}
	// 			return 0;
	// 		};
	// 		const shippingThanaPrice = findDeliveryCharge();
	// 		dispatch(setShippingThanaPrice(shippingThanaPrice));
	// 	} else if (activeTab === "nonResident") {
	// 		const findDeliveryCharge = () => {
	// 			if (deliveryChargeValue && shippingThana) {
	// 				const charge = deliveryChargeValue.find(
	// 					(item) => item.thana_id === shippingThana.id
	// 				);
	// 				return charge ? charge.prices : 0;
	// 			}
	// 			return 0;
	// 		};
	// 		const shippingThanaPrice = findDeliveryCharge();
	// 		dispatch(setShippingThanaPrice(shippingThanaPrice));
	// 	}
	// }, [
	// 	deliveryChargeValue,
	// 	billerThana,
	// 	shippingThana,
	// 	isGift,
	// 	activeTab,
	// 	dispatch,
	// ]);
	// const totalAmount = subtotal + deliveryCharge;
	let subtotal2 = 500;
	let deliveryCharge2 = 70;
	const totalAmount = subtotal2 + deliveryCharge2;

	// For Data Fetch
	// useEffect(() => {
	// 	dispatch(fetchDeliveryChargeData() as any);
	// }, [dispatch]);

	return (
		<div className="ct-flex-between lg:flex-row flex-col items-start space-y-5 lg:space-y-0 lg:space-x-5 my-3 rounded bg-white">
			{/* <div className="p-6 flex w-full lg:w-[40%] flex-col gap-y-2  bg-componentBg">
				<ul className="pb-6">
					<li className="ct-flex-between">
						<strong className="text-[#A0A0A0]">{t("delivery")}</strong>
						<p>
							<span className="text-sm font-semibold">
								({selectedPaymentMethod})
							</span>
						</p>
					</li>
				</ul>
				<p className="bg-gbPrimaryColor w-fit px-2 text-xs">
					{selectedPaymentMethod === "COD"
						? "ক্যাশ অন ডেলিভারি (COD)- পণ্য হাতে পাবার পরে মূল্য"
						: ""}
					{selectedPaymentMethod === "bKash"
						? "বিকাশ পেমেন্ট অপশন ব্যবহার করে মূল্য পরিশোধ করুন "
						: ""}

					{selectedPaymentMethod === "SSL Commerz"
						? "এক ক্লিকেই পেমেন্ট করুন"
						: ""}
				</p>
				<p className="bg-gbPrimaryColor w-fit px-2 text-xs">
					{selectedPaymentMethod === "COD" ? "পরিশোধ করুন" : ""}
				</p>
			</div> */}
			<div className="p-6 flex w-full flex-col gap-y-2 bg-componentBg">
				<ul className=" capitalize flex flex-col gap-y-2 pb-2 border-b border-khejuriBgSecondaryWhite">
					<li className="ct-flex-between">
						<strong className="text-[#A0A0A0]">subtotal</strong>
						<p>
							৳&nbsp;<span>{subtotal2.toFixed(2)}</span>
						</p>
					</li>
					<li className="ct-flex-between">
						<strong className="text-[#A0A0A0]">delivery-charge</strong>
						{deliveryCharge2 === 0 ? (
							<p className="w-[60%] text-end">
								{
									<span className=" text-xs font-medium capitalize bg-khejuriPrimaryColor p-1">
										( বিভাগ,জেলা এবং থানা সিলেক্ট করুন )
									</span>
								}
							</p>
						) : (
							<p>
								৳&nbsp;<span>{deliveryCharge2.toFixed(2)}</span>
							</p>
						)}
					</li>
					<li className="ct-flex-between">
						<strong className="text-[#A0A0A0]">delivery method</strong>
						<p>cash on delivery</p>
					</li>
				</ul>

				<div className="capitalize ct-flex-between">
					<strong className="text-khejuriActiveColor">total</strong>
					<p>
						৳&nbsp;<strong>{totalAmount.toFixed(2)}</strong>
					</p>
				</div>
			</div>
		</div>
	);
};

export default CheckoutAmount;
