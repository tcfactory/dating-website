// @ts-nocheck

import React from "react";
import ComboBox from "./ComboBox";
import DatePicker from "./DatePicker";
import TextBox from "./TextBox";

const MyProfile: React.FC = () => {
  return (
    <div className="bg-white text-black p-8 rounded-lg">
      {/* Head */}
      <h2 className="text-3xl font-bold mb-4">MY PROFILE</h2>

      {/* Profile Image */}
      <div className="flex mb-4">
        <div className="w-40 h-40 bg-gray-200 rounded-full mr-4">
          {/* Placeholder image */}
        </div>

        {/* Add Photo Button */}
        <button className="w-40 bg-pink-500 text-white font-bold rounded py-2">
          ADD PHOTO
        </button>
      </div>

      {/* General Info */}
      <div className="flex flex-wrap -mx-2">
        <div className="w-1/4 px-2">
          <div className="bg-gray-500 text-white p-2 rounded-t">
            General Info
          </div>
          <div className="p-2">
            <p className="mb-2">Gender:</p>
            <ComboBox
              options={[
                { value: "Man", label: "Man" },
                { value: "Woman", label: "Woman" },
                { value: "Non-Binary", label: "Non-Binary" },
              ]}
              defaultValue="Man"
            />
          </div>
          <div className="p-2">
            <p className="mb-2">Date of Birth:</p>
            <DatePicker defaultValue="2001-09-06" />
          </div>
          <div className="p-2">
            <p className="mb-2">City:</p>
            <TextBox defaultValue="Memphis" />
          </div>
          <div className="p-2">
            <p className="mb-2">State:</p>
            <TextBox defaultValue="Tennessee" readOnly />
          </div>
          <button className="bg-pink-500 text-white font-bold py-2 rounded mt-2 ml-auto">
            SAVE
          </button>
        </div>

        {/* I am looking for */}
        <div className="w-1/4 px-2">
          <div className="bg-gray-500 text-white p-2 rounded-t">
            I am looking for
          </div>
          <div className="p-2">
            <p className="mb-2">Gender:</p>
            <ComboBox
              options={[
                { value: "Woman", label: "Woman" },
                { value: "Man", label: "Man" },
                { value: "Non-Binary", label: "Non-Binary" },
              ]}
              defaultValue="Woman"
            />
          </div>
          <div className="p-2">
            <p className="mb-2">State:</p>
            <TextBox defaultValue="Tennessee" />
          </div>
          <div className="p-2">
            <p className="mb-2">Min. age:</p>
            <ComboBox
              options={[
                { value: "18", label: "18" },
                { value: "19", label: "19" },
                { value: "20", label: "20" },
                // ... Add more values as needed
              ]}
              defaultValue="21"
            />
          </div>
          <div className="p-2">
            <p className="mb-2">Max. age:</p>
            <ComboBox
              options={[
                { value: "30", label: "30" },
                { value: "31", label: "31" },
                { value: "32", label: "32" },
                // ... Add more values as needed, no less than 18
              ]}
              defaultValue="30"
            />
          </div>
          <button className="bg-pink-500 text-white font-bold py-2 rounded mt-2 ml-auto">
            SAVE
          </button>
        </div>

        {/* About me in a few words */}
        <div className="w-1/4 px-2">
          <div className="bg-gray-500 text-white p-2 rounded-t">About me</div>
          <div className="p-2">
            <input
              className="h-40 border-black"
              defaultValue="I am smart and sexy"
            />
          </div>
          <div className="bg-gray-500 text-white p-2 rounded-t">Profession</div>
          <div className="p-2">
            <input
              className="h-20 border-black"
              defaultValue="Plumber"
            />
          </div>
          <div className="bg-gray-500 text-white p-2 rounded-t">Interests</div>
          <div className="p-2">
            <input
              className="h-20 border-black"
              defaultValue="Basketball, Movies, kinks"
            />
          </div>
          <button className="bg-pink-500 text-white font-bold py-2 rounded mt-2 ml-auto">
            SAVE
          </button>
        </div>

        {/* Personal Information */}
        <div className="w-1/4 px-2">
          <div className="bg-gray-500 text-white p-2 rounded-t">
            Personal Information
          </div>
          <div className="p-2">
            <p className="mb-2">Height:</p>
            <ComboBox
              options={[
                { value: "5.0 feet", label: "5.0 feet" },
                { value: "5.1 feet", label: "5.1 feet" },
                { value: "5.2 feet", label: "5.2 feet" },
                // ... Add more values as needed
              ]}
              defaultValue="6.1 feet"
            />
          </div>
          <div className="p-2">
            <p className="mb-2">Body type:</p>
            <ComboBox
              options={[
                { value: "Slim", label: "Slim" },
                { value: "Average", label: "Average" },
                { value: "Athletic", label: "Athletic" },
                // ... Add more values as needed
              ]}
              defaultValue="Large"
            />
          </div>
          <div className="p-2">
            <p className="mb-2">Relationship Status:</p>
            <ComboBox
              options={[
                { value: "Single", label: "Single" },
                { value: "In a relationship", label: "In a relationship" },
                { value: "Married", label: "Married" },
                // ... Add more values as needed
              ]}
              defaultValue="Single"
            />
          </div>
          <div className="p-2">
            <p className="mb-2">Hair color:</p>
            <ComboBox
              options={[
                { value: "Black", label: "Black" },
                { value: "Blonde", label: "Blonde" },
                { value: "Brown", label: "Brown" },
                // ... Add more values as as needed
              ]}
              defaultValue="Black"
            />
          </div>
          <div className="p-2">
            <p className="mb-2">Eye color:</p>
            <ComboBox
              options={[
                { value: "Dark Brown", label: "Dark Brown" },
                { value: "Blue", label: "Blue" },
                { value: "Green", label: "Green" },
                // ... Add more values as needed
              ]}
              defaultValue="Dark Brown"
            />
          </div>
          <div className="p-2">
            <p className="mb-2">Tattoo:</p>
            <ComboBox
              options={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
              defaultValue="Yes"
            />
          </div>
          <div className="p-2">
            <p className="mb-2">Piercings:</p>
            <ComboBox
              options={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
              defaultValue="No"
            />
          </div>
          <button className="bg-pink-500 text-white font-bold py-2 rounded mt-2 ml-auto">
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
