import { useState } from "react";

const CoinGraph = () => {
  const [data, setData] = useState({}); // State to hold prices for all pairs
  const [isLoading, setIsLoading] = useState(true); // Flag for loading state

  console.log(data)
  const wsConnections = {};

  function subscribeToCrypto(cryptoPair) {
    const url = `wss://stream.binance.com:9443/ws/${cryptoPair}@trade`;
    wsConnections[cryptoPair] = new WebSocket(url);
    wsConnections[cryptoPair].onmessage = (event) => {
      const newData = JSON.parse(event.data); // Parse received data

      // Update state with only the price for the received pair
      setData((prevState) => ({
        ...prevState,
        [cryptoPair]: newData?.p, // Update only the price for this crypto pair
      }));
      setIsLoading(false); // Set loading to false when data arrives
    };
  }

  // Example: Subscribe to two crypto pairs initially
  subscribeToCrypto("btcusdt");
  subscribeToCrypto("ethusdt");
  subscribeToCrypto("trxusdt");

  return (
    <div className="flex flex-row bg-slate-900" style={{ padding: '1.07143rem 1.07143rem .71429rem' }}>
      {/* Display loading message or prices based on loading state */}
      {isLoading ? (
        <div className="text-center text-white font-bold">Loading data...</div>
      ) : (
        <div className="flex flex-wrap justify-center items-center"> {/* Wrap for better layout */}
          {Object.keys(data).map((cryptoPair) => (
            <div key={cryptoPair} className="flex flex-col mr-3 ">
              <div className="flex flex-row text-xs text-white">
                <div>{cryptoPair.toUpperCase()}</div>
                <div className="ml-1 bg-lime-600">+2.52 %</div>
              </div>
              <div className="text-lime-600 text-xl font-bold ">
                {data[cryptoPair] !== undefined ? parseFloat(data[cryptoPair]).toFixed(2) : '---'}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoinGraph;
