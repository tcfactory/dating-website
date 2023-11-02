import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signInWithGoogle } from "./firebase";

const loggedInHeader: React.FC = () => {

  const storedName = localStorage.getItem("name");
  const storedProfilePic = localStorage.getItem("profilePic");

  console.log(storedProfilePic);

  return (
    <header className="header h-1 min-h-full flex gap-8 items-center bg-black text-white p-10 min-w-full justify-between">
      <Image src="logo.svg" width={120} height={60} alt="logo" />
      <div>
        <h1>Welcome, {storedName}!</h1>
        <Image src={storedProfilePic!} alt="Profile" width={96} height={96} />
      </div>
    </header>
  );
};

export default loggedInHeader;
