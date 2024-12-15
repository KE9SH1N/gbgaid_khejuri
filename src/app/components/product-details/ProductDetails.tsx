import React from "react";

const ProductDetails = () => {
	let currentPrice = 950;
	let regularPrice = 1050;
	return (
		<div>
			<div className="font-poppins">
				<h1 className=" font-bold text-[#4E4E4E] text-[40px]">
					খেজুরি পাটালি গুড় ১ কেজি
				</h1>
				<p className=" my-2 text-sm text-[#808080] leading-6">
					ক্রিস্টালাইজেশন একটি প্রাকৃতিক প্রক্রিয়া। এটি মধুর গুণমানকে কোনোভাবেই
					প্রভাবিত করে না। তবে ক্রিস্টালাইজড মধু দানাদার হওয়াতে খাওয়ার সময়
					অনেকেই অস্বস্তি বোধ করেন। তাই ঘরের বাজার এর ‘’ক্রিস্টাল হানি’’
					সর্বাধোনিক প্রযুক্তির ব্যবহার করে , প্রাকৃতিক পুষ্টিগুণ বজায় রেখে 
					স্বয়ংক্রিয়ভাবে প্রক্রিয়াজাত করা হয়। ফলে ঘরের বাজারের ‘’ক্রিস্টাল
					হানি’’ হয় সম্পূর্ন দানা বিহীন।
				</p>
				<div className="ct-flex-start items-center  gap-x-3 font-poppins font-semibold leading-7 text-[32px] capitalize">
					<p className="flex items-center text-gray-400 text-lg mt-1">
						<span
							className="line-through "
							style={{ fontFamily: "Noto Sans Bengali" }}
						>
							৳
						</span>
						<span className="font-semibold line-through ml-1">
							&nbsp;{regularPrice.toFixed(2)}
						</span>
					</p>
					<p className="text-black">
						<span
							className="text-xl"
							style={{ fontFamily: "Noto Sans Bengali" }}
						>
							৳
						</span>
						<span className="text-2xl font-semibold">
							&nbsp;{currentPrice.toFixed(2)}
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
