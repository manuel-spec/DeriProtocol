import { useState, useEffect } from "react";
import Axios from "axios"; // Import Axios

const columns = [
  { id: "pair", label: "Trading Pair", minWidth: 120 },
  { id: "price", label: "Latest Price", minWidth: 100 },
  {
    id: "24H",
    label: "24H Change",
    minWidth: 120,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

const StickyHeadTable = () => {
  const [fetchedData, setFetchedData] = useState([]); // State to hold fetched data
  const [losersfetchedData, setLosersFetchedData] = useState([]);
  const [normalfetchedData, set24FetchedData] = useState([]);

  const [loading, setLoading] = useState(true); // State to track loading status
  const [activeComponent, setActiveComponent] = useState("Gainers");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const response2 = await Axios.get(
          "https://tradeappapi.safepauleni.site/api/coins/"
        );
        console.log(response2);

        //24 trunover coins
        const Gainers = response2.data.map((coin) => ({
          // Check if the required properties exist before accessing them
          coin: coin.symbol.toUpperCase(),
          price: coin.current_price || 0, // Default value if property is undefined
          "24H": coin.price_change_percentage_24h || 0, // Default value if property is undefined
          symbol: coin.image, // Add symbol for fetching logo
        }));

        // trending coins

        const coins = response.data.coins.map((coin) => ({
          // Check if the required properties exist before accessing them
          coin: coin.item.symbol.toUpperCase(),
          price: coin.item.data?.price || 0, // Default value if property is undefined
          "24H": coin.item.data?.price_change_percentage_24h.btc || 0, // Default value if property is undefined
          symbol: coin.item.small, // Add symbol for fetching logo
        }));

        setFetchedData(
          Gainers.slice(0, 15).sort((a, b) => b["24H"] - a["24H"])
        );
        setLosersFetchedData(
          Gainers.slice(0, 15).sort((a, b) => a["24H"] - b["24H"])
        );
        set24FetchedData(Gainers.slice(0, 15));
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, []); // Run fetchData on component mount

  return (
    <div className="overflow-hidden max-h-440 rounded-lg shadow">
      <div className="flex flex-row justify-between items-center bg-[#0F1720] w-full text-sm mt-2">
        <button
          className="text-white p-2 ml-3 focus:border"
          onClick={() => {
            setActiveComponent("Gainers");
          }}
        >
          Top Gainers
        </button>
        <button
          className="text-white p-2"
          onClick={() => {
            setActiveComponent("Losers");
          }}
        >
          Top Losers
        </button>
        <button
          className="text-white p-2 mr-2"
          onClick={() => {
            setActiveComponent("24");
          }}
        >
          24H Turn Over
        </button>
      </div>

      {activeComponent == "Gainers" && (
        <table className="w-full border-collapse">
          <thead className="bg-gray-800 text-white">
            {" "}
            <tr>
              {columns.map((column) => (
                <th
                  key={column.id}
                  className="px-4 py-2 text-left" // Text styling
                >
                  <p className="text-xs font-normal"> {column.label}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-gray-900 text-white">
            {loading ? ( // Check loading state before rendering data
              <tr key="loading">
                <td colSpan={columns.length} className="px-4 py-2 text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              fetchedData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-800">
                  {" "}
                  {/* Hover effect */}
                  <td className="px-4 py-2 flex items-center">
                    <img src={row.symbol} alt="" width={30} className="mr-2" />
                    <span className="font-bold text-sm">{row.coin} </span>
                    <span className="text-xs">/ USDT</span>
                  </td>
                  <td className="px-4 py-2 text-sm">
                    ${parseFloat(row.price).toFixed(3)}
                  </td>
                  <td className="px-4 py-2 text-right text-sm">
                    <div
                      style={{
                        backgroundColor: row["24H"] > 0 ? "#04CF99" : "#F36464",
                      }}
                      className="rounded text-center"
                    >
                      <span className="px-2 py-1  text-sm">
                        {row["24H"].toFixed(2)}
                      </span>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}

      {/* losers table component */}
      {activeComponent == "Losers" && (
        <table className="w-full border-collapse">
          <thead className="bg-gray-800 text-white">
            {" "}
            <tr>
              {columns.map((column) => (
                <th
                  key={column.id}
                  className="px-4 py-2 text-left" // Text styling
                >
                  <p className="text-xs font-normal"> {column.label}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-gray-900 text-white">
            {loading ? ( // Check loading state before rendering data
              <tr key="loading">
                <td colSpan={columns.length} className="px-4 py-2 text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              losersfetchedData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-800">
                  {" "}
                  {/* Hover effect */}
                  <td className="px-4 py-2 flex items-center">
                    <img src={row.symbol} alt="" width={30} className="mr-2" />
                    <span className="font-bold text-sm">{row.coin} </span>
                    <span className="text-xs">/ USDT</span>
                  </td>
                  <td className="px-4 py-2 text-sm">
                    ${parseFloat(row.price).toFixed(3)}
                  </td>
                  <td className="px-4 py-2 text-right text-sm">
                    <div
                      style={{
                        backgroundColor: row["24H"] > 0 ? "#04CF99" : "#F36464",
                      }}
                      className="rounded text-center"
                    >
                      <span className="px-2 py-1  text-sm">
                        {row["24H"].toFixed(2)}
                      </span>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}

      {/* 24 table component */}
      {activeComponent == "24" && (
        <table className="w-full border-collapse">
          <thead className="bg-gray-800 text-white">
            {" "}
            <tr>
              {columns.map((column) => (
                <th
                  key={column.id}
                  className="px-4 py-2 text-left" // Text styling
                >
                  <p className="text-xs font-normal"> {column.label}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-gray-900 text-white">
            {loading ? ( // Check loading state before rendering data
              <tr key="loading">
                <td colSpan={columns.length} className="px-4 py-2 text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              normalfetchedData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-800">
                  {" "}
                  {/* Hover effect */}
                  <td className="px-4 py-2 flex items-center">
                    <img src={row.symbol} alt="" width={30} className="mr-2" />
                    <span className="font-bold text-sm">{row.coin} </span>
                    <span className="text-xs">/ USDT</span>
                  </td>
                  <td className="px-4 py-2 text-sm">
                    ${parseFloat(row.price).toFixed(3)}
                  </td>
                  <td className="px-4 py-2 text-right text-sm">
                    <div
                      style={{
                        backgroundColor: row["24H"] > 0 ? "#04CF99" : "#F36464",
                      }}
                      className="rounded text-center"
                    >
                      <span className="px-2 py-1  text-sm">
                        {row["24H"].toFixed(2)}
                      </span>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StickyHeadTable;
