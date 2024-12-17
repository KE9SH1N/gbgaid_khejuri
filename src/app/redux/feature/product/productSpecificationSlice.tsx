import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface productDetailsTabState {
	activeDetailsTab: string;
}

const initialState: productDetailsTabState = {
	activeDetailsTab: "About",
};

const productSpecificationSlice = createSlice({
	name: "productspecification",
	initialState,
	reducers: {
		setActiveProductDetailsTab(state, action) {
			state.activeDetailsTab = action.payload;
		},
		resetProductDetailsTabState(state) {
			Object.assign(state, initialState);
		},
	},
});

export const selectActiveProductDetailsTab = (state: {
	productspecification: productDetailsTabState;
}) => state.productspecification.activeDetailsTab;

export const { setActiveProductDetailsTab, resetProductDetailsTabState } =
	productSpecificationSlice.actions;
export default productSpecificationSlice.reducer;
