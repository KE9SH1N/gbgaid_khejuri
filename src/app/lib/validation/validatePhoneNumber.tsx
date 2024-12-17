export const validatePhoneNumber = (value: string) => {
	// if (/^\d{0,11}$/.test(value) && value.length <= 11) {
	// 	return value;
	// }
	if (/^\d{0,11}$/.test(value)) {
		return value;
	}
	return null;
};
