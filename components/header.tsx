import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { signInWithGoogle } from "./firebase";


const Header: React.FC = () => (
  <header className="header h-1 min-h-full flex gap-8 items-center bg-black text-white p-10 min-w-full justify-between">
    <Image src="logo.svg" width={120} height={60} alt="logo" />
    <div id="login-container" className="text-right">
      <div id="login-form">
        <input
          id="header-email"
          name="email"
          type="email"
          required
          maxLength={128}
          placeholder="E-mail/Username"
          className="header-input bg-black text-white outline-none border-2 border-white rounded-3xl px-4 py-1 mx-1 my-1"
        />
        <input
          id="header-password"
          name="email"
          type="password"
          required
          maxLength={128}
          placeholder="Password"
          className="header-input bg-black text-white outline-none border-2 border-white rounded-3xl px-4 py-1 mx-1"
        />
        <Link href="/landing">
          <button className="login-button bg-fuchsia-400 hover:bg-fuchsia-700 text-white rounded-full py-1 px-2 ">
            Login
          </button>
        </Link>
      </div>
      <div className="text-right">Forgot your password?</div>
    </div>
    <div className="login-buttons">
      <button className="login-button bg-fuchsia-400 hover:bg-fuchsia-700 text-white rounded py-1 px-2 my-2 mx-2">
        Subscribe
      </button>
      <button className="login-button bg-fuchsia-400 hover:bg-fuchsia-700 text-white rounded py-1 px-2 my-2 mx-2">
        Login
      </button>
    </div>
    <div>
      <button
        className="google-btn keychainify-checked"
        onClick={signInWithGoogle}
      >
        <div className="google-icon-wrapper">
          <Image
            className="google-icon"
            src="/google-logo.png"
            width={40}
            height={40}
            alt="google-logo"
          />
        </div>
      </button>
    </div>
  </header>
);

export default Header;
