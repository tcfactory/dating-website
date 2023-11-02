// @ts-nocheck

import React from "react";

const TextBox = ({ defaultValue }) => {
  return (
    <input
      type="text"
      className="block w-full bg-white border border-gray-300 text-black py-2 px-3 rounded-lg focus:outline-none"
      defaultValue={defaultValue}
    />
  );
};

export default TextBox;
