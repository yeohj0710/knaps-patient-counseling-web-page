import Image from "next/image";

export default function CaseSelect() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 gap-20 relative">
      <Image
        src="/home-background.png"
        alt="home-background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="opacity-10 -z-10"
      />
      <span>Which Case Are You Interested In?</span>
    </div>
  );
}
