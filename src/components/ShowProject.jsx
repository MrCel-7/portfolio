import { X } from "lucide-react";

const ShowProject = ({ setShowProject }) => {
  return (
    <div className="fixed inset-0 z-50 px-10 grid place-items-center">
      {/* overlay */}
      <div className="absolute inset-0" onClick={() => setShowProject(false)} />

      {/* popup */}
      <div className="relative w-full mx-10">
        <div className="about-pop rounded-xl max-h-120 bg-white/30 border border-white/10 backdrop-blur-lg p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-white">Projects</h1>
            <button
              className="cursor-pointer"
              onClick={() => setShowProject(false)}
            >
              <X size={20} />
            </button>
          </div>
          <div className="about-scroll gap-2 flex flex-col px-6 pb-6">
            <div className="flex flex-col gap-5">
              <div className="flex gap-5">
                <div className="flex-1 flex flex-col border rounded-xl">
                  <div className="h-30 flex justify-center">
                    <img src="/gambar-1.png" className="h-full object-cover" />
                  </div>
                  <div className="border-t p-2">
                    <h1 className="text-semibold">Project 1</h1>
                  </div>
                </div>
                <div className="flex-1 flex flex-col border rounded-xl">
                  <div className="h-30 flex justify-center">
                    <img src="/gambar-1.png" className="h-full object-cover" />
                  </div>
                  <div className="border-t p-2">
                    <h1 className="text-semibold">Project 2</h1>
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex-1 flex flex-col border rounded-xl">
                  <div className="h-30 flex justify-center">
                    <img src="/gambar-1.png" className="h-full object-cover" />
                  </div>
                  <div className="border-t p-2">
                    <h1 className="text-semibold">Project 1</h1>
                  </div>
                </div>
                <div className="flex-1 flex flex-col border rounded-xl">
                  <div className="h-30 flex justify-center">
                    <img src="/gambar-1.png" className="h-full object-cover" />
                  </div>
                  <div className="border-t p-2">
                    <h1 className="text-semibold">Project 2</h1>
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex-1 flex flex-col border rounded-xl">
                  <div className="h-30 flex justify-center">
                    <img src="/gambar-1.png" className="h-full object-cover" />
                  </div>
                  <div className="border-t p-2">
                    <h1 className="text-semibold">Project 1</h1>
                  </div>
                </div>
                <div className="flex-1 flex flex-col border rounded-xl">
                  <div className="h-30 flex justify-center">
                    <img src="/gambar-1.png" className="h-full object-cover" />
                  </div>
                  <div className="border-t p-2">
                    <h1 className="text-semibold">Project 2</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProject;
