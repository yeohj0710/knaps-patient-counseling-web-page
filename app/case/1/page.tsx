"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Case1() {
  const [flag1, setFlag1] = useState(true);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFlag1(false);
      setFlag2(true);
    }, 3000);
    const timer2 = setTimeout(() => {
      setFlag3(true);
    }, 5000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
  const onClick1 = () => {
    setFlag2(false);
    setFlag3(false);
    setFlag4(true);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 gap-20 relative">
      <Image
        src="/home-background.png"
        alt="home-background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="-z-10"
      />
      <Link href="/case-select" className="fixed left-10 top-10">
        <div className="bg-[#5BC17F] px-5 py-2 rounded-full">
          <span className="text-white">Go Back to Select Case</span>
        </div>
      </Link>
      <div className="fixed left-3 bottom-56">
        <Image
          src="/pce-logo.png"
          alt="pce-logo"
          width={295}
          height={100}
          className="fixed left-0"
        />
      </div>
      {flag1 ? (
        <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 fixed bottom-[15%]">
          <span className="text-xl text-gray-500">(Patient walks in ...)</span>
        </div>
      ) : null}
      {flag2 ? (
        <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 fixed bottom-[15%]">
          <span className="text-xl text-gray-500">
            Me (pharmacist) : Hi, how are you?
          </span>
        </div>
      ) : null}
      {flag3 ? (
        <button
          onClick={onClick1}
          className="flex items-center justify-center bg-[#D8E4D8] w-[50%] h-24 shadow-lg rounded-lg"
        >
          <span className="text-gray-600 text-lg">
            Ask why the patient visited the pharmacy.
          </span>
        </button>
      ) : null}
      {flag4 ? (
        <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 fixed bottom-[15%]">
          <span className="text-xl text-gray-500">
            Me (pharmacist) : How can I help you?
          </span>
        </div>
      ) : null}
    </div>
  );
}
