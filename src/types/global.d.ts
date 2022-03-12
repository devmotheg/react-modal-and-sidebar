/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

interface AppContextVal {
	isSidebarOpen?: boolean;
	isModalOpen?: boolean;
	openSidebar?: () => void;
	closeSidebar?: () => void;
	openModal?: () => void;
	closeModal?: () => void;
}

interface AppProviderProps {
	children: JSX.Element | JSX.Element[];
}
