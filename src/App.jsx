import { useState } from "react";
import HomeHeader from "./components/HomeHeader";
import {
  AlarmClock,
  BatteryFull,
  Chrome,
  Home,
  Phone,
  Scroll,
  Wifi,
} from "lucide-react";
import { IoIosArrowUp } from "react-icons/io";
import { BsLightning } from "react-icons/bs";
import { GiOpenBook } from "react-icons/gi";
import TopNotification from "./components/TopNotification";
import { GrGallery } from "react-icons/gr";
import { FaChrome } from "react-icons/fa";

const App = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [startY, setStartY] = useState(null);
  const [unlocked, setUnlocked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const [showC, setShowC] = useState(false);
  const [showD, setShowD] = useState(false);
  const [showE, setShowE] = useState(false);

  const [showAbout, setShowAbout] = useState(false);

  const THRESHOLD = 160;

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
                      And also I like to design using{" "}
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
            <div className="flex p-3 rounded-lg w-fit text-white bg-white/30 border backdrop-blue-sm border-white/10 cursor-pointer">
              <GrGallery size={45} />
            </div>
            <div className="flex p-3 rounded-lg w-fit text-white bg-white/30 border backdrop-blue-sm border-white/10 cursor-pointer">
              <FaChrome size={45} />
            </div>
          </div>

          {/* Bottom Apps Icon */}
          <div className="absolute border-t-3 border-white/10 bg-white/10 backdrop-blur-sm flex gap-5 bottom-0 w-full justify-center py-5">
            <div
              onMouseEnter={() => setShowA(true)}
              onMouseLeave={() => setShowA(false)}
              className="w-15 hover:scale-110 cursor-pointer h-15 rounded-full flex border-3 justify-center items-center border-white"
            >
              <Scroll size={28} className="text-white font-bold" />
              {showA && (
                <div className="absolute -top-15 border border-white/30 rounded px-2 py-1 bg-white/10 backdrop-blur-sm">
                  <p className="text-lg text-white">About</p>
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => setShowB(true)}
              onMouseLeave={() => setShowB(false)}
              className="w-15 hover:scale-110 cursor-pointer h-15 rounded-full flex border-3 justify-center items-center border-white"
            >
              <BsLightning size={28} className="text-white font-bold" />
              {showB && (
                <div className="absolute -top-15 border border-white/30 rounded px-2 py-1 bg-white/10 backdrop-blur-sm">
                  <p className="text-lg text-white">Skills</p>
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => setShowE(true)}
              onMouseLeave={() => setShowE(false)}
              className="w-15 hover:scale-125 scale-110 cursor-pointer h-15 rounded-full flex border-3 justify-center items-center border-white"
            >
              <Home size={28} className="text-white font-bold" />
              {showE && (
                <div className="absolute -top-15 border border-white/30 rounded px-2 py-1 bg-white/10 backdrop-blur-sm">
                  <p className="text-lg text-white">Home</p>
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => setShowC(true)}
              onMouseLeave={() => setShowC(false)}
              className="w-15 hover:scale-110 cursor-pointer h-15 rounded-full flex border-3 justify-center items-center border-white"
            >
              <GiOpenBook size={28} className="text-white font-bold" />
              {showC && (
                <div className="absolute -top-15 border border-white/30 rounded px-2 py-1 bg-white/10 backdrop-blur-sm">
                  <p className="text-lg text-white">Projects</p>
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => setShowD(true)}
              onMouseLeave={() => setShowD(false)}
              className="w-15 hover:scale-110 cursor-pointer h-15 rounded-full flex border-3 justify-center items-center border-white"
            >
              <Phone size={28} className="text-white font-bold" />
              {showD && (
                <div className="absolute -top-15 border border-white/30 rounded px-2 py-1 bg-white/10 backdrop-blur-sm">
                  <p className="text-lg text-white">Contact</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
