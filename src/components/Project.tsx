/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";

import { AppContext } from "./AppProvider";
import Sidebar from "./Sidebar";
import Modal from "./Modal";

const Project = () => {
	const { openSidebar, openModal } = useContext(AppContext);

	return (
		<>
			<Modal />
			<header className="fixed top-0 left-0 p-4">
				<button onClick={openSidebar}>
					<span className="sr-only">open sidebar</span>
					<FaBars className="w-10 h-10 transition duration-300 text-neutral-600 hover:text-blue-600" />
				</button>
			</header>
			<Sidebar />
			<main className="flex flex-col items-center justify-center min-h-screen">
				<button
					className="px-4 py-1 text-2xl font-bold text-white capitalize transition duration-300 bg-black border-2 border-black border-solid rounded hover:text-black hover:bg-white"
					onClick={openModal}>
					show modal
				</button>
				<a
					className="block mx-auto mt-6 text-sm font-bold w-fit"
					href="https://github.com/devmotheg">
					Coded by Mohamed Muntasir
				</a>
			</main>
		</>
	);
};

export default Project;
