import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Navbar: React.FC = ({}) => {
	return (
		<div className="bg-[#F9F9F9] py-[24px]">
			<div className="ct-container ct-flex-between">
				<div></div>
				<Link href={`/`}>
					<div>
						<Image
							src="/image/brand-logo.svg"
							alt=""
							width={130}
							height={55}
							priority={true}
						/>
					</div>
				</Link>

				<div className="">
					<button
						className="flex cursor-pointer text-khejuriPrimaryColor"
						// onClick={handleToggleCart}
					>
						<FiShoppingCart className="text-2xl" />
						{/* <span>({totalQuantity})</span> */}
						<span>(8)</span>
					</button>
				</div>
			</div>

			{/* searchbox */}

			{/* Floating Cart */}
			{/* <div
			className={`smooth-animation absolute ${
				isFloatCartOpen && pathname !== `/${selectedLanguage}/checkout`
					? "opacity-100 pointer-events-auto"
					: "opacity-0 pointer-events-none"
			}`}
			>
				<FloatingCart />
			</div> */}
		</div>
	);
};

export default Navbar;
