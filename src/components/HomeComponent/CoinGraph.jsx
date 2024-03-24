import { useState } from "react"

const CoinGraph = () => {
    const [btcData, setBtcData] = useState(null)
    const [ethData, setEthData] = useState(null)
    const [xrpData, setXrpData] = useState(null)
    const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade")
    ws.onmessage = (event) =>{
        setBtcData(JSON.parse(event.data))
    }
    const ws1 = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@trade")
    ws1.onmessage = (event) =>{
        setEthData(JSON.parse(event.data))
    }
    const ws2 = new WebSocket("wss://stream.binance.com:9443/ws/xrpusdt@trade")
    ws2.onmessage = (event) =>{
        setXrpData(JSON.parse(event.data))
    }

  return (
    <div className="flex flex-row bg-[#0F1720]" style={{padding:'1.07143rem 1.07143rem .71429rem'}}>
        <div className="flex flex-col ">
            <div className="flex flex-row text-xs text-white">
                <div>BTC/USDT</div>
                <div className="ml-1 bg-lime-600">+2.52 %</div>
            </div>
            <div className="text-emerald-500 text-center">
                {btcData ? parseFloat(btcData.p).toFixed(2) : '--'}
            </div>
            <div className="ml-1">
                <img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg" alt=""  className=""/>
            </div>
        </div>
        <div className="flex flex-col  text-xs text-white ">
            <div className="flex flex-row">
                <p>ETH/USDT</p>
                <p className="ml-1 bg-lime-600">+2.52 %</p>
            </div>
            <div className=" text-emerald-500  text-center text-lg">
            {ethData ? parseFloat(ethData.p).toFixed(2) : '--'}
            </div>
            <div className="ml-1">
                <img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg" alt="" />
            </div>
        </div>
        <div className="flex flex-col  text-xs text-white ">
            <div className="flex flex-row">
                <p>TRX/USDT</p>
                <p className="ml-1 bg-lime-600">+2.52 %</p>
            </div>
            <div>
            <div className=" text-emerald-500 text-center text-lg">
            {xrpData ? parseFloat(xrpData.p).toFixed(2) : '--'}
            </div>
            <div className="ml-1">
                <img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg" alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default CoinGraph