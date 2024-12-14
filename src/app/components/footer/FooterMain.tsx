import { getCurrentYear } from "@/app/helper/getCurrentYear";
import Link from "next/link";
import React from "react";

const FooterMain = () => {
	return (
		<div className=" bg-gray-100">
			<div className="ct-container ct-flex-center flex-col gap-y-6 py-10 ">
				<ul className="ct-flex-center text-sm lg:text-base space-x-4 lg:space-x-5 text-[#4E4E4E] font-medium font-poppins">
					<li>
						<Link href={`/`}>About Us</Link>
					</li>
					<li>
						<Link href={`/`}>Teams & Condition </Link>
					</li>
					<li>
						<Link href={`/`}>Privacy Policy </Link>
					</li>
					<li>
						<Link href={`/`}>Refund Policy</Link>
					</li>
				</ul>
				<p className="font-poppins text-sm text-[#4E4E4E]">
					<span>© {getCurrentYear()}</span>&nbsp;&nbsp;
					<span className=" font-semibold capitalize">Ghorerbazar.</span>
					&nbsp;&nbsp;
					<span>All Rights Reserved.</span>
				</p>
			</div>
		</div>
	);
};

export default FooterMain;
