"use client";
import React, { useState } from "react";
import { IoCallOutline, IoCopyOutline } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const CustomerSupport = () => {
	return (
		<div className="w-full ct-flex-start flex-col lg:flex-row gap-y-5 lg:gap-x-5 my-5 px-2 lg:px-0">
			<div>
				<h3 className="text-[#4E4E4E] text-[18px] font-poppins font-semibold">
					24/7 কাস্টমার সাপোর্ট
				</h3>
				<div className="w-full ct-flex-between items-start gap-y-3 flex-col lg:flex-row my-2">
					<div className="w-full ct-flex-start items-center flex-row space-x-2">
						<span className=" bg-khejuriPrimaryColorLight text-xs lg:text-lg ct-flex-center gap-x-1 w-fit rounded px-2 py-2 lg:py-[2px]">
							<IoIosCall className="text-base" />
							+8809642922922
						</span>
						{/* <button
						// onClick={handleCallClick}
						className="lg:hidden flex items-center gap-x-1 border border-gray-300 px-2 py-[3px] rounded text-green-500"
					>
						<IoCallOutline className="text-xl" />
						<span className="capitalize">call</span>
					</button> */}
						<button
							// onClick={handleCopy}
							className={`ct-flex-center items-center border  ${"border-khejuriPrimaryColorLight"} w-8 h-8 rounded-full bg-khejuriPrimaryColorLight`}
						>
							<IoCopyOutline
								className={`text-base ${"text-KhejuriPrimaryColor"}`}
							/>

							<span className={`capitalize ${"text-slate-400"}`}></span>
						</button>
					</div>
				</div>
			</div>
			<div>
				<h3 className="text-[#4E4E4E] text-[18px] font-poppins font-semibold">
					হোয়াটস এপ করুন
				</h3>
				<div className="w-full ct-flex-between items-start gap-y-3 flex-col lg:flex-row my-2">
					<div className="w-full ct-flex-start items-center flex-row space-x-2">
						<span className=" bg-[#32B84033] text-[#32B840] text-xs lg:text-lg ct-flex-center gap-x-1 w-fit rounded px-2 py-2 lg:py-[2px]">
							<IoIosCall className="text-base" />
							+8809642922922
						</span>
						{/* <button
						// onClick={handleCallClick}
						className="lg:hidden flex items-center gap-x-1 border border-gray-300 px-2 py-[3px] rounded text-green-500"
					>
						<IoCallOutline className="text-xl" />
						<span className="capitalize">call</span>
					</button> */}
						<button
							// onClick={handleCopy}
							className={`ct-flex-center items-center border  ${"border-[#D6F1D9]"} w-8 h-8 rounded-full bg-[#D6F1D9]`}
						>
							<FaWhatsapp className={`text-base ${"text-[#32B840]"}`} />

							<span className={`capitalize ${"text-slate-400"}`}></span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomerSupport;
