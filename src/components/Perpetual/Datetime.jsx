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
      <p className="text-white">
        {date.toLocaleTimeString().replace("AM", "")}
      </p>
    </div>
  );
};

export default DateTime;
