import PersonPinIcon from '@mui/icons-material/PersonPin';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between p-2 bg-slate-900'>
        <div>
            <PersonPinIcon style={{fontSize:'35', color:'#e8ce58'}}/>
        </div>
        <div>
            <SupportAgentIcon style={{fontSize:'35', color:'#e8ce58'}}/>
        </div>
    </div>
  )
}

export default Navbar