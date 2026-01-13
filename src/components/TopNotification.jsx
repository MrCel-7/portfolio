import { useState, useEffect } from "react";

const TopNotification = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return clearInterval(timer);
  }, []);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");

  return (
    <div>
      <span className="text-lg">
        {hours}:{minutes}
      </span>
    </div>
  );
};

export default TopNotification;
