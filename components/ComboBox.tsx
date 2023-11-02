import React from "react";

interface Option {
  value: string;
  label: string;
}

interface ComboBoxProps {
  options: Option[];
  defaultValue: string;
}

const ComboBox: React.FC<ComboBoxProps> = ({ options, defaultValue }) => {
  return (
    <select
      className="block w-full bg-white border border-gray-300 text-black py-2 px-3 rounded-lg focus:outline-none"
      defaultValue={defaultValue}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default ComboBox;
