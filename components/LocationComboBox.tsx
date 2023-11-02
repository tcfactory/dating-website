import React, { ChangeEventHandler } from "react";

interface LocationComboBoxProps {
  selectedLocation: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

const LocationComboBox: React.FC<LocationComboBoxProps> = ({
  selectedLocation,
  onChange,
}) => {
  const locationOptions = ["Tennessee", "California", "New York", "Texas"];

  return (
    <select
      value={selectedLocation}
      onChange={onChange}
      className="bg-white border border-gray-300 text-black py-2 px-3 rounded-lg focus:outline-none"
    >
      {locationOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default LocationComboBox;
