"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { signIn } from "next-auth/react";
import axios from "axios";

const LoginPage = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { email, password } = data;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res =await axios.post("/api/login",data)

      console.log("Login Successful",res.data)
      router.push("/dashboard")
      setLoading(true)
      
    } catch (error) {
      console.log("Login Failed",error.message)
      setErrorMessage("Login Failed")
      
    }finally{
      setLoading(false)
    }

//     try {
//       // const res = await signIn("credentials", {
//       //   email,
//       //   password,
//       //   // redirect: false,
//       // });
// // console.log(res,"fvnfmnfmvn fm ")
//       // if (res.error) {
//       //   setLoading(false)
//       //   setErrorMessage("Invalid Credentials");
//       //   return;
//       // }

//       router.push("/dashboard");
//     } catch (error) {
//       console.log(error);
//     }
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="w-full md:w-96 bg-gradient-to-r from-blue-600 to-blue-400 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-center text-white">
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100"
            required
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none "
            required
          />
          {errorMessage && (
            <div className="bg-red-400 text-white w-fit py-1 px-3 rounded-md mt-2">
              {errorMessage}
            </div>
          )}
          <button
            type="submit"
            className="bg-gradient-to-r from-primary to-secondary hover:from-secondary focus:outline-none  hover:to-primary text-white w-full py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>
        <div className="mt-4 text-center text-gray-300 flex items-end justify-end">
          Don't have an account?{" "}
          <Link
            href="/registration"
            className="text-blue-900 underline text-sm"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
