import { useState } from "react";
import HomeHeader from "./components/HomeHeader";
import { AlarmClock, BatteryFull, Cake, Tag, Wifi, X } from "lucide-react";
import { IoIosArrowUp } from "react-icons/io";
import { GiOpenBook } from "react-icons/gi";
import TopNotification from "./components/TopNotification";
import { GrGallery, GrLocation } from "react-icons/gr";
import { FaChrome } from "react-icons/fa";
import BottomNav from "./components/BottomNav";
import ShowSkill from "./components/ShowSkill";
import ShowAbout from "./components/ShowAbout";

const App = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [startY, setStartY] = useState(null);
  const [unlocked, setUnlocked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const [showAbout, setShowAbout] = useState(false);
  const [showSkill, setShowSkill] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const javascriptPercent = 76;
  const reactPercent = 73;
  const tailwindPercent = 92;
  const nodeJsPercent = 47;
  const mySql = 67;

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
          className={`fixed inset-0 z-999 ${
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
        <img src="/tag.jpeg" className="w-full h-screen object-cover" />
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
          {showAbout && <ShowAbout setShowAbout={setShowAbout} age={age} />}

          {/* Skill */}
          {showSkill && (
            <ShowSkill
              setShowSkill={setShowSkill}
              javascriptPercent={javascriptPercent}
              reactPercent={reactPercent}
              tailwindPercent={tailwindPercent}
              nodeJsPercent={nodeJsPercent}
              mySql={mySql}
            />
          )}

          {/* Bottom Apps Icon */}
          <BottomNav
            setShowAbout={setShowAbout}
            setShowSkill={setShowSkill}
            setShowProject={setShowProject}
            setShowContact={setShowContact}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
