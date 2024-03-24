import { useState } from "react"

const CoinGraph = () => {
    const [data, setData] = useState(null)
    const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade")
    ws.onmessage = (event) =>{
        setData(JSON.parse(event.data))
    
    }

  return (
    <div className="flex flex-row bg-slate-900" style={{padding:'1.07143rem 1.07143rem .71429rem'}}>
        <div className="flex flex-col mr-3">
            <div className="flex flex-row text-xs text-white">
                <div>BTC/USDT</div>
                <div className="ml-1 bg-lime-600">+2.52 %</div>
            </div>
            <div>
                price
            </div>
        </div>
        <div className="flex flex-col  text-xs text-white mr-3">
            <div className="flex flex-row">
                <p>ETH/USDT</p>
                <p className="ml-1 bg-lime-600">+2.52 %</p>
            </div>
        </div>
        <div className="flex flex-col  text-xs text-white mr-3">
            <div className="flex flex-row">
                <p>TRX/USDT</p>
                <p className="ml-1 bg-lime-600">+2.52 %</p>
            </div>
        </div>
    </div>
  )
}

export default CoinGraph