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
        <p className="text-sm">Web Developer</p>
        <div className="py-1 px-3 rounded-full border w-fit">
          <p className="text-sm font-semibold">General Information</p>
        </div>

        {/* Images */}
        <div className="rounded-xl overflow-hidden">
          <div className="flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar">
            {/* Image 1 */}
            <div className="min-w-50 bg-green-300 snap-center overflow-hidden">
              <img
                src="/gambar-1.png"
                className="w-50 h-50 object-cover"
                draggable={false}
              />
            </div>

            {/* Image 2 */}
            <div className="bg-yellow-300 min-w-50 snap-center overflow-hidden">
              <img
                src="/gambar-2.png"
                className="w-50 h-50 object-cover"
                draggable={false}
              />
            </div>

            {/* Image 3 */}
            <div className="bg-yellow-300 min-w-50 snap-center overflow-hidden">
              <img
                src="/girl.png"
                className="w-50 h-50 object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Information */}
        <div className="flex w-full gap-2">
          <div className="rounded-xl p-2 bg-gray-200 flex-1">
            <p className="text-sm">Age</p>
            <p className="text-xl font-semibold mt-3">{age} years old</p>
            <p className="text-sm">March 22, 2004</p>
          </div>
          <div className="rounded-xl p-2 bg-gray-200 flex-1">
            <p className="text-sm">Religion</p>
            <p className="text-xl font-semibold mt-3">Christian</p>
          </div>
        </div>

        {/* Summary */}
        <div className="w-full rounded-xl p-2 bg-gray-200">
          <p className="text-sm font-bold">Summary</p>
          <p className="text-sm mt-3">
            Marcel Wang is an Indonesian Web Developer with a strong passion for
            coding and web technologies. He grew up in Tangerang City and
            graduated from SMK Mulia Buana in 2021. Coding started as a hobby
            for Marcel and gradually became his professional focus. He is
            skilled in modern web technologies such as JavaScript, ReactJS, and
            Tailwind CSS, which he uses to build interactive, responsive, and
            visually appealing web interfaces. Driven by curiosity and
            continuous learning, Marcel is committed to creating efficient,
            user-friendly digital solutions and constantly improving his craft
            as a web developer.
          </p>
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
