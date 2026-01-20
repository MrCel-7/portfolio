import { useState } from "react";
import TopNotification from "../components/TopNotification";
import { AlarmClock, BatteryFull, Home, Wifi, X } from "lucide-react";
import { IoMdArrowDropleft } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const ShowBrowser = ({ setShowChrome, age }) => {
  return (
    <div className="fixed inset-0 z-300 pointer-events-auto bg-white">
      <div className="absolute py-1 border-b border-white/10 items-center flex justify-between px-5 top-0 text-black bg-white/10 backdrop-blur-lg w-full">
        <TopNotification />
        <div className="p-2 bg-black rounded-full"></div>
        <div className="flex gap-2">
          <AlarmClock size={18} />
          <Wifi size={18} />
          <BatteryFull size={18} />
        </div>
      </div>

      {/* Body */}
      <div className="w-full gap-2 h-screen p-2 flex flex-col">
        <h1 className="text-3xl mt-9 font-semibold">Marcel Wang</h1>
        <p className="text-md">Web Developer</p>
        <div className="py-1 px-3 rounded-full border w-fit">
          <p className="text-md font-semibold">Informasi Umum</p>
        </div>

        {/* Images */}
        <div className="rounded-xl overflow-hidden">
          <div className="flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar">
            {/* Image 1 */}
            <div className="min-w-60 bg-green-300 snap-center overflow-hidden">
              <img
                src="/gambar-1.png"
                className="w-60 h-60 object-cover"
                draggable={false}
              />
            </div>

            {/* Image 2 */}
            <div className="bg-yellow-300 min-w-60 snap-center overflow-hidden">
              <img
                src="/gambar-2.png"
                className="w-60 h-60 object-cover"
                draggable={false}
              />
            </div>

            {/* Image 3 */}
            <div className="bg-yellow-300 min-w-60 snap-center overflow-hidden">
              <img
                src="/girl.png"
                className="w-60 h-60 object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Age */}
        <div className="flex w-full gap-2">
          <div className="rounded-xl p-2 bg-gray-200 flex-1">
            <p className="text-md">Age</p>
            <p className="text-2xl font-semibold mt-3">{age} years old</p>
            <p className="text-md">March 22, 2004</p>
          </div>
          <div className="rounded-xl p-2 bg-gray-200 flex-1">
            <p className="text-md">Religion</p>
            <p className="text-2xl font-semibold mt-3">Christian</p>
            <p className="text-md">March 22, 2004</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute h-fit bottom-0 border-b border-white/10 items-center  px-5 text-black bg-white/10 backdrop-blur-lg  w-full py-5 flex justify-around">
        <GiHamburgerMenu size={20} className="cursor-pointer" />
        <Home
          size={20}
          onClick={() => setShowChrome(false)}
          className="cursor-pointer"
        />
        <IoMdArrowDropleft size={20} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default ShowBrowser;
