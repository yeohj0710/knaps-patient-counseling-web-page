"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Case3() {
  const [opacity, setOpacity] = useState("opacity-100");
  const [isVisit, setIsVisit] = useState(false);
  const [title, setTitle] = useState("Patient Visit");
  const [flag0, setFlag0] = useState(false);
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3_1, setFlag3_1] = useState(false);
  const [flag3_2, setFlag3_2] = useState(false);
  const [flag4, setFlag4] = useState(false);
  const [flag5, setFlag5] = useState(false);
  useEffect(() => {
    setOpacity("opacity-20");
    const timer = setTimeout(() => {
      setIsVisit(true);
      setFlag0(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  const onClick1 = () => {
    setFlag0(false);
    setFlag1(true);
  };
  const onClick2 = () => {
    setFlag1(false);
    setFlag2(true);
  };
  const onClick3_1 = () => {
    setFlag5(false);
    setFlag3_1(true);
  };
  const onClick3_2 = () => {
    setFlag2(false);
    setFlag3_2(true);
  };
  const onClick4_1 = () => {
    setFlag3_1(false);
    setFlag5(true);
  };
  const onClick4_2 = () => {
    setFlag3_1(false);
    setFlag4(true);
    setTitle("Patient Consult");
  };
  const onClick4_3 = () => {
    setFlag3_2(false);
    setFlag5(true);
  };
  const onClick5 = () => {
    setFlag2(false);
    setFlag5(true);
    setTitle("Treatment Options");
  };
  return (
    <div className="flex flex-col items-center min-h-screen p-6 gap-20 relative">
      <Image
        src="/case-bg.png"
        alt="case-background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className={`-z-10 transition duration-[3000ms] ease-in-out ${opacity}`}
      />
      <Link href="/case-select" className="fixed left-10 top-10">
        <div className="bg-[#5BC17F] px-5 py-2 rounded-full">
          <span className="text-white">Go Back to Select Case</span>
        </div>
      </Link>
      {!isVisit ? (
        <div className="flex justify-start mt-[8vh] bg-white px-5 py-2 rounded-[20px]">
          <span className="text-5xl font-semibold text-[#18063c]">
            Patient Walks In ...
          </span>
        </div>
      ) : (
        <div className="flex justify-start mt-[8vh]">
          <span className="text-5xl font-semibold text-[#18063c]">{title}</span>
        </div>
      )}
      {flag0 ? (
        <div className="mt-48">
          <button
            onClick={onClick1}
            className="bg-[#5BC17F] px-5 py-2 rounded-full"
          >
            <span className="text-lg text-white">
              Hello, how can I help you?
            </span>
          </button>
        </div>
      ) : null}
      {flag1 ? (
        <div className="flex flex-col items-center">
          <div>
            <span className="text-lg">I came because of constipation.</span>
          </div>
          <div className="mt-48">
            <button
              onClick={onClick2}
              className="bg-[#5BC17F] px-5 py-2 rounded-full"
            >
              <span className="text-lg text-white">
                Okay, who will be taking the medicine?
              </span>
            </button>
          </div>
        </div>
      ) : null}
      {flag2 ? (
        <div className="flex flex-col items-center mb-20">
          <div className="flex flex-col items-center gap-2">
            <span className="text-lg">Me and I'm 40 years old.</span>
            <span className="text-lg">(Note: None)</span>
          </div>
          <div className="mt-48">
            <button
              onClick={onClick5}
              className="bg-[#5BC17F] px-5 py-2 rounded-full"
            >
              <span className="text-lg text-white">
                Is abdominal pain accompanied by constipation?
              </span>
            </button>
          </div>
        </div>
      ) : null}
      {flag5 ? (
        <div className="flex flex-col items-center mb-20">
          <div className="flex flex-col items-center gap-2">
            <span className="text-lg">
              No abdominal pain, and I want a fast-acting medicine.
            </span>
          </div>
          <Image
            src="/otc-information.png"
            alt="OTC information"
            width={640}
            height={200}
            className="mt-12"
          />
          <div className="flex flex-col gap-5 mt-12">
            <button
              onClick={onClick3_2}
              className="bg-[#5BC17F] px-5 py-2 rounded-full"
            >
              <span className="text-lg text-white">Recommends Product A</span>
            </button>
            <button
              onClick={onClick3_1}
              className="bg-[#5BC17F] px-5 py-2 rounded-full"
            >
              <span className="text-lg text-white">Recommends Product B</span>
            </button>
            <button
              onClick={onClick3_2}
              className="bg-[#5BC17F] px-5 py-2 rounded-full"
            >
              <span className="text-lg text-white">Recommends Product C</span>
            </button>
          </div>
        </div>
      ) : null}
      {flag3_1 ? (
        <div className="flex flex-col items-center">
          <div className="fixed top-0 left-0 min-h-screen min-w-full bg-[#00a500]" />
          <button
            onClick={onClick4_1}
            className="fixed top-12 left-16 px-5 py-2 rounded-full bg-[#5bc17f]"
          >
            <span className="text-lg text-white">Go Back</span>
          </button>
          <button
            onClick={onClick4_2}
            className="fixed bottom-24 px-5 py-2 rounded-full bg-[#BBBBBB]"
          >
            <span className="text-lg text-white font-semibold">
              Go to Patient consult
            </span>
          </button>
          <Image
            src="/correct.png"
            alt="correct"
            width={250}
            height={100}
            className="fixed right-10 bottom-5"
          />
        </div>
      ) : null}
      {flag3_2 ? (
        <div className="flex flex-col items-center">
          <div className="fixed top-0 left-0 min-h-screen min-w-full bg-[#fe5c59]" />
          <button
            onClick={onClick4_3}
            className="fixed bottom-24 w-64 px-5 py-2 rounded-full bg-[#BBBBBB]"
          >
            <span className="text-lg text-white font-semibold">Try again</span>
          </button>
          <Image
            src="/wrong.png"
            alt="wrong"
            width={250}
            height={100}
            className="fixed right-10 bottom-5"
          />
        </div>
      ) : null}
      {flag4 ? (
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-col w-1/2 gap-3">
            <span>- Take 2 tablets once a day, before bedtime.</span>
            <span>
              - This medication is the fastest-acting laxative compared to
              others.
            </span>
            <span>
              - You should take the pill by swallowing it whole without breaking
              or chewing it.
            </span>
            <span>
              - If you consume dairy products or antacids together, the coating
              of the enteric-coated tablet may be stripped off, so you should
              take them at least one hour apart.
            </span>
            <span>
              - Long-term reliance on the medication can lead to dependence and
              changes in bowel habits, so it is not recommended for prolonged
              use.
            </span>
            <span>
              - Drink enough water every day and eat fiber-rich foods such as
              prune and kelp.
            </span>
          </div>
          <div className="flex flex-col items-center mt-20">
            <Link
              href="/case-select"
              className="flex justify-center items-center px-5 py-2 w-64 mb-24 rounded-full bg-[#BBBBBB]"
            >
              <div>
                <span className="text-lg text-white font-semibold">
                  Go to Select Case
                </span>
              </div>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
