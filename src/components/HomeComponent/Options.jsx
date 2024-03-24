import depositIcons from '../../assets/icons/deposit.png'
import sendIcons from '../../assets/icons/send.png'
import spotIcon from '../../assets/icons/spot.png'
import transferIcon from '../../assets/icons/transfer.png'
import tradingIcon from '../../assets/icons/trading.png'
import helpIcon from '../../assets/icons/helpcenter.png'
import miningIcon from '../../assets/icons/mining.png'
import perpetualIcon from '../../assets/icons/perpetual.png'

const Options = () => {
  return (
    <div className='bg-[#0F1720] mt-2 flex flex-col justify-center items-center'>
        <div className='flex flex-row'>
            <div className='p-3 text-white text-xs text-center flex flex-col mr-3 justify-center items-center'> 
                <div>
                <img src={depositIcons} alt="" width={25}/>
                </div>
               <div>
               <p>Deposit</p>
               </div>
            </div>
            <div className='p-3 text-white text-xs text-center flex flex-col mr-3 justify-center items-center'> 
                <div>
                <img src={sendIcons} alt="" width={25}/>
                </div>
               <div>
               <p>Withdrawal</p>
               </div>
            </div>
            <div className='p-3 text-white text-xs text-center flex flex-col mr-3 justify-center items-center'> 
                <div>
                <img src={spotIcon} alt="" width={25}/>
                </div>
               <div>
               <p>Spot</p>
               </div>
            </div>
            <div className='p-3 text-white text-xs text-center flex flex-col mr-3 justify-center items-center'> 
                <div>
                <img src={transferIcon} alt="" width={25}/>
                </div>
               <div>
               <p>Transfer</p>
               </div>
            </div>
        </div>
        <div className='flex flex-row'>
        <div className='p-3 text-white text-xs text-center flex flex-col mr-3 justify-center items-center ml-4'> 
                <div>
                <img src={tradingIcon} alt="" width={25}/>
                </div>
               <div>
               <p>Trading</p>
               </div>
            </div>
            <div className='p-3 text-white text-xs text-center flex flex-col mr-3 justify-center items-center'> 
                <div>
                <img src={helpIcon} alt="" width={25}/>
                </div>
               <div>
               <p>Help Center</p>
               </div>
            </div>
            <div className='p-3 text-white text-xs text-center flex flex-col mr-3 justify-center items-center'> 
                <div>
                <img src={miningIcon} alt="" width={25}/>
                </div>
               <div>
               <p>Mining</p>
               </div>
            </div>
            <div className='p-3 text-white text-xs text-center flex flex-col mr-3 justify-center items-center'> 
                <div>
                <img src={perpetualIcon} alt="" width={25}/>
                </div>
               <div>
               <p>Perpetual</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Options