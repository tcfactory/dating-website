import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/loggedInHeader";
import Members from "../components/members";
import MyMailboxComponent from "../components/myMailbox";
import MyFlirtsComponent from "../components/myFlirts"; // Import the MyFlirtsComponent
import MyProfile from "../components/myProfile"; // Import the MyFlirtsComponent

const LandingPage: React.FC = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("members");

  const handleMenuItemClick = (item: string) => {
    setSelectedMenuItem(item);
  };

  return (
    <div className="bg-gray-500 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <div className="flex">
          <div className="w-4/5">
            <div className="bg-white p-8 rounded-lg">
              {/* Content */}
              {selectedMenuItem === "members" && <Members />}
              {selectedMenuItem === "myProfile" && <MyProfile/>}
              {selectedMenuItem === "myMailbox" && <MyMailboxComponent />}
              {selectedMenuItem === "myFlirts" && <MyFlirtsComponent />}{" "}
              {/* Include the MyFlirtsComponent */}
            </div>
          </div>
          <div className="w-1/5 ml-4">
            <div className="bg-gray-300 p-4 rounded-lg">
              {/* Right-side buttons */}
              <div className="grid grid-cols-3 gap-4">
                <button
                  className={`w-full h-20 text-white font-bold ${
                    selectedMenuItem === "myProfile"
                      ? "bg-pink-500"
                      : "bg-gray-500"
                  }`}
                  onClick={() => handleMenuItemClick("myProfile")}
                >
                  My Profile
                </button>
                <button
                  className={`w-full h-20 text-white font-bold ${
                    selectedMenuItem === "myMailbox"
                      ? "bg-pink-500"
                      : "bg-gray-500"
                  }`}
                  onClick={() => handleMenuItemClick("myMailbox")}
                >
                  My Mailbox
                </button>
                <button
                  className={`w-full h-20 text-white font-bold ${
                    selectedMenuItem === "myFlirts"
                      ? "bg-pink-500"
                      : "bg-gray-500"
                  }`}
                  onClick={() => handleMenuItemClick("myFlirts")}
                >
                  My Flirts
                </button>
              </div>
              {/* Menu */}
              <div className="mt-4">
                <button
                  className={`w-full h-20 text-white font-bold ${
                    selectedMenuItem === "members"
                      ? "bg-pink-500"
                      : "bg-gray-500"
                  }`}
                  onClick={() => handleMenuItemClick("members")}
                >
                  Members
                </button>
                <button
                  className={`w-full h-20 text-white font-bold ${
                    selectedMenuItem === "myWishlist"
                      ? "bg-pink-500"
                      : "bg-gray-500"
                  }`}
                  onClick={() => handleMenuItemClick("myWishlist")}
                >
                  My Wishlist
                </button>
                <button
                  className={`w-full h-20 text-white font-bold ${
                    selectedMenuItem === "credits"
                      ? "bg-pink-500"
                      : "bg-gray-500"
                  }`}
                  onClick={() => handleMenuItemClick("credits")}
                >
                  Credits
                </button>
                <button
                  className={`w-full h-20 text-white font-bold ${
                    selectedMenuItem === "settings"
                      ? "bg-pink-500"
                      : "bg-gray-500"
                  }`}
                  onClick={() => handleMenuItemClick("settings")}
                >
                  Settings
                </button>
                <button
                  className={`w-full h-20 text-white font-bold ${
                    selectedMenuItem === "logout"
                      ? "bg-pink-500"
                      : "bg-gray-500"
                  }`}
                  onClick={() => handleMenuItemClick("logout")}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
