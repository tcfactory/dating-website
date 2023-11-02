import React from "react";

interface DatePickerProps {
  defaultValue: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ defaultValue }) => {
  return (
    <input
      type="date"
      className="block w-full bg-white border border-gray-300 text-black py-2 px-3 rounded-lg focus:outline-none"
      defaultValue={defaultValue}
    />
  );
};

export default DatePicker;
