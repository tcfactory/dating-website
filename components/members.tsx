import React, { useState } from "react";
import Image from "next/image";
import GenderComboBox from "./GenderComboBox";
import AgeComboBox from "./AgeComboBox";
import LocationComboBox from "./LocationComboBox";

// Function to generate a random number within a range
const getRandomAge = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Placeholder data for the images
const placeholderImages = [
  "people/WhatsApp Image 2022-06-29 at 1.49.54 PM.jpeg",   
  "people/WhatsApp Image 2022-06-29 at 1.26.42 PM (5).jpeg",
  "people/WhatsApp Image 2022-06-29 at 2.18.02 AM.jpeg",
  "people/WhatsApp Image 2022-06-29 at 1.50.34 PM.jpeg",
  "people/WhatsApp Image 2022-06-29 at 11.31.24 AM.jpeg",
  "people/WhatsApp Image 2022-06-29 at 11.37.41 AM.jpeg",
  "people/WhatsApp Image 2022-06-29 at 12.38.24 PM.jpeg",
  "people/WhatsApp Image 2022-06-29 at 12.53.38 PM.jpeg",
  "people/WhatsApp Image 2022-06-29 at 11.32.21 AM.jpeg",
  "people/WhatsApp Image 2022-06-29 at 2.17.02 AM.jpeg",
];

const generateRandomUsername = () => {
  const usernames = [
    "InsideMyWorld",
    "deepbrittt",
    "QuenchMyThirstO",
    "EpicAdventurer",
    "CreativeGuru",
    "WonderWanderer",
    "HappySoul",
    "CosmicVoyager",
    "SunnySmiles",
    "VibrantVibe",
  ];
  return usernames[Math.floor(Math.random() * usernames.length)];
};

const Members: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState("Woman");
  const [selectedMinAge, setSelectedMinAge] = useState(18);
  const [selectedMaxAge, setSelectedMaxAge] = useState(30);
  const [selectedLocation, setSelectedLocation] = useState("Tennessee");

  return (
    <div className="text-darkgray">
      <h2 className="text-2xl font-bold mb-4">MEMBERS</h2>
      <div className="inline-flex items-center">
        Find me a{" "}
        <GenderComboBox
          selectedGender={selectedGender}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setSelectedGender(e.target.value)
          }
        />{" "}
        <AgeComboBox
          selectedMinAge={selectedMinAge}
          selectedMaxAge={selectedMaxAge}
          onMinAgeChange={(e: { target: { value: any } }) =>
            setSelectedMinAge(Number(e.target.value))
          }
          onMaxAgeChange={(e: { target: { value: any } }) =>
            setSelectedMaxAge(Number(e.target.value))
          }
        />{" "}
        in{" "}
        <LocationComboBox
          selectedLocation={selectedLocation}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setSelectedLocation(e.target.value)
          }
        />
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md ml-4">
          FIND NOW
        </button>
      </div>
      <p className="mt-4">9 results based on your search options</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {placeholderImages.map((image, index) => (
          <div key={index} className="bg-gray-200 rounded-md p-2">
            <Image
              src={image}
              width={200}
              height={200}
              alt={`Placeholder ${index + 1}`}
            />
            <div className="mt-2">
              <p className="text-pink-500 font-semibold">
                {generateRandomUsername()}
              </p>
              <p>{getRandomAge(selectedMinAge, selectedMaxAge)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
