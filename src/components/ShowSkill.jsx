import { useState } from "react";
import { X } from "lucide-react";

const ShowSkill = ({
  setShowSkill,
  javascriptPercent,
  reactPercent,
  tailwindPercent,
  nodeJsPercent,
  mySql,
}) => {
  return (
    <div className="fixed inset-0 z-50 px-10 grid place-items-center">
      {/* overlay */}
      <div className="absolute inset-0" onClick={() => setShowSkill(false)} />

      {/* popup */}
      <div className="relative w-full mx-10">
        <div className="about-pop rounded-xl bg-white/30 border border-white/10 backdrop-blur-lg p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-white">Skills</h1>
            <button onClick={() => setShowSkill(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col">
            <div className="flex w-full justify-between">
              <h1 className="text-xl">Javascript</h1>
              <span>{javascriptPercent}%</span>
            </div>
            <div className="w-full rounded-full overflow-hidden bg-white/30 backdrop-blur-lg">
              <div
                className="bg-yellow-400 py-1"
                style={{ width: `${javascriptPercent}%` }}
              ></div>
            </div>
          </div>
          <div className="flex mt-5 flex-col">
            <div className="flex w-full justify-between">
              <h1 className="text-xl">React</h1>
              <span>{reactPercent}%</span>
            </div>
            <div className="w-full rounded-full overflow-hidden bg-white/30 backdrop-blur-lg">
              <div
                className="bg-blue-400 py-1"
                style={{ width: `${reactPercent}%` }}
              ></div>
            </div>
          </div>
          <div className="flex mt-5 flex-col">
            <div className="flex w-full justify-between">
              <h1 className="text-xl">TailwindCSS</h1>
              <span>{tailwindPercent}%</span>
            </div>
            <div className="w-full rounded-full overflow-hidden bg-white/30 backdrop-blur-lg">
              <div
                className="bg-blue-200 py-1"
                style={{ width: `${tailwindPercent}%` }}
              ></div>
            </div>
          </div>
          <div className="flex mt-5 flex-col">
            <div className="flex w-full justify-between">
              <h1 className="text-xl">NodeJS</h1>
              <span>{nodeJsPercent}%</span>
            </div>
            <div className="w-full rounded-full overflow-hidden bg-white/30 backdrop-blur-lg">
              <div
                className="bg-green-400 py-1"
                style={{ width: `${nodeJsPercent}%` }}
              ></div>
            </div>
          </div>
          <div className="flex mt-5 flex-col">
            <div className="flex w-full justify-between">
              <h1 className="text-xl">MySQL</h1>
              <span>{mySql}%</span>
            </div>
            <div className="w-full rounded-full overflow-hidden bg-white/30 backdrop-blur-lg">
              <div
                className="bg-orange-400 py-1"
                style={{ width: `${mySql}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowSkill;
