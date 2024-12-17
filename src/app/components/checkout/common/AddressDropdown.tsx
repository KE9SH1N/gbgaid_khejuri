import React, { useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import UseOutsideClickAndEscape from "@/app/hooks/useDropdown";
import { Location } from "@/app/types/locationType";
import { districtData } from "@/app/types/districtDataType";

interface dropdownMenuText {
	dropdownText: string;
	onChange: (value: number, nameBn: string, nameEn: string) => void;
	selectedValue?: string | null;
	districtData?: districtData[];
	locationData?: Location[];
	dataType: "location" | "district";
}

const AddressDropdown: React.FC<dropdownMenuText & { disabled?: boolean }> = ({
	dropdownText,
	selectedValue,
	onChange,
	districtData,
	locationData,
	dataType,
	disabled,
}) => {
	const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Custom hook for dropdown ref
	UseOutsideClickAndEscape(dropdownRef, setDropdownOpen);

	const toggleDropdownCategory = () => {
		setDropdownOpen(!isDropdownOpen);
	};

	const handleSelectLocation = (
		locationId: number,
		locationNameBn: string,
		locationNameEn: string
	) => {
		setDropdownOpen(false);
		onChange(locationId, locationNameBn, locationNameEn);
	};

	const filteredData = dataType === "location" ? locationData : districtData;
	const filteredLocationData = filteredData?.filter(
		(locationItem) =>
			locationItem.name_en.toLowerCase().startsWith ||
			locationItem.name_bn.toLowerCase().startsWith
	);

	return (
		<div>
			<div
				className={`${
					disabled ? "pointer-events-none opacity-50" : ""
				}  xl:w-56 lg:w-48 md:w-80 sm:w-48 w-36 gap-4 py-3 `}
				ref={dropdownRef}
			>
				<div className="w-full ct-flex-between gap-x-4">
					<div
						onClick={toggleDropdownCategory}
						className="w-full ct-flex-between shadow-md pl-2 font-medium cursor-pointer rounded py-2 bg-gbBgSecondaryWhite capitalize"
					>
						<div className="text-xs lg:text-sm text-[#4E4E4E]">
							{selectedValue || dropdownText}
						</div>
						<div>
							{!isDropdownOpen ? (
								<IoIosArrowDown className=" mx-1 lg:mx-4 font-medium text-lg" />
							) : (
								<IoIosArrowUp className="mx-1 lg:mx-4 font-medium text-lg" />
							)}
						</div>
					</div>
				</div>
				<div className="w-full relative">
					<div className="w-full">
						<div
							className={`w-full h-[198px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gbCustomScrollThumbColor scrollbar-track-[#FEF3E9] absolute shadow-lg bg-white top-1 left-0 flex flex-col items-start rounded-sm z-40 smooth-animation ${
								isDropdownOpen ? "opacity-100" : "hidden opacity-0"
							}`}
						>
							<ul className="w-full">
								{filteredLocationData?.map((locationItem) => {
									return (
										<li
											key={locationItem.id}
											onClick={() =>
												handleSelectLocation(
													locationItem.id,
													locationItem.name_bn,
													locationItem.name_en
												)
											}
											className="w-full py-2 px-3 border-b text-xs border-borderLine bg-componentBg hover:text-[#ffffff] hover:bg-gbPrimaryColor hover:opacity-90 smooth-animation-mid"
										>
											<span>{locationItem.name_bn}</span>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddressDropdown;
