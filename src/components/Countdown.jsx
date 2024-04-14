import Axios from "axios";
import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { Riple } from "react-loading-indicators";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";

const getLocalStorageValue = (key) => localStorage.getItem(key);
const setLocalStorageValue = (key, value) => localStorage.setItem(key, value);
const removeLocalStorageValue = (key) => localStorage.removeItem(key);

const Completionist = () => (
  <span>
    <Riple color="#ffffff" size="small" text="" textColor="" />
  </span>
);

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};
const onComplete = () => {};
const CountDown = ({ Seconds, id, item, order, active, user, coinPrice }) => {
  const navigate = useNavigate();
  const [currentOrder, setCurrentOrder] = useState();
  useEffect(() => {
    Axios.post("http://127.0.0.1:8000/api/order/get/", {
      pk: item,
    }).then((res) => {
      console.log(res.data);
      setCurrentOrder(res.data);
    });
  }, []);
  const onDone = async () => {
    const cookies = new Cookies();

    const decoded = jwtDecode(cookies.get("jwt"));

    await Axios.post("http://127.0.0.1:8000/api/order/created/", {
      user: order.user,
      token_name: order.token_name,
      trade_amount: order.trade_amount,
      trade_time: order.trade_time,
      trade_percent: order.trade_percent,
      trade_profit:
        parseFloat(order["trade_amount"]) *
        (parseFloat(order["trade_percent"].slice(-2)) / 100),
      purchase_price: coinPrice,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });

    await Axios.put("http://127.0.0.1:8000/api/balance/update/", {
      pk: order.user,
      token: currentOrder["token_name"],
      balance:
        parseFloat(user[`${currentOrder["token_name"]}_Balance`]) +
        parseFloat(order["trade_amount"]) *
          (parseFloat(order["trade_percent"].slice(-2)) / 100),
    }).then((res) => {
      console.log(res.data);
      navigate("/");
    });
    ``;
    await Axios.delete("http://127.0.0.1:8000/api/order/delete/", {
      data: {
        pk: item,
      },
    }).then((res) => {
      navigate("/");
    });
  };
  const [data, setData] = useState({
    date: Date.now(),
    delay: Seconds * 1000,
  });

  useEffect(() => {
    const savedDate = getLocalStorageValue(`end_date_${id}`);
    if (savedDate != null && !isNaN(savedDate)) {
      const currentTime = Date.now();
      const delta = parseInt(savedDate, 10) - currentTime;

      if (delta > data.delay) {
        // Clear the saved end date if the countdown is completed
        if (localStorage.getItem(`end_date_${id}`).length > 0)
          removeLocalStorageValue(`end_date_${id}`);
      } else {
        // Update the end date with the current date
        setData((prevData) => ({
          ...prevData,
          date: currentTime,
          delay: delta,
        }));
      }
    }
  }, [data.delay, id]);

  return (
    <div>
      <div>
        <Countdown
          date={data.date + data.delay}
          renderer={renderer}
          onStart={(delta) => {
            // Save the end date
            if (getLocalStorageValue(`end_date_${id}`) == null)
              setLocalStorageValue(
                `end_date_${id}`,
                JSON.stringify(data.date + data.delay)
              );
          }}
          onComplete={() => {
            // Remove the end date from localStorage when the countdown is completed

            if (getLocalStorageValue(`end_date_${id}`) != null)
              removeLocalStorageValue(`end_date_${id}`);
            onDone();
          }}
        />
      </div>
    </div>
  );
};

export default CountDown;
