"use client";
import { persistor, store } from "@/app/redux/store/store";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

interface ProviderProps {
	children: React.ReactNode;
}
const Providers: React.FC<ProviderProps> = ({ children }) => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{children}
			</PersistGate>
		</Provider>
	);
};

export default Providers;
