import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const toContact = () => {
    navigate("/contact");
  };

  const [darkTest, setDarkTest] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setDarkTest(true);
      } else {
        setDarkTest(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div>
      {/* Header */}
      <div className="w-full fixed flex justify-between items-center h-fit py-4 px-8">
        {/* <div className="flex-1 flex">
          <h1 className="text-4xl gued font-bold text-yellow-base text-shadow-md">
            Marcel Wang
          </h1>
        </div> */}
        <div className="flex flex-1 gap-5">
          <NavLink
            to="/dashboard"
            className={`{darkText ? "text-black" : ({ isActive }) =>
              isActive
                ? "text-yellow-base"
                : "text-yellow-base-400"}`}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-base"
                : "text-yellow-base-400 hover:text-black/70"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-base"
                : "text-yellow-base-400 hover:text-black/70"
            }
          >
            Project
          </NavLink>
          <NavLink
            to="/skill"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-base"
                : "text-yellow-base-400 hover:text-black/70"
            }
          >
            Skill
          </NavLink>
        </div>
        <div className="flex-1 flex justify-end">
          <button
            onClick={toContact}
            className="py-2 px-3 bg-yellow-base rounded-md shadow-md font-bold text-green-base cursor-pointer hover:bg-yellow-200"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
