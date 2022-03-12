/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useState } from "react";

const AppContext = React.createContext<AppContextVal>({});

const AppProvider = ({ children }: AppProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
export default AppProvider;
