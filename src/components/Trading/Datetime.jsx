import { useState, useEffect } from "react";

export const DateTime = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <div className="text-white">
        <span>{date.toLocaleTimeString().replace("AM", "")}</span>
      </div>
    </div>
  );
};

export default DateTime;
