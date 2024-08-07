import { cookieToInitialState } from 'wagmi'
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Web3ModalProvider } from "./provider"
import { headers } from 'next/headers'
import { config } from '../../config'


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Web3 info ",
	description: "Hello world！",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const initialState = cookieToInitialState(config, headers().get('cookie'))

	return (
		<html lang="en">
			<body className={`${inter.className} dark:bg-gray-950 bg-gray-50 dark:text-gray-50 text-gray-950`}>
				<Web3ModalProvider initialState={initialState}>
					{children}
				</Web3ModalProvider>
			</body>
		</html>
	)
}

export function ConnectButton() {
	return <w3m-button />
}

export function getBlockHeight() {
	return "0"
	
}