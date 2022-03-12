/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";

import { AppContext } from "./AppProvider";

const Modal = () => {
  const { isModalOpen, closeModal } = useContext(AppContext);

  let [bgStyling, styling] = ["invisible opacity-0", "-translate-y-8"];
  if (isModalOpen)
    [bgStyling, styling] = ["visible opacity-1", "translate-y-0"];

  return (
    <div
      className={`absolute left-0 transition-all z-20 flex items-center justify-center w-full h-full top-0 bg-black/40 ${bgStyling}`}>
      <div
        className={`transition-all relative bg-white rounded h-44 w-96 max-w-[90%] flex items-center justify-center ${styling}`}>
        <button className="absolute p-1 right-px top-px" onClick={closeModal}>
          <span className="sr-only">close modal</span>
          <FaTimes className="w-6 h-6 transition text-neutral-600 hover:text-red-600" />
        </button>
        <p className="p-2 text-2xl font-bold capitalize">
          modal content here...
        </p>
      </div>
    </div>
  );
};

export default Modal;
