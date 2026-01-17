import { Home, Phone, Scroll } from "lucide-react";
import { useState } from "react";
import { BsLightning } from "react-icons/bs";
import { GiOpenBook } from "react-icons/gi";

const BottomNav = ({
  setShowAbout,
  setShowSkill,
  setShowProject,
  setShowContact,
}) => {
  return (
    <div className="absolute border-t-3 z-100 border-white/10 bg-white/10 backdrop-blur-sm flex gap-5 bottom-0 w-full justify-center py-5">
      <div
        onClick={() => {
          setShowAbout(true);
          setShowSkill(false);
        }}
        className="w-15 hover:scale-110 cursor-pointer h-15 rounded-full flex border-3 justify-center items-center border-white"
      >
        <Scroll size={28} className="text-white font-bold" />
      </div>
      <div
        onClick={() => {
          setShowSkill(true);
          setShowAbout(false);
        }}
        className="w-15 hover:scale-110 cursor-pointer h-15 rounded-full flex border-3 justify-center items-center border-white"
      >
        <BsLightning size={28} className="text-white font-bold" />
      </div>
      <div
        onClick={() => {
          setShowAbout(false);
          setShowSkill(false);
          setShowProject(false);
          setShowContact(false);
        }}
        className="w-15 hover:scale-125 scale-110 cursor-pointer h-15 rounded-full flex border-3 justify-center items-center border-white"
      >
        <Home size={28} className="text-white font-bold" />
      </div>
      <div className="w-15 hover:scale-110 cursor-pointer h-15 rounded-full flex border-3 justify-center items-center border-white">
        <GiOpenBook size={28} className="text-white font-bold" />
      </div>
      <div className="w-15 hover:scale-110 cursor-pointer h-15 rounded-full flex border-3 justify-center items-center border-white">
        <Phone size={28} className="text-white font-bold" />
      </div>
    </div>
  );
};

export default BottomNav;
