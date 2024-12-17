import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface paymentMethodState {
	selectedMethod: string | null;
}

const initialState: paymentMethodState = {
	selectedMethod: "COD",
};

const paymentMethodSlice = createSlice({
	name: "paymentmethod",
	initialState,
	reducers: {
		setSelectedPaymentMethod(state, action: PayloadAction<string>) {
			state.selectedMethod = action.payload;
		},
		resetPaymentMethodState(state) {
			Object.assign(state, initialState);
		},
	},
});

export const paymentMethodSelector = (state: {
	paymentmethod: paymentMethodState;
}) => state.paymentmethod.selectedMethod;

export const { setSelectedPaymentMethod, resetPaymentMethodState } =
	paymentMethodSlice.actions;
export default paymentMethodSlice.reducer;
