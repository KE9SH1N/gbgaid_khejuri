import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import shoppingcartReducer from "../feature/checkout/shoppingcartSlice";
import productspecificationReducer from "../feature/product/productSpecificationSlice";
import cartReducer from "../feature/checkout/cartSlice";
import checkoutmodalReducer from "../feature/checkout/checkoutModalSlice";
import paymentmethodReducer from "../feature/checkout/paymentMethodSlice";

// Configuration for redux-persist
const persistConfig = {
	key: "root",
	storage,
	whitelist: ["shoppingcart"],
};

// Create persisted reducer
const persistedReducer = persistReducer(
	persistConfig,
	combineReducers({
		cart: cartReducer,
		// sidebar: sidebarReducer,
		shoppingcart: shoppingcartReducer,
		productspecification: productspecificationReducer,
		checkoutmodal: checkoutmodalReducer,
		// data: dataReducer,
		// categorydata: categorydataReducer,
		// checkoutresidenttab: checkoutresidenttabReducer,
		// deliverycharge: deliveryChargeReducer,
		// productdetails: productDetailsReducer,
		// filter: filterReducer,
		// checkoutForm: formReducer,
		// location: locationReducer,
		// district: districtReducer,
		paymentmethod: paymentmethodReducer,
		// countrycode: countrycodeReducer,
		// language: languageReducer,
		// alldata: alldataReducer,
		// contactusform: contactusformReducer,
		// requeststockform: requeststockformReducer,
		// productdetailstab: productdetailstabReducer,
		// sliderdata: sliderdataReducer,
		// bestsellingproducts: bestsellingproductsReducer,
		// userloginform: userloginformReducer,
		// usercreateaccountform: usercreateaccountformReducer,
		// userdashboardtab: userdashboardtabReducer,
		// userdetails: userdetailsReducer,
		// orderbyuserdetails: orderbyuserdetailsReducer,
		// orderDetails: orderDetailsReducer,
		// userprofile: userprofileReducer,
		// thana: thanaReducer,
		// userpinreset: userpinresetReducer,
		// userotp: userotpReducer,
		// forgetpass: forgetpassReducer,
		// locationdisable: locationdisableReducer,
		// toaster: toasterReducer,
	})
);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
