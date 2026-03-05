import Header from "../Components/Header";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <div className="relative w-full min-h-screen bg-green-base text-yellow-base flex flex-col">
        <Header />

        {/* Main Content */}
        <div className="flex-4 flex flex-col items-center justify-center">
          <div className="w-full max-w-6xl flex items-center justify-between">
            {/* Left Content */}
            <div className="max-w-xl flex flex-col">
              <h1 className="text-6xl gued">~ Marcel Wang ~</h1>

              <p className="lemonade text-md my-6 indent-8 text-justify">
                As a{" "}
                <span className="text-green-300">frontend web developer</span>,
                I enjoy transforming designs into engaging and interactive
                digital experiences. With expertise in{" "}
                <span className="text-blue-300">React</span>,{" "}
                <span className="text-yellow-400">JavaScript</span>, and{" "}
                <span className="text-blue-200">Tailwind CSS</span>, I build
                websites that are not only visually appealing but also fast and
                responsive.
              </p>

              <button className="w-fit cursor-pointer px-6 py-2 bg-yellow-base text-green-base rounded-md shadow-lg font-bold hover:scale-105 transition">
                About Me
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-end">
              <div className="wall-yellow-base rounded-xl shadow-xl p-5">
                <img
                  src="/collage.png"
                  alt="Collage"
                  className="w-60 hover:scale-105 transition"
                />
              </div>
            </div>
          </div>
        </div>
        {/* WhatsApp Icon (pojok kanan bawah) */}
        <div className="h-fit gap-5 py-0 flex justify-end px-20 pb-6">
          <FaWhatsapp className="text-4xl text-yellow-base cursor-pointer hover:scale-110 transition" />
          <FaGithub className="text-4xl text-yellow-base cursor-pointer hover:scale-110 transition" />
          <FaLinkedin className="text-4xl text-yellow-base cursor-pointer hover:scale-110 transition" />
        </div>
      </div>
      <div className="w-full h-screen bg-green-second"></div>
    </div>
  );
};

export default Dashboard;
