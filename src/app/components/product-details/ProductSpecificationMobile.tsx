"use client";
import React, { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import Properties from "./specifications/Properties";
import Process from "./specifications/Process";
import Benefits from "./specifications/Benefits";
import Preservation from "./specifications/Preservation";

const ProductSpecificationMobile = () => {
	const [openIndex, setOpenIndex] = useState(0);
	// Product details Selector
	// const productDetailsData = useSelector(selectProductDetailsData);

	const handleToggle = (index: number) => {
		if (openIndex !== index) {
			setOpenIndex(index);
		}
	};

	return (
		<div>
			<div className="w-full flex flex-col lg:hidden px-2 my-5">
				<div className="border-b border-gray-200">
					<button
						onClick={() => handleToggle(0)}
						className="w-full text-left py-3 px-5 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
					>
						<span className="font-semibold capitalize text-sm">
							খেজুর গুড়-এর বৈশিষ্ট্য
						</span>
						<IoMdArrowDropup
							className={`text-xl smooth-animation-mid ${
								openIndex === 0 ? "rotate-180" : ""
							}`}
						/>
					</button>
					{openIndex === 0 && (
						<div>
							<Properties />
						</div>
					)}
				</div>

				<div className="border-b border-gray-200">
					<button
						onClick={() => handleToggle(1)}
						className="w-full text-left py-3 px-5 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
					>
						<span className="font-semibold capitalize text-sm">
							খেজুর গুড় তৈরির প্রক্রিয়া
						</span>
						<IoMdArrowDropup
							className={`text-xl smooth-animation-mid ${
								openIndex === 1 ? "rotate-180" : ""
							}`}
						/>
					</button>
					{openIndex === 1 && (
						<div>
							<Process />
						</div>
					)}
				</div>

				<div className="border-b border-gray-200">
					<button
						onClick={() => handleToggle(2)}
						className="w-full text-left py-3 px-5 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
					>
						<span className="font-semibold capitalize text-sm">
							খেজুর গুড়-এর উপকারিতা
						</span>
						<IoMdArrowDropup
							className={`text-xl smooth-animation-mid ${
								openIndex === 2 ? "rotate-180" : ""
							}`}
						/>
					</button>
					{openIndex === 2 && (
						<div>
							<Benefits />
						</div>
					)}
				</div>

				<div className="border-b border-gray-200">
					<button
						onClick={() => handleToggle(3)}
						className="w-full text-left py-3 px-5 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
					>
						<span className="font-semibold capitalize text-sm">
							খেজুর গুড়-এর সংরক্ষণ পদ্ধতি
						</span>
						<IoMdArrowDropup
							className={`text-xl smooth-animation-mid ${
								openIndex === 3 ? "rotate-180" : ""
							}`}
						/>
					</button>
					{openIndex === 3 && (
						<div>
							<Preservation />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductSpecificationMobile;
