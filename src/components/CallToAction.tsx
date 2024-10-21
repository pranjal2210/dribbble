import React from "react";

const CallToAction: React.FC = () => {
  return (
    <div className="py-[120px] bg-[#ffda79] text-center w-full">
      <div className="flex flex-col items-center justify-center gap-6 px-8">
        <h2
          className="max-w-[620px] mx-auto text-[64px] leading-[72px] font-normal"
          style={{ fontFamily: "source-serif-4" }}
        >
          Find your next designer today
        </h2>
        <p
          className="max-w-[580px] mx-auto text-xl leading-[36px] text-[#0d0c22]"
          style={{ fontFamily: "Mona-Sans" }}
        >
          The world’s leading brands use Dribbble to hire creative talent.
          Browse millions of top-rated portfolios to find your perfect creative
          match.
        </p>
        <div
          className="flex w-full justify-center pt-4 pb-6 gap-4"
          style={{ fontFamily: "Mona-Sans" }}
        >
          <a
            className="h-14 px-6 flex items-center justify-center leading-none text-sm bg-[#0d0c22] rounded-full text-white font-semibold hover:bg-gray-700 transition-all duration-300 ease-in-out"
            href="/register"
          >
            Get started now
          </a>
          <a
            className="h-14 px-6 flex items-center justify-center leading-none text-sm text-[#0d0c22] rounded-full bg-white font-semibold"
            href="/register"
          >
            Learn about hiring
          </a>
        </div>
        <div
          className="max-w-[400px] mx-auto text-xl text-[#0d0c22] leading-[36px]"
          style={{ fontFamily: "Mona-Sans" }}
        >
          Are you a designer?{" "}
          <a href="/register" className="underline whitespace-nowrap">
            Join Dribbble
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
