import { useState } from "react";
import HomeHeader from "./components/HomeHeader";
import {
  AlarmClock,
  BatteryFull,
  Cake,
  Home,
  Phone,
  Scroll,
  Tag,
  Wifi,
  X,
} from "lucide-react";
import { IoIosArrowUp } from "react-icons/io";
import { BsLightning } from "react-icons/bs";
import { GiOpenBook } from "react-icons/gi";
import TopNotification from "./components/TopNotification";
import { GrGallery, GrLocation } from "react-icons/gr";
import { FaChrome } from "react-icons/fa";

const App = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [startY, setStartY] = useState(null);
  const [unlocked, setUnlocked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const [showAbout, setShowAbout] = useState(false);

  const THRESHOLD = 160;

  const age = new Date().getFullYear() - 2004;

  const handleStart = (y) => {
    if (isAnimating) return;
    setStartY(y);
  };

  const handleMove = (y) => {
    if (startY === null || isAnimating) return;
    const delta = startY - y;
    if (delta > 0) setOffsetY(delta);
  };

  const handleEnd = () => {
    if (isAnimating) return;

    if (offsetY > THRESHOLD) {
      // animate ke atas sampai hilang
      setIsAnimating(true);
      setOffsetY(window.innerHeight);

      setTimeout(() => {
        setUnlocked(true);
        setIsAnimating(false);
      }, 500);
    } else {
      // balik lagi ke bawah
      setIsAnimating(true);
      setOffsetY(0);
      setTimeout(() => setIsAnimating(false), 300);
    }

    setStartY(null);
  };

  return (
    <div>
      {!unlocked && (
        <div
          className={`fixed inset-0 z-50 ${
            isAnimating ? "transition-transform duration-500 ease-out" : ""
          }`}
          style={{ transform: `translateY(-${offsetY}px)` }}
          onTouchStart={(e) => handleStart(e.touches[0].clientY)}
          onTouchMove={(e) => handleMove(e.touches[0].clientY)}
          onTouchEnd={handleEnd}
          onMouseDown={(e) => handleStart(e.clientY)}
          onMouseMove={(e) => startY && handleMove(e.clientY)}
          onMouseUp={handleEnd}
        >
          {/* Background */}
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            className="w-full h-screen object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 text-white flex flex-col justify-between">
            <div className="px-8 pt-20">
              <HomeHeader />
            </div>

            <div className="mb-24 flex mx-10 flex-col gap-5">
              <p className="text-gray-200">Notification</p>
              <div className="py-2 px-5 items-center bg-white rounded-xl flex">
                <div className="w-10 h-10 overflow-hidden flex justify-center items-end font-bold bg-yellow-400 rounded-full text-white">
                  <img src="/gambar-1.png" className="w-9" />
                </div>
                <div className="ml-5">
                  <div className="flex flex-col items-start">
                    <h1 className="text-lg text-black font-bold">
                      Marcel Wang
                    </h1>
                    <p className="text-gray-700 text-sm">
                      Hi! I like to code using{" "}
                      <span className="text-yellow-400">Javascript</span>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-2 px-5 items-center bg-white rounded-xl flex">
                <div className="w-10 h-10 flex justify-center items-end overflow-hidden font-bold bg-yellow-400 rounded-full text-white">
                  <img src="/gambar-1.png" className="w-9" />
                </div>
                <div className="ml-5">
                  <div className="flex flex-col items-start">
                    <h1 className="text-lg text-black font-bold">
                      Marcel Wang
                    </h1>
                    <p className="text-gray-700 text-sm">
                      And also I like to design using <br />
                      <span className="text-blue-400">TailwindCSS</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pb-10 flex flex-col items-center">
              <p className="text-md mb-5 text-gray-200">Marcel Wang</p>
              <IoIosArrowUp size={28} className="animate-bounce opacity-80" />
            </div>
          </div>
        </div>
      )}

      {/* HOME SCREEN */}
      <div className="h-screen flex items-center justify-center">
        <img src="/girl.png" className="w-full h-screen object-cover" />
        <div className="flex bg-black/10 w-full h-screen absolute top-0 left-0">
          {/* Top Notification */}
          <div className="absolute py-1 border-b border-white/10 items-center flex justify-between px-5 top-0 text-white bg-white/10 backdrop-blur-lg w-full">
            <TopNotification />
            <div className="p-2 bg-black rounded-full"></div>
            <div className="flex gap-2">
              <AlarmClock size={18} />
              <Wifi size={18} />
              <BatteryFull size={18} />
            </div>
          </div>

          {/* body phone */}
          <div className="flex absolute gap-10 w-fit mt-110 h-fit mx-12">
            <div className="flex rounded-lg w-15 h-15 items-center justify-center text-white bg-white/30 border backdrop-blue-sm border-white/10 cursor-pointer">
              <GrGallery size={28} />
            </div>
            <div className="flex w-15 h-15 rounded-lg justify-center items-center text-white bg-white/30 border backdrop-blue-sm border-white/10 cursor-pointer">
              <FaChrome size={28} />
            </div>
          </div>

          {/* Pop Up Box */}
          {/* About */}
          {showAbout && (
            <div className="fixed inset-0 z-50 px-10 grid place-items-center">
              {/* overlay */}
              <div
                className="absolute inset-0"
                onClick={() => setShowAbout(false)}
              />

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
                        Hi! What do you like more? Between code and design. I
                        like to do both of them. Welcome to my portfolio hope
                        you enjoy! :)
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
          )}

          {/* Bottom Apps Icon */}
          <div className="absolute border-t-3 border-white/10 bg-white/10 backdrop-blur-sm flex gap-5 bottom-0 w-full justify-center py-5">
            <div
              onClick={() => setShowAbout(true)}
              className="w-15 hover:scale-110 cursor-pointer h-15 rounded-full flex border-3 justify-center items-center border-white"
            >
              <Scroll size={28} className="text-white font-bold" />
            </div>
            <div className="w-15 hover:scale-110 cursor-pointer h-15 rounded-full flex border-3 justify-center items-center border-white">
              <BsLightning size={28} className="text-white font-bold" />
            </div>
            <div className="w-15 hover:scale-125 scale-110 cursor-pointer h-15 rounded-full flex border-3 justify-center items-center border-white">
              <Home size={28} className="text-white font-bold" />
            </div>
            <div className="w-15 hover:scale-110 cursor-pointer h-15 rounded-full flex border-3 justify-center items-center border-white">
              <GiOpenBook size={28} className="text-white font-bold" />
            </div>
            <div className="w-15 hover:scale-110 cursor-pointer h-15 rounded-full flex border-3 justify-center items-center border-white">
              <Phone size={28} className="text-white font-bold" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
