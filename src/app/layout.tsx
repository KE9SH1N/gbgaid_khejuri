import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
	src: "./fonts/poppins-medium-webfont.woff",
	variable: "--font-poppins",
	weight: "100 900",
});
const anekBangla = localFont({
	src: "./fonts/AnekBangla-Medium.woff",
	variable: "--font-anek-bangla",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Khejuri",
	description: "Khejuri",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${poppins.variable} ${anekBangla.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
