import React, { ChangeEventHandler } from "react";

interface GenderComboBoxProps {
  selectedGender: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

const GenderComboBox: React.FC<GenderComboBoxProps> = ({
  selectedGender,
  onChange,
}) => {
  const genderOptions = ["Woman"];

  return (
    <select
      value={selectedGender}
      onChange={onChange}
      className="bg-white border border-gray-300 text-black py-2 px-3 rounded-lg focus:outline-none"
    >
      {genderOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default GenderComboBox;
