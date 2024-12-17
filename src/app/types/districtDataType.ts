import { divisionData } from "./divisionDataType";
import { thanaData } from "./thanaDataType";

export interface districtData {
	id: number;
	name_en: string;
	name_bn: string;
	division: divisionData[];
	thana_info: thanaData[];
}
