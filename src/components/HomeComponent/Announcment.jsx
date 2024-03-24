import CampaignIcon from '@mui/icons-material/Campaign';

const Announcment = () => {
  return (
    <div className="flex flex-row text-white ">
        <div>
            <CampaignIcon style={{color:'#e8ce58'}} />
        </div>
        <div className='flex justify-center items-center'>
            <p className='text-xs'>
            Announcement on Bitcoin WithdrawalAnnouncement on Bitcoin ...
            </p>
        </div>
    </div>
  )
}

export default Announcment