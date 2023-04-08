import React, { useState, useCallback } from "react";
import Image from "next/image";

const SignUpForm: React.FC = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  return (
    <div className="bg-black text-white flex flex-col justify-center pt-10">
      <div className="flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6">
        <div className="pb-5">
          <Image src="logo.svg" width={200} height={100} alt="logo"></Image>
        </div>
        <h2 className="text-4xl font-bold">Sign Up</h2>
        <form className="flex flex-col gap-4 mt-16 px-10 min-w-full lg:min-w-[500px]">
          <input
            name="username"
            id="username"
            required
            maxLength={128}
            type="text"
            placeholder="Username"
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
          />
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={128}
            placeholder="Your E-mail"
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
          />
          <input
            name="password"
            id="password"
            type="password"
            required
            maxLength={50}
            placeholder="Password"
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
            value={input.password}
            onChange={onInputChange}
            onBlur={validateInput}
          ></input>
          {error.password && <span className="err">{error.password}</span>}
          <input
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            required
            maxLength={50}
            placeholder="Repeat Password"
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
            value={input.confirmPassword}
            onChange={onInputChange}
            onBlur={validateInput}
          ></input>
          {error.confirmPassword && (
            <span className="err">{error.confirmPassword}</span>
          )}
          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-white text-black rounded-3xl px-8 py-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
