import { useState, useEffect } from "react";

const HomeHeader = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");

  const formatDate = (date) => {
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex justify-between w-full">
      <div className="flex items-start gap-2">
        <span className="font-bold text-7xl">{hours}</span>
        <span className="font-bold text-4xl">{minutes}</span>
      </div>
      <div className="flex flex-col">{formatDate(time)}</div>
    </div>
  );
};

export default HomeHeader;
