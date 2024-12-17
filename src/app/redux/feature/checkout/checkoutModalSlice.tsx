import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckoutModalState {
	isCheckoutModalOpen: boolean;
}

const initialState: CheckoutModalState = {
	isCheckoutModalOpen: false,
};

const checkoutModalSlice = createSlice({
	name: "checkoutmodal",
	initialState,
	reducers: {
		toggleCheckoutModal(state) {
			state.isCheckoutModalOpen = !state.isCheckoutModalOpen;
		},

		closeCheckoutModal(state) {
			state.isCheckoutModalOpen = false;
		},
	},
});

export const checkoutModalOpen = (state: {
	checkoutmodal: CheckoutModalState;
}) => state.checkoutmodal.isCheckoutModalOpen;

export const { toggleCheckoutModal, closeCheckoutModal } =
	checkoutModalSlice.actions;

export default checkoutModalSlice.reducer;
