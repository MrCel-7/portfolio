import { useState } from "react";
import HomeHeader from "./components/HomeHeader";
import { ArrowUp } from "lucide-react";

const App = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [startY, setStartY] = useState(null);
  const [unlocked, setUnlocked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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
    <div className="h-screen overflow-hidden">
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
            <div className="px-8 pt-8">
              <HomeHeader />
            </div>

            <div className="text-center mb-24">
              <p className="text-xl">
                <span className="text-yellow-400">Javascript</span> –{" "}
                <span className="text-blue-300">Frontend Developer</span>
              </p>
              <h1 className="text-5xl font-bold mt-2 mb-5">MARCEL WANG</h1>
              <p className="text-md indent-5 text-gray-200 text-justify mx-20">
                I like to use my imagination and coding skill to make beautiful
                and modern website using{" "}
                <span className="text-yellow-400">Javascript</span> and{" "}
                <span className="text-blue-300">TailwindCSS</span>.
              </p>
            </div>

            <div className="pb-10 flex justify-center">
              <ArrowUp size={28} className="animate-bounce opacity-80" />
            </div>
          </div>
        </div>
      )}

      {/* HOME SCREEN */}
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold">HOME SCREEN 🚀</h1>
      </div>
    </div>
  );
};

export default App;
