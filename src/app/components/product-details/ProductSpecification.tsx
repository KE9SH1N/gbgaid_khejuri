"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	selectActiveProductDetailsTab,
	setActiveProductDetailsTab,
} from "@/app/redux/feature/product/productSpecificationSlice";
import Properties from "./specifications/Properties";
import Process from "./specifications/Process";
import Benefits from "./specifications/Benefits";
import Preservation from "./specifications/Preservation";

const ProductSpecification = () => {
	const dispatch = useDispatch();
	const activeProductDetailsTab = useSelector(selectActiveProductDetailsTab);

	const handleResidentClick = (tabName: string) => {
		dispatch(setActiveProductDetailsTab(tabName));
	};

	let healthBenifitsData = [];

	const renderProductDetailsTab = () => {
		if (activeProductDetailsTab === "About") {
			return <Properties />;
		} else if (activeProductDetailsTab === "HealthBenifits") {
			return <Process />;
		} else if (activeProductDetailsTab === "two") {
			return <Process />;
		} else if (activeProductDetailsTab === "Benefits") {
			return <Benefits />;
		} else if (activeProductDetailsTab === "SideEffect") {
			return <Preservation />;
		} else if (activeProductDetailsTab === "Certification") {
			return null;
		} else if (activeProductDetailsTab === "Review") {
			return null;
		} else {
			return;
		}
	};

	return (
		<div className="my-10">
			<div>
				<ul className="w-full capitalize md:ct-flex-start text-sm text-center lg:font-bold ct-grid-cols-3 gap-x-0 bg-[#F9F9F9]">
					<li
						onClick={() => handleResidentClick("About")}
						className={`w-full py-4 border-b-2 ${
							activeProductDetailsTab === "About"
								? "border-khejuriPrimaryColor text-khejuriPrimaryColor"
								: ""
						} cursor-pointer smooth-animation-mid`}
					>
						খেজুর গুড়-এর বৈশিষ্ট্য
					</li>
					{healthBenifitsData.length > 0 && (
						<li
							onClick={() => handleResidentClick("HealthBenifits")}
							className={`w-full py-4 border-b-2 ${
								activeProductDetailsTab === "HealthBenifits"
									? "border-khejuriPrimaryColor text-khejuriPrimaryColor"
									: ""
							} cursor-pointer smooth-animation-mid`}
						>
							খেজুর গুড়-এর বৈশিষ্ট্য
						</li>
					)}

					<li
						onClick={() => handleResidentClick("two")}
						className={`w-full py-4 border-b-2 ${
							activeProductDetailsTab === "two"
								? "border-khejuriPrimaryColor text-khejuriPrimaryColor"
								: ""
						} cursor-pointer smooth-animation-mid`}
					>
						খেজুর গুড় তৈরির প্রক্রিয়া
					</li>

					<li
						onClick={() => handleResidentClick("Benefits")}
						className={`w-full py-4 border-b-2 ${
							activeProductDetailsTab === "Benefits"
								? "border-khejuriPrimaryColor text-khejuriPrimaryColor"
								: ""
						} cursor-pointer smooth-animation-mid`}
					>
						খেজুর গুড়-এর উপকারিতা
					</li>

					<li
						onClick={() => handleResidentClick("SideEffect")}
						className={`w-full py-4 border-b-2 ${
							activeProductDetailsTab === "SideEffect"
								? "border-khejuriPrimaryColor text-khejuriPrimaryColor"
								: ""
						} cursor-pointer smooth-animation-mid`}
					>
						সংরক্ষণ পদ্ধতি
					</li>
				</ul>
			</div>
			<div className="w-full">{renderProductDetailsTab()}</div>
		</div>
	);
};

export default ProductSpecification;
