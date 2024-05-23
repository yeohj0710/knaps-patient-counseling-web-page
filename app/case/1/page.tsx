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
  const [flag8, setFlag8] = useState(false);
  const [flag9, setFlag9] = useState(false);
  const [flag10, setFlag10] = useState(false);
  const [flag11, setFlag11] = useState(false);
  const [flag12, setFlag12] = useState(false);
  const [flag13, setFlag13] = useState(false);
  const [flag14, setFlag14] = useState(false);
  const [flag15, setFlag15] = useState(false);
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
  const onClick5 = () => {
    setFlag6(false);
    setFlag8(true);
  };
  const onClick6 = () => {
    setFlag6(false);
    setFlag9(true);
  };
  const onClick7 = () => {
    setFlag8(false);
    setFlag6(true);
  };
  const onClick8 = () => {
    setFlag9(false);
    setFlag6(true);
  };
  const onClick9 = () => {
    setFlag7(false);
    setFlag10(true);
  };
  const onClick10 = () => {
    setFlag12(false);
    setFlag10(true);
  };
  const onClick11 = () => {
    setFlag11(false);
    setFlag13(true);

    setTimeout(() => {
      setFlag13(false);
      setFlag14(true);

      setTimeout(() => {
        setFlag14(false);
        setFlag15(true);
      }, 6000);
    }, 3000);
  };
  const items1 = [0, 1, 2, 3, 4, 5];
  const [selectedItems1, setselectedItems1] = useState<number[]>([]);
  const handleCheckbox1 = (idx: number) => {
    setselectedItems1((prev) => {
      if (prev.includes(idx)) {
        return prev.filter((i) => i !== idx);
      } else {
        return [...prev, idx];
      }
    });
  };
  const handleSubmit1 = (event: React.FormEvent) => {
    event.preventDefault();
    const answer = [1, 4, 5];
    if (
      selectedItems1.length === answer.length &&
      selectedItems1.every((idx) => answer.includes(idx))
    ) {
      setFlag10(false);
      setFlag11(true);
    } else {
      setFlag10(false);
      setFlag12(true);
    }
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
          <span className="text-xl text-gray-500">(Patient walks in...)</span>
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
          <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 -mt-14">
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
            <button onClick={onClick5} className="flex flex-col items-center">
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
            <button onClick={onClick6} className="flex flex-col items-center">
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
      {flag7 ? (
        <>
          <div className="fixed w-full h-screen bg-[#00A700] opacity-20 -z-10" />
          <div className="flex flex-col items-center justify-center w-[60%] h-48 bg-white opacity-90 rounded-lg mt-24">
            <span>You are correct!</span>
            <span>
              Children should use Lactulose, which is non-irritating and
              non-swelling.
            </span>
            <span>The syrup formulation is also suitable for children.</span>
            <Image
              src="/correct.png"
              alt="correct"
              width={200}
              height={100}
              className="absolute left-[15%]"
            />
          </div>
          <button
            onClick={onClick9}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg mt-12"
          >
            <span className="text-lg text-white">Go to Patient Consult</span>
          </button>
        </>
      ) : null}
      {flag8 ? (
        <>
          <div className="fixed w-full h-screen bg-[#FF0017] opacity-20 -z-10" />
          <div className="flex flex-col items-center justify-center w-[60%] h-48 bg-white opacity-90 rounded-lg mt-24">
            <span>
              Bisacodyl is a Stimulant laxative which is unsuitable for child.
            </span>
            <span>
              I'm not sure a 7 years old child can swallow enteric-coated
              tablets too.
            </span>
            <span>Please try again!</span>
            <Image
              src="/wrong.png"
              alt="wrong"
              width={200}
              height={100}
              className="absolute left-[15%]"
            />
          </div>
          <button
            onClick={onClick7}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg mt-12"
          >
            <span className="text-lg text-white">Try again</span>
          </button>
        </>
      ) : null}
      {flag9 ? (
        <>
          <div className="fixed w-full h-screen bg-[#FF0017] opacity-20 -z-10" />
          <div className="flex flex-col items-center justify-center w-[60%] h-48 bg-white opacity-90 rounded-lg mt-24">
            <span>
              Psyllium Husk is a Bulk-forming laxative which is unsuitable for
              child.
            </span>
            <span>Please try again!</span>
            <Image
              src="/wrong.png"
              alt="wrong"
              width={200}
              height={100}
              className="absolute left-[15%]"
            />
          </div>
          <button
            onClick={onClick8}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg mt-12"
          >
            <span className="text-lg text-white">Try again</span>
          </button>
        </>
      ) : null}
      {flag10 ? (
        <>
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90">
            <span className="text-xl text-gray-500">
              Choose all the options which are correct.
            </span>
          </div>
          <form
            onSubmit={handleSubmit1}
            className="flex flex-col items-center justify-center gap-8 w-full"
          >
            <div className="flex flex-col gap-4 justify-center bg-[#D8E4D8] w-[60%] h-[50vh] px-8 opacity-90 shadow-lg rounded-lg -mt-14">
              {items1.map((item, idx) => (
                <div key={idx} className="flex flex-row items-center gap-3">
                  {idx === 0 ? (
                    <span className="text-gray-600 text-lg">
                      1) Administer after breakfast.
                    </span>
                  ) : null}
                  {idx === 1 ? (
                    <span className="text-gray-600 text-lg">
                      2) Administer 15 mL per day for the first 2 to 3 days, and
                      then continue to administer 10 mL per day.
                    </span>
                  ) : null}
                  {idx === 2 ? (
                    <span className="text-gray-600 text-lg">
                      3) You will directly have a normal bowel movement.
                    </span>
                  ) : null}
                  {idx === 3 ? (
                    <span className="text-gray-600 text-lg">
                      4) It is recommended for prolonged use.
                    </span>
                  ) : null}
                  {idx === 4 ? (
                    <span className="text-gray-600 text-lg">
                      5) Drink enough water every day and eat fiber-rich foods
                      such as prune and kelp.
                    </span>
                  ) : null}
                  {idx === 5 ? (
                    <span className="text-gray-600 text-lg break-all">
                      6) Feel bloated and abdominal pain may appear in the
                      stomach at the beginning of administration.
                    </span>
                  ) : null}
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedItems1.includes(idx)}
                      onChange={() => handleCheckbox1(idx)}
                    />
                  </label>
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="bg-[#5BC17F] px-7 py-2 rounded-full"
            >
              <span className="text-white">Done</span>
            </button>
          </form>
        </>
      ) : null}
      {flag11 ? (
        <>
          <div className="fixed w-full h-screen bg-[#00A700] opacity-20 -z-10" />
          <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90">
            <span className="text-xl text-gray-500">
              Me (pharmacist): You are all correct! Right patient consult was …
            </span>
          </div>
          <div className="flex flex-col justify-center w-[60%] h-[40vh] bg-white opacity-90 rounded-lg -mt-14 pl-14 gap-2">
            <span>- Administer before breakfast.</span>
            <span>
              - Administer 15 mL per day for the first 2 to 3 days, and then
              continue to administer 10 mL per day.
            </span>
            <span>- It may take 1-2 days to have a normal bowel movement.</span>
            <span>
              - Long-term reliance on the medication can lead to dependence and
              changes in bowel habits, so it is not recommended for prolonged
              use.
            </span>
            <span>
              - Drink enough water every day and eat fiber-rich foods such as
              prune and kelp.
            </span>
            <span>
              - Feel bloated and abdominal pain may appear in the stomach at the
              beginning of administration.
            </span>
            <Image
              src="/correct.png"
              alt="correct"
              width={200}
              height={100}
              className="absolute top-[10%] left-[15%]"
            />
          </div>
          <button
            onClick={onClick11}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg -mt-8"
          >
            <span className="text-lg text-white">Go to Patient Consult</span>
          </button>
        </>
      ) : null}
      {flag12 ? (
        <>
          <div className="fixed w-full h-screen bg-[#FF0017] opacity-20 -z-10" />
          <div className="flex flex-col items-center justify-center w-[60%] h-48 bg-white opacity-90 rounded-lg mt-24">
            <span>Oh my god.</span>
            <span>I think you gave wrong information to the patient.</span>
            <span>Please try again!</span>
            <Image
              src="/wrong.png"
              alt="wrong"
              width={200}
              height={100}
              className="absolute left-[15%]"
            />
          </div>
          <button
            onClick={onClick10}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg mt-12"
          >
            <span className="text-lg text-white">Try again</span>
          </button>
        </>
      ) : null}
      {flag13 ? (
        <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 fixed bottom-[15%]">
          <span className="text-xl text-gray-500">
            Few Weeks Later... The patient visited the pharmacy.
          </span>
        </div>
      ) : null}
      {flag14 ? (
        <>
          <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90">
            <span className="text-xl text-gray-500">
              Me (pharmacist): How is it going?
            </span>
          </div>
          <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 px-8 py-12">
            <span className="text-xl text-gray-500 text-center">
              Patient's parents: Great! My child's constipation had gone really
              well. Thank you for your help.
            </span>
          </div>
        </>
      ) : null}
      {flag15 ? (
        <>
          <div className="fixed w-full h-screen bg-white opacity-50 -z-10" />
          <div className="flex flex-col gap-5 items-center justify-center w-full">
            <div className="flex flex-col gap-5 w-1/2">
              <span className="text-5xl font-bold text-[#18063C]">
                Congratulation!
              </span>
              <span className="text-3xl font-semibold text-[#18063C]">
                You successfully finished the patient counseling.
              </span>
            </div>
            <Image
              src="/success.png"
              alt="success"
              width={200}
              height={100}
              className="mt-8"
            />
            <Link href="/case-select" className="mt-10">
              <div className="bg-gray-400 rounded-full shadow-xl px-8 py-2">
                <span className="text-white">Go to Select Another Case</span>
              </div>
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
}
