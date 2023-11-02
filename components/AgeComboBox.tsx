import React, { ChangeEvent } from "react";

interface AgeComboBoxProps {
  selectedMinAge: number;
  selectedMaxAge: number;
  onMinAgeChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onMaxAgeChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const AgeComboBox: React.FC<AgeComboBoxProps> = ({
  selectedMinAge,
  selectedMaxAge,
  onMinAgeChange,
  onMaxAgeChange,
}) => {
  const ageOptions: number[] = [];
  for (let i = 18; i <= 99; i++) {
    ageOptions.push(i);
  }

  return (
    <div>
      <label htmlFor="min-age">Min Age:</label>
      <select
        id="min-age"
        value={selectedMinAge}
        onChange={onMinAgeChange}
        className="bg-white text-black px-4 py-2 rounded"
      >
        {ageOptions.map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </select>
      <label htmlFor="max-age" className="ml-2">
        Max Age:
      </label>
      <select
        id="max-age"
        value={selectedMaxAge}
        onChange={onMaxAgeChange}
        className="bg-white text-black px-4 py-2 rounded"
      >
        {ageOptions.map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AgeComboBox;
