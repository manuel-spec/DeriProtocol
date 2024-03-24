
const CoinGraph = () => {
  return (
    <div className="flex flex-row bg-slate-900" style={{padding:'1.07143rem 1.07143rem .71429rem'}}>
        <div className="flex flex-col">
            <div className="flex flex-row text-xs text-white">
                <div>BTC/USDT</div>
                <div className="p-1 text-green">+2.52 %</div>
            </div>
        </div>
        <div className="flex flex-col  text-xs text-white">
            <div className="flex flex-row">
                <p>ETH/USDT</p>
                <p className="p-1 text-green">+2.52 %</p>
            </div>
        </div>
        <div className="flex flex-col  text-xs text-white">
            <div className="flex flex-row">
                <p>TRX/USDT</p>
                <p className="p-1 text-white">+2.52 %</p>
            </div>
        </div>
    </div>
  )
}

export default CoinGraph