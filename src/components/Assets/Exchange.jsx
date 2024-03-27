import exchange_assets from "../../assets/imgs/assets/exchange_assets.png";

const Exchange = () => {
  return (
    <div>
      <div className="p-2">
        <div
          className="flex flex-col w-full mt-3 rounded-lg h-66  mr-3 "
          style={{
            backgroundImage: `url(${exchange_assets})`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-row m-4">
            <p className="text-[#eeeeee] text-sm mt-1 mr-2">Exchange assets</p>
          </div>
          <div className="text-2xl font-semibold text-white ml-4">0.00</div>
          <div className="text-white text-xs ml-4"> ≈$ 0.00</div>
          <div className="text-white text-sm mt-1 ml-4 font-mediumbold">
            Daily Profit: 0.00
          </div>
          <div className="text-white ml-5">
            <button className="border border-white px-4 py-2 rounded text-xs mb-3 m-1 hover:bg-[#FDD786]">
              Withdrawal
            </button>
            <button className="border border-white px-4 py-2 rounded text-xs mb-3 m-1 hover:bg-[#FDD786]">
              Deposit
            </button>
            <button className="border border-white px-4 py-2 rounded text-xs mb-3 m-1 hover:bg-[#FDD786]">
              Flash
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col border-b-2 border-black mb-2 border-t-2">
          <div className="flex flex-row justify-between items-center  text-white">
            <div className="flex flex-row mb-1 ml-2 mt-2">
              <img
                src="https://deriprotocolwrd.com/resources/coin/usdt.png"
                alt=""
                width={25}
              />
              <p className="text-white font-semibold ml-2">USDT</p>
            </div>
            <div>
              <p className="text-sm text-[#ddd] font-semibold">
                Valuation ≈$ 0.00
              </p>
            </div>
          </div>
          <div className="flex flex-row text-sm justify-between text-white p-4 items-center">
            <div className="text-[#ddd] text-xs ml-2">Freeze 0</div>
            <div className="text-[#ddd] text-xs">Availabe 0</div>
          </div>
        </div>
        <div className="flex flex-col border-b-2 border-black mb-2">
          <div className="flex flex-row justify-between items-center  text-white">
            <div className="flex flex-row mb-1 ml-2 mt-2">
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                alt=""
                width={25}
              />
              <p className="text-white font-semibold ml-2">ETH</p>
            </div>
            <div>
              <p className="text-sm text-[#ddd] font-semibold">
                Valuation ≈$ 0.00
              </p>
            </div>
          </div>
          <div className="flex flex-row text-sm justify-between text-white p-4 items-center">
            <div className="text-[#ddd] text-xs ml-2">Freeze 0</div>
            <div className="text-[#ddd] text-xs">Availabe 0</div>
          </div>
        </div>
        <div className="flex flex-col border-b-2 border-black mb-2">
          <div className="flex flex-row justify-between items-center  text-white">
            <div className="flex flex-row mb-1 ml-2 mt-2">
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                alt=""
                width={25}
              />
              <p className="text-white font-semibold ml-2">BTC</p>
            </div>
            <div>
              <p className="text-sm text-[#ddd] font-semibold">
                Valuation ≈$ 0.00
              </p>
            </div>
          </div>
          <div className="flex flex-row text-sm justify-between text-white p-4 items-center">
            <div className="text-[#ddd] text-xs ml-2">Freeze 0</div>
            <div className="text-[#ddd] text-xs">Availabe 0</div>
          </div>
        </div>
        <div className="flex flex-col border-b-2 border-black mb-2">
          <div className="flex flex-row justify-between items-center  text-white">
            <div className="flex flex-row mb-1 ml-2 mt-2">
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
                alt=""
                width={25}
              />
              <p className="text-white font-semibold ml-2">USDC</p>
            </div>
            <div>
              <p className="text-sm text-[#ddd] font-semibold">
                Valuation ≈$ 0.00
              </p>
            </div>
          </div>
          <div className="flex flex-row text-sm justify-between text-white p-4 items-center">
            <div className="text-[#ddd] text-xs ml-2">Freeze 0</div>
            <div className="text-[#ddd] text-xs">Availabe 0</div>
          </div>
        </div>

        <div>
          <img
            src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Exchange;
