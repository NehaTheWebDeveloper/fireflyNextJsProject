"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const RegistrationPage = () => {
  const router = useRouter();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { username, email, password } = data;

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!data.username || !data.email || !data.password) {
      setErrorMessage("All Fields are compulsory");
    }
    try {
      // const resUserExists = await fetch("api/userExists", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ email }),
      // });

      // const { user } = await resUserExists.json();

      // if (user) {
      //   setErrorMessage("User already exists.");
      //   return;
      // }

      const res = await axios.post("api/register", data);
      if (res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("User Registration Fails");
      }
      setLoading(true);

      router.push("/");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="w-full md:w-96 bg-gradient-to-r from-blue-600 to-blue-400 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-center text-white">
          Register an Account
        </h2>
        <p className="text-red-500 text-center ">{errorMessage}</p>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                username: e.target.value,
              }))
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none "
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none"
          />
          {errorMessage && (
            <div className="bg-red-400 text-white w-fit py-1 px-3 rounded-md mt-2">
              {errorMessage}
            </div>
          )}
          <button
            type="submit"
            className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white w-full py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <div className="mt-4 text-center text-gray-300">
          Already have an account?{" "}
          <Link href="/" className="text-blue-900 font-medium underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
