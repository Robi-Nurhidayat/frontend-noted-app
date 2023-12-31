"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import ImageLogin from "public/image-login.jpg";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/login",
        {
          email: values.email,
          password: values.password,
        }
      );

      Cookies.set("token", response.data.access_token);
      toast.success("success login");
    } catch (error: any) {
      toast.error("email or passwor must be matches");
    }
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      router.push("/dashboard");
    }
  });
  return (
    <div className="w-screen h-screen bg-blue-400 flex">
      <div className=" flex-[0_0_564px]  h-full">
        <Image
          src={ImageLogin}
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-[36px] font-[500] text-white mb-[40px]">
          Sign In to Your Account
        </h1>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col mb-[18px]">
            <label
              htmlFor="email"
              className="text-[20px] font-[500] text-white"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              className="text-[16px] text-[#BFBFBF] py-4 pl-[30px] pr-[51px] rounded-full w-[400px] outline-none"
              placeholder="Masukkan alamat email Anda "
              value={values.email}
              onChange={(e: any) =>
                setValues({
                  ...values,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col mb-[40px]">
            <label
              htmlFor="password"
              className="text-[20px] font-[500] text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="text-[16px] text-[#BFBFBF] py-4 pl-[30px] pr-[51px] rounded-full w-[400px] outline-none"
              placeholder="Masukkan password  Anda "
              value={values.password}
              onChange={(e: any) =>
                setValues({
                  ...values,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div>
            <button
              type="submit"
              className="text-[20px] font-[600] text-white rounded-full w-full bg-[#FF872E] p-[12px_149px_13px_150px]"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-5 text-base text-white">
          Don’t have account?
          <Link href={"/register"} className="text-[#FF872E] ml-1">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
