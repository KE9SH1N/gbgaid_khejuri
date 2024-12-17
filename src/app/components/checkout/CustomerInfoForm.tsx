"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
// 	clearBillerDistrict,
// 	clearBillerThana,
// 	selectBillerAdditionalPhoneNumber,
// 	selectBillerDistrict,
// 	selectBillerDivision,
// 	selectBillerHomeAddress,
// 	selectBillerName,
// 	selectBillerPhoneNumber,
// 	selectBillerThana,
// 	selectGift,
// 	selectNonResidentRelationShip,
// 	selectNonResidentWhatsAppNumber,
// 	setBillerAdditionalPhoneNumber,
// 	setBillerDistrict,
// 	setBillerDivision,
// 	setBillerHomeAddress,
// 	setBillerName,
// 	setBillerPhoneNumber,
// 	setBillerThana,
// 	setBillingAddressCheck,
// 	setNonResidentRelationShip,
// 	setNonResidentWhatsAppNumber,
// } from "../../redux/features/form/formSlice";
// import { selectLocationData } from "../../redux/features/location/locationDataSlice";
// import {
// 	fetchDistrictData,
// 	fetchDivisionData,
// } from "../../api/locationApiService";
// import { selectDistrictData } from "../../redux/features/location/districtDataSlice";

// import CountryDropDown from "../util/CountryDropDown";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import {
// 	selectSelectedCountryFlag,
// 	selectedCountryPhoneCodeEn,
// 	selectedCountryPhoneCodeBn,
// } from "../../redux/features/form/countryCodeSlice";

import UseOutsideClickAndEscape from "../../hooks/useDropdown";

// import { activeResident } from "../../redux/features/checkout/residentSlice";

import { Location } from "../../types/locationType";

// import {
// 	isDistrictDisabled,
// 	isThanaDisabled,
// 	setDistrictDisabled,
// 	setThanaDisabled,
// } from "../../redux/features/location/locationDisableSlice";
import { validatePhoneNumber } from "@/app/lib/validation/validatePhoneNumber";
import { districtData } from "@/app/types/districtDataType";
import { thanaData } from "@/app/types/thanaDataType";
import AddressDropdown from "./common/AddressDropdown";
import AddressSearchDropdown from "./common/AddressSearchDropdown";

const CustomerInfoForm = () => {
	const dispatch = useDispatch();

	// const locationData = useSelector(selectLocationData);
	// const districtData = useSelector(selectDistrictData);

	const [phoneNumberInput, setPhoneNumberInput] = useState<string>("");
	const [additionalPhoneNumberInput, setadditionalPhoneNumberInput] =
		useState<string>("");
	const [whatsAppNumberInput, setwhatsAppNumberInput] = useState<string>("");
	const [isDropdownopen, setDropdownopen] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Custom hook for dropdown ref
	UseOutsideClickAndEscape(dropdownRef, setDropdownopen);

	// For Data Fetch
	// useEffect(() => {
	// 	dispatch(fetchDivisionData() as any);
	// }, [dispatch]);

	// For Data Fetch
	// useEffect(() => {
	// 	dispatch(fetchDistrictData() as any);
	// }, [dispatch]);

	// Conditional Css for phone number input field
	const phoneNumberInputBorderColor =
		phoneNumberInput.length === 0
			? "border-gray-300"
			: phoneNumberInput.length < 11
			? "border-gbInactiveColorLight"
			: "border-gbActiveColor";

	// Conditional Css for additional phone number input field
	const additionalPhoneNumberInputBorderColor =
		additionalPhoneNumberInput.length === 0
			? "border-gray-300"
			: additionalPhoneNumberInput.length < 11
			? "border-gbInactiveColorLight"
			: "border-gbActiveColor";
	// Conditional Css for whats app phone number input field
	const whatsAppPhoneNumberInputBorderColor =
		whatsAppNumberInput.length === 0
			? "border-gray-300"
			: whatsAppNumberInput.length < 5
			? "border-gbInactiveColorLight"
			: "border-gbActiveColor";

	// Customer Info Selector from RTK
	// const billerName = useSelector(selectBillerName);
	// const billerPhoneNumber = useSelector(selectBillerPhoneNumber);
	// const billerAdditionalPhoneNumber = useSelector(
	// 	selectBillerAdditionalPhoneNumber
	// );
	// const billerDivision = useSelector(selectBillerDivision);
	// const billerDistrict = useSelector(selectBillerDistrict);
	// const billerThana = useSelector(selectBillerThana);
	// const billerHomeAddress = useSelector(selectBillerHomeAddress);
	// const nonResidentWhatsAppNumber = useSelector(
	// 	selectNonResidentWhatsAppNumber
	// );
	// const nonResidentRelationShip = useSelector(selectNonResidentRelationShip);
	// const selectedLanguage = useSelector(languageSelector);

	const handleBillerName = (e: React.ChangeEvent<HTMLInputElement>) => {
		// dispatch(setBillerName(e.target.value));
		// dispatch(setBillingAddressCheck(false));
	};

	const handleBillerPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = validatePhoneNumber(e.target.value);
		if (value !== null) {
			setPhoneNumberInput(value);
			// dispatch(setBillerPhoneNumber(value));
			// dispatch(setBillingAddressCheck(false));
		}
	};
	const handleBillerAdditionalPhoneNumber = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = validatePhoneNumber(e.target.value);
		if (value !== null) {
			setadditionalPhoneNumberInput(value);
			// dispatch(setBillerAdditionalPhoneNumber(e.target.value));
			// dispatch(setBillingAddressCheck(false));
		}
	};

	const handleBillerHomeAddress = (
		e: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		// dispatch(setBillerHomeAddress(e.target.value));
		// dispatch(setBillingAddressCheck(false));
	};

	const handleNonResidentWhatsAppNumber = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = e.target.value;
		if (/^[\d০১২৩৪৫৬৭৮৯]*$/.test(value)) {
			setwhatsAppNumberInput(value);
			// dispatch(setNonResidentWhatsAppNumber(e.target.value));
		}
	};

	const handleNonResidentRelationShip = (
		e: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		// dispatch(setNonResidentRelationShip(e.target.value));
	};
	const handleBillerDivision = (e: React.ChangeEvent<HTMLInputElement>) => {
		// dispatch(setBillerName(e.target.value));
		// dispatch(setBillingAddressCheck(false));
	};

	const handleBillerDistrict = (e: React.ChangeEvent<HTMLInputElement>) => {
		// dispatch(setBillerName(e.target.value));
		// dispatch(setBillingAddressCheck(false));
	};

	const handleBillerThana = (e: React.ChangeEvent<HTMLInputElement>) => {
		// dispatch(setBillerName(e.target.value));
		// dispatch(setBillingAddressCheck(false));
	};

	const [district, setDistrict] = useState<districtData[]>([]);
	const [thana, setThana] = useState<thanaData[]>([]);

	const toggleDropdownCountry = () => {
		setDropdownopen(!isDropdownopen);
	};

	const closeParentDropdown = () => {
		setDropdownopen(false);
	};

	// const disableDistrict = useSelector(isDistrictDisabled);
	// const disableThana = useSelector(isThanaDisabled);

	return (
		<div className={`relative w-full py-4`}>
			<div className="relative w-full">
				<form
					action=""
					className="grid grid-cols-1 text-sm gap-y-4 font-poppins"
				>
					<div className=" w-full ct-flex-start flex-col gap-y-2">
						<label
							htmlFor="cName"
							className=" capitalize text-xs text-[#4E4E4E]"
						>
							আপনার নাম <span className="text-khejuriInactiveColor">*</span>
						</label>
						<input
							id="cName"
							type="text"
							// value={billerName ?? ""}
							onChange={handleBillerName}
							className="w-full bg-khejuriBgSecondaryWhite rounded px-3 py-2 border focus:border-black focus:outline-none placeholder:text-xs placeholder:capitalize"
							placeholder="আপনার নাম লিখুন"
							title="আপনার নাম লিখুন - যেমন মোঃ আরিফ "
						/>
					</div>

					<div className="flex-col space-y-4">
						<div className="relative w-full ct-flex-start flex-col gap-y-2">
							<label
								htmlFor="cphoneNumber"
								className=" capitalize text-xs text-[#4E4E4E]"
							>
								ফোন নাম্বার
								<span className="text-khejuriInactiveColor">*</span>
							</label>
							<input
								id="cphoneNumber"
								type="text"
								inputMode="numeric"
								// value={billerPhoneNumber ?? ""}
								onChange={handleBillerPhoneNumber}
								className={`w-full bg-khejuriBgSecondaryWhite pl-12 rounded px-3 py-2 border focus:border-black focus:outline-none placeholder: capitalize ${phoneNumberInputBorderColor}`}
								placeholder="+880 1777777777"
								title="যেমন-01XX5-607080"
							/>
							<span className=" absolute top-[54%] left-[2%]">+88</span>
						</div>
						<div className="relative w-full ct-flex-start flex-col gap-y-2">
							<label
								htmlFor="cadditionalphoneNumber"
								className=" capitalize text-xs text-[#4E4E4E]"
							>
								অতিরিক্ত ফোন নাম্বার
							</label>
							<input
								id="cadditionalphoneNumber"
								type="text"
								inputMode="numeric"
								// value={billerAdditionalPhoneNumber ?? ""}
								onChange={handleBillerAdditionalPhoneNumber}
								className={`w-full bg-khejuriBgSecondaryWhite pl-12 rounded px-3 py-2 border focus:border-black focus:outline-none placeholder: capitalize ${additionalPhoneNumberInputBorderColor}`}
								placeholder="+880 1777777777"
								title="যেমন +880 1777777777"
							/>
							<span className=" absolute top-[54%] left-[2%]">+88</span>
						</div>
						<div>
							<label
								htmlFor="rName"
								className=" capitalize text-xs text-[#4E4E4E]"
							>
								আপনার ঠিকানা
								<span className="text-khejuriInactiveColor">*</span>
							</label>

							<div>
								<div className="w-full ct-flex-between">
									<AddressDropdown
										dropdownText="বিভাগ"
										// selectedValue={billerDivision?.nameBn}
										onChange={(
											value: number,
											nameBn: string,
											nameEn: string
										) => {
											// dispatch(
											// 	setBillerDivision({
											// 		id: value,
											// 		nameBn: nameBn,
											// 		nameEn: nameEn,
											// 	})
											// );
											// dispatch(setBillingAddressCheck(false));
											// dispatch(setDistrictDisabled(true));
											// dispatch(
											// 	clearBillerDistrict({
											// 		id: 0,
											// 		nameBn: "",
											// 		nameEn: "",
											// 	})
											// );
											// dispatch(
											// 	clearBillerThana({ id: "", nameBn: "", nameEn: "" })
											// );
											// const divisionData = locationData.find(
											// 	(item: Location) => item?.id === value
											// );
											// {
											// 	divisionData?.district_info &&
											// 		setDistrict(divisionData?.district_info);
											// }
										}}
										// locationData={locationData}
										dataType="location"
									/>
									<div
									// className={` ${
									// 	!disableDistrict
									// 		? " text-gray-400 cursor-not-allowed pointer-events-none"
									// 		: ""
									// }`}
									>
										<AddressDropdown
											dropdownText="জেলা"
											// selectedValue={ billerDistrict.nameBn}
											districtData={district}
											dataType="district"
											// disabled={!billerDivision.nameBn}

											onChange={(
												value: number,
												nameBn: string,
												nameEn: string
											) => {
												// dispatch(
												// 	setBillerDistrict({
												// 		id: value,
												// 		nameBn: nameBn,
												// 		nameEn: nameEn,
												// 	})
												// );
												// dispatch(setBillingAddressCheck(false));
												// dispatch(setThanaDisabled(true));
												// dispatch(
												// 	clearBillerThana({
												// 		id: "",
												// 		nameBn: "",
												// 		nameEn: "",
												// 	})
												// );
												// const districtDataInfo = districtData.find(
												// 	(item: thanaDataInfo) => item?.id === value
												// );
												// {
												// 	districtDataInfo?.thana_info &&
												// 		setThana(districtDataInfo?.thana_info);
												// }
											}}
										/>
									</div>
								</div>
								<div
								// className={` ${
								// 	!disableThana
								// 		? " text-gray-400 cursor-not-allowed pointer-events-none"
								// 		: ""
								// }`}
								>
									<AddressSearchDropdown
										dropdownText="থানা"
										// selectedValue={billerThana.nameBn}
										onChange={(
											value: number,
											nameBn: string,
											nameEn: string
										) => {
											// dispatch(
											// 	setBillerThana({
											// 		id: value,
											// 		nameBn: nameBn,
											// 		nameEn: nameEn,
											// 	})
											// );
											// dispatch(setBillingAddressCheck(false));
										}}
										locationData={thana}
										// disabled={
										// 	!billerDistrict.nameBn
										// }
									/>
								</div>
							</div>
						</div>
						<div className="relative w-full ct-flex-start flex-col gap-y-2">
							<textarea
								id="rDeliveryAddress"
								className="resize-none w-full bg-khejuriBgSecondaryWhite rounded px-4 py-2 border focus:border-black focus:outline-none placeholder:text-xs"
								rows={3}
								cols={1}
								placeholder="আপনার বিস্তারিত ঠিকানা লিখুন,,,"
								// value={billerHomeAddress ?? ""}
								onChange={handleBillerHomeAddress}
								title="রোড-১৪, বাসা-২২, নিকুঞ্জ-২ খিলক্ষেত ঢাকা"
							></textarea>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CustomerInfoForm;
