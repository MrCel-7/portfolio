import { Cake, Tag, X } from "lucide-react";
import { useState } from "react";
import { GiOpenBook } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";

const ShowAbout = ({ setShowAbout, age }) => {
  return (
    <div className="fixed inset-0 z-50 px-10 grid place-items-center">
      {/* overlay */}
      <div className="absolute inset-0" onClick={() => setShowAbout(false)} />

      {/* popup */}
      <div className="relative w-full mx-10">
        <div className="about-pop rounded-xl bg-white/30 border border-white/10 backdrop-blur-lg p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-white">ABOUT</h1>
            <button onClick={() => setShowAbout(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="about-scroll gap-2 flex flex-col px-6 pb-6">
            <div className="flex gap-5 items-center">
              <div className="flex items-center gap-3">
                <Tag size={25} />
              </div>
              <p className="text-white text-xl">Marcel Wang</p>
            </div>
            <div className="flex gap-5 w-full">
              <div className="flex items-center gap-3">
                <Cake size={25} />
              </div>
              <p className="text-white text-xl">{age} Years Old</p>
            </div>
            <div className="flex gap-5 w-full">
              <div className="flex items-center gap-3">
                <GrLocation size={25} />
              </div>
              <p className="text-white text-xl">Tangerang, Indonesia</p>
            </div>
            <div className="flex gap-5 w-full">
              <div className="flex items-center gap-3">
                <GiOpenBook size={25} />
              </div>
              <p className="text-white text-xl">Pamulang University</p>
            </div>
            <div className="flex gap-5 w-full">
              <p className="text-white text-xl mt-8 text-justify indent-5">
                Hi! What do you like more? Between code and design. I like to do
                both of them. Welcome to my portfolio hope you enjoy! :)
              </p>
            </div>
            <div className="flex mt-10 w-full justify-center">
              <img
                src="/gambar-1.png"
                className="w-30 rounded-full border-white/10 bg-white/10 backdrop-blur-lg border-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAbout;
