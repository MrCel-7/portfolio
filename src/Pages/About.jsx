import { NavLink, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const toContact = () => {
    navigate("/contact");
  };
  return (
    <div className="w-full h-screen flex">
      {/* Header */}
      <div className="w-full flex justify-between items-center h-fit py-4 px-8">
        <div className="flex-1 flex">
          <h1 className="text-2xl font-bold text-blue-400 text-shadow-md">
            MARCEL WANG
          </h1>
        </div>
        <div className="flex flex-1 justify-center gap-5">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-400 hover:text-black/70"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-400 hover:text-black/70"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-400 hover:text-black/70"
            }
          >
            Project
          </NavLink>
          <NavLink
            to="/skill"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-400 hover:text-black/70"
            }
          >
            Skill
          </NavLink>
        </div>
        <div className="flex-1 flex justify-end">
          <button
            onClick={toContact}
            className="py-2 px-3 bg-blue-400 rounded-md shadow-md font-bold text-white cursor-pointer hover:bg-blue-300"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
