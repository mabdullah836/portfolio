"use client";
import React, { useState } from "react";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function testing(e: any) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <>
      <h1 id="contact" className="font-semibold p-3 rounded-md text-center text-3xl bg-pink-500 w-52 m-auto mt-10 mb-10">
        Contact
      </h1>
      <BackgroundBeamsWithCollision className="h-[1000px]">
        <div className="p-10  h-full  flex items-center flex-col lg:flex-row gap-5">
          <form
            onSubmit={testing}
            className="flex flex-col gap-5 mt-5 p-3 w-full lg:w-[650px] h-[35rem]"
          >
            <p className="text-lg text-center mb-5">
              In case of any questions or concerns, please do not hesitate to
              contact me.
              <br /> I am open for any kind of work which fits my abilities and
              interests.
            </p>
            <label className="text-lg" htmlFor="name">
              Name
            </label>
            <input
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              type="text"
              className="h-16 rounded-md p-3 bg-black text-white"
              id="name"
            />
            <label className="text-lg " htmlFor="email">
              Email
            </label>
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="h-16 p-3 rounded-md  bg-black text-white"
              type="email"
              id="email"
            />
            <label className="text-lg" htmlFor="message">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="h-40 p-3 rounded-md bg-black text-white"
              id="message"
              maxLength={100}
            ></textarea>
            <button
              className="bg-pink-500 h-16 p-3 rounded-md mt-5 text-white font-semibold"
              type="submit"
            >
              Send Message
            </button>
          </form>
          <div className="w-[500px] h-[30rem] flex flex-col gap-5  justify-center lg:items-center">
            <div className="flex flex-col gap-10  justify-center mt-10">
              <div className="flex items-center gap-3 mt-5">
                <span className="w-10 rounded-full p-2 bg-emerald-400">
                  <img src="/mail.svg" className="w-full" />
                </span>
                <p className="text-xl font-semibold">mabdullah8362@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-10 rounded-full p-2 bg-emerald-400">
                  <img src="/phone.svg" className="w-full" />
                </span>
                <p className="text-xl font-semibold">03145908077</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-10 rounded-full p-2 bg-emerald-400">
                  <img src="/location.svg" className="w-full" />
                </span>
                <p className="text-xl font-semibold">
                  Landhi Karachi, Pakistan
                </p>
              </div>
            </div>
            <div className="flex flex-row lg:flex-row gap-14 mt-5 mb-5 lg:mt-14  ">
              <Link href="https://github.com/mabdullah836" className="w-14 rounded-full p-2 bg-slate-400">
                <img src="/github.svg" className="w-full" />
              </Link>
              <Link href="https://www.linkedin.com/in/muhammad-abdullah-8512012b4/" className="w-14 rounded-full p-3 bg-slate-400">
                <img src="/linkedin.svg" className="w-full" />
              </Link>
             
              <Link href="https://www.facebook.com/profile.php?id=100059733292061" className="w-14 rounded-full p-2 bg-slate-400">
                <img src="/facebook.svg" className="w-full" />
              </Link>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
}

export default Contact;
