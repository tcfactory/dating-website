import React, { useState, useEffect } from "react";

const MyMailbox: React.FC = () => {
  const [showChat, setShowChat] = useState(false);
  const [selectedChat, setSelectedChat] = useState("");

  const chatPreviews = [
    {
      username: "InsideMyWorld",
      message: "yes me too!",
      profilePic: "profile1.jpg",
    },
    {
      username: "deepbrittt",
      message: "Sounds good!",
      profilePic: "profile2.jpg",
    },
    {
      username: "QuenchMyThirstO",
      message: "Let's do it!",
      profilePic: "profile3.jpg",
    },
    // Add more chat previews as needed
  ];

  const handleViewClick = (username: string) => {
    setShowChat(true);
    setSelectedChat(username);
  };

  const handleBackButtonClick = () => {
    setShowChat(false);
    setSelectedChat("");
  };

  useEffect(() => {
    const handlePopState = () => {
      setShowChat(false);
      setSelectedChat("");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="bg-black text-white p-8 rounded-lg">
      {/* Head */}
      <h2 className="text-3xl font-bold mb-4">
        {showChat ? "Chats" : "MESSAGES"}
      </h2>

      {showChat ? (
        <div>
          <p className="text-lg font-bold mb-2">
            Chatting with: {selectedChat}
          </p>
          
          <div className="flex mt-4">
            <input
              type="text"
              className="bg-white text-black px-4 py-2 rounded-l w-full h-16"
              placeholder="Type your message..."
            />
            <button className="bg-pink-500 text-white font-bold px-4 py-2 rounded-r">
              Send
            </button>
            <div className="bg-pink-500 text-white font-bold px-4 py-2 rounded-r ml-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M20 2c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H7c-.6 0-1.2-.2-1.7-.6L2 19V4c0-1.1.9-2 2-2h16zM6 18h4v2H6v-2zm6 0h4v2h-4v-2z" />
              </svg>
            </div>
          </div>
          <button
            className="bg-pink-500 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleBackButtonClick}
          >
            Back
          </button>
        </div>
      ) : (
        <div>
          {/* Chat Previews */}
          <div className="space-y-4">
            {chatPreviews.map((chat, index) => (
              <div
                key={index}
                className="bg-gray-500 p-4 rounded-lg cursor-pointer flex items-center justify-between"
                onClick={() => handleViewClick(chat.username)}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                    <img
                      src={chat.profilePic}
                      alt={chat.username}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-bold">{chat.username}</p>
                    <p>{chat.message}</p>
                  </div>
                </div>
                <button className="bg-pink-500 text-white font-bold px-4 py-2 rounded">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyMailbox;
