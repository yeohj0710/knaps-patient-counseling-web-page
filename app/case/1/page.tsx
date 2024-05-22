"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Case1() {
  const [flag1, setFlag1] = useState(true);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);
  const [flag5, setFlag5] = useState(false);
  const [flag6, setFlag6] = useState(false);
  const [flag7, setFlag7] = useState(false);
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
  const onClick2 = () => {
    setFlag4(false);
    setFlag5(true);
  };
  const onClick3 = () => {
    setFlag5(false);
    setFlag6(true);
  };
  const onClick4 = () => {
    setFlag6(false);
    setFlag7(true);
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
            Me (pharmacist): Hi, how are you?
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
        <>
          <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90">
            <span className="text-xl text-gray-500">
              Me (pharmacist): How can I help you?
            </span>
          </div>
          <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90">
            <span className="text-xl text-gray-500">
              Patient: I came because of constipation.
            </span>
          </div>
          <button
            onClick={onClick2}
            className="flex items-center justify-center bg-[#D8E4D8] w-[50%] h-24 shadow-lg rounded-lg"
          >
            <span className="text-gray-600 text-lg">
              Ask who is taking the medicine.
            </span>
          </button>
        </>
      ) : null}
      {flag5 ? (
        <div className="flex flex-col items-center justify-center rounded-md w-full gap-8">
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
              Me (pharmacist): Okay, who will be taking the medicine?
            </span>
          </div>
          <button
            onClick={onClick3}
            className="flex items-center justify-center bg-[#D8E4D8] w-[50%] h-14 shadow-lg rounded-lg"
          >
            <span className="text-gray-600 text-lg">
              My son and he's 7 years old. (Note: None)
            </span>
          </button>
          <button
            onClick={() => {}}
            className="flex items-center justify-center bg-[#D8E4D8] w-[50%] h-14 shadow-lg rounded-lg"
          >
            <span className="text-gray-600 text-lg">
              My mother and she's 76 years old. (Note: Has hypertension and
              diabetes)
            </span>
          </button>
          <button
            onClick={() => {}}
            className="flex items-center justify-center bg-[#D8E4D8] w-[50%] h-14 shadow-lg rounded-lg"
          >
            <span className="text-gray-600 text-lg">
              Me and I'm 40 years old. (Note: None)
            </span>
          </button>
          <button
            onClick={onClick2}
            className="flex items-center justify-center bg-[#D8E4D8] w-[50%] h-14 shadow-lg rounded-lg"
          >
            <span className="text-gray-600 text-lg">
              My younger sister and she's 34 years old. (Note: Pregnant)
            </span>
          </button>
        </div>
      ) : null}
      {flag6 ? (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
              Choose the best treatment options.
            </span>
          </div>
          <div className="flex flex-row items-center w-full gap-5 justify-between mt-14">
            <button onClick={onClick4} className="flex flex-col items-center">
              <div className="bg-white px-8 py-4 rounded-lg">
                <Image
                  src="/product-A.png"
                  alt="product-A"
                  width={150}
                  height={100}
                />
              </div>
              <div className="mt-8 flex flex-col text-gray-600 bg-white px-6 py-4 rounded-lg shadow-lg opacity-90">
                <span className="font-semibold text-lg mb-2">Product A</span>
                <span className="mb-1">
                  <span className="font-bold">&middot; </span>
                  Ingredient: Lactulose Concentrate 1.34g/ml
                </span>
                <span>
                  <span className="font-bold">&middot; </span>
                  Formulation: Syrup(15mL per stick)
                </span>
              </div>
            </button>
            <button className="flex flex-col items-center">
              <div className="bg-white px-8 py-4 rounded-lg">
                <Image
                  src="/product-B.png"
                  alt="product-B"
                  width={150}
                  height={100}
                />
              </div>
              <div className="mt-8 flex flex-col text-gray-600 bg-white px-6 py-4 rounded-lg shadow-lg opacity-90">
                <span className="font-semibold text-lg mb-2">Product B</span>
                <span className="mb-1">
                  <span className="font-bold">&middot; </span>
                  Ingredient: Bisacodyl 5mg, Docusate Sodium 16.75mg
                </span>
                <span>
                  <span className="font-bold">&middot; </span>
                  Formulation: Enteric-coated tablets
                </span>
              </div>
            </button>
            <button className="flex flex-col items-center">
              <div className="bg-white px-8 py-7 rounded-lg">
                <Image
                  src="/product-C.png"
                  alt="product-C"
                  width={150}
                  height={100}
                />
              </div>
              <div className="mt-8 flex flex-col text-gray-600 bg-white px-6 py-4 rounded-lg shadow-lg opacity-90">
                <span className="font-semibold text-lg mb-2">Product C</span>
                <span className="mb-1">
                  <span className="font-bold">&middot; </span>
                  Ingredient: Psyllium Husk 3.25g/stick
                </span>
                <span>
                  <span className="font-bold">&middot; </span>
                  Formulation: Powder
                </span>
              </div>
            </button>
          </div>
        </div>
      ) : null}
      {flag7 ? <div></div> : null}
    </div>
  );
}
