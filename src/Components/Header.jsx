import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");

  const toContact = () => {
    navigate("/contact");
  };

  useEffect(() => {
    const sections = [
      document.querySelector("#dashboard-section"),
      document.querySelector("#about-section"),
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "dashboard-section") {
              setActiveSection("dashboard");
            }
            if (entry.target.id === "about-section") {
              setActiveSection("about");
            }
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div>
      {/* Header */}
      <div
        className={`w-full fixed flex justify-between items-center h-fit py-4 px-8 transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-white/30 shadow-lg" : "bg-transparent"}`}
      >
        <div className="flex flex-1 gap-5">
          <NavLink
            to="/dashboard"
            className={() =>
              activeSection === "dashboard"
                ? "text-yellow-base"
                : "text-yellow-base-400"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/about"
            className={() =>
              activeSection === "about"
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
            className="py-2 px-3 hover:scale-105 transition bg-yellow-base rounded-md shadow-md font-bold text-green-base cursor-pointer hover:bg-yellow-200"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
