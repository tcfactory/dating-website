import React, { useState } from "react";
import SignUpForm from "./signupcontent";
import Image from "next/image";

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <button
        className="bg-blue-500 text-white p-2 rounded-lg"
        onClick={openModal}
      >
        Open Modal
      </button>
      {modalOpen && (
        <div className="z-50 fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="bg-black rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="px-4 pt-3 pb-4 sm:px-6 sm:pt-5 sm:pb-4">
              <div className="float-right">
                <button
                  className="text-white p-2 rounded-lg"
                  onClick={closeModal}
                >
                  <Image
                    src="white-x.png"
                    width={20}
                    height={20}
                    alt="logo"
                  ></Image>
                </button>
              </div>
            </div>
            <div className="px-4 pt-5 pb-4 sm:px-6 sm:pt-6 sm:pb-4">
              <div className="text-center">
                <SignUpForm></SignUpForm>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
