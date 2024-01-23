import React from 'react'
import './Dashboard.scss'
import Photo from '../../Assets/profile photo.jpeg'
import Flag from '../../Assets/flag.png'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import PendingIcon from '@mui/icons-material/Pending';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WifiIcon from '@mui/icons-material/Wifi';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HomeIcon from '@mui/icons-material/Home';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Link } from 'react-router-dom';




const Dashboard = () => {
  return (

    <div className='dashboard_wrapper'>
 <div className="dashboard_container">
<div className="dashboard">

  {/* Dashboard Header starts */}
    <div className="d_header">
        <div className="left">
            <div className='profileimage' >  
            <img src={Photo} alt=""  height={40} width={40}/>
            </div>
          
            <div className="text">
            <h3>Hi Jonathan</h3>
            </div>
         
        
        </div>

        <div className="right"><ChatOutlinedIcon/></div>
    </div>

  {/* Dashboard Header ends */}

{/* d_options starts */}

<div className="d_options">
        <div className="rectangle">
          <Link to="/Transfer">Loan</Link>
        </div>
        <div className="rectangle">
          <Link to="/Unavailable">Save</Link>
        </div>
        <div className="rectangle">
          <Link to="/Transfer">Withdraw</Link>
        </div>
        <div className="rectangle">
          <Link to="/Transfer">Invest</Link>
        </div>
</div>

 {/* d_options ends */} 



 {/* d_currency starts */}

<div className="d_curency">
  <div className="currency">
   <div className='flag'><img src={Flag} alt="flag"  height={20}/> </div>
    <span>American Dollar</span>
  </div>
</div>

 {/* d_currency ends */}

 {/* d_money starts */}

 <div className="d_money">
  <div className="money">
    <div className='moneyfigure'> $6,340,000.00</div>
    <div className='menu'><PendingIcon className='pend' /></div>
  </div>
 </div>

  {/* d_money end */}


{/* timeupdate */}
  <div className="timeupdate">
    <div className="time">
      Last Updated some seconds ago ...
    </div>

  </div>
{/* timeupdate */}


{/* transactions */}

<div className="transaction_wrapper">
  <div className="transaction_container">
    <div className="transaction">

      <div className="box">
        <div><ArrowCircleUpIcon className='icons'/></div>
        <div className="rectangle">
          <Link to="/Transfer">Take Loan</Link>
        </div>
      </div>
      <div className="box">
        <div><AddCircleOutlineOutlinedIcon className='icons'/></div>
        <div className="rectangle">
          <Link to="/Unavailable">Invest</Link>
        </div>
      </div>
      
    </div>
  </div>
</div>

{/* transactions */}


{/* quick access */}

<div className="Quickaccess_wrapper">
  <div className="Quickacess_container">
    <div className="Quickaccess">
      <div className="box">
        <div><LocalPhoneIcon className='icons airtime'/></div>
        <div className='texts'>Airtime</div>
      </div>
      <div className="box">
        <div><WifiIcon className='icons internet'/></div>
        <div className='texts'>Internet</div>
      </div>
      <div className="box">
        <div><LiveTvIcon className='icons Tv'/></div>
        <div className='texts'>Television</div>
      </div>
      <div className="box">
        <div><EmojiObjectsIcon className='icons Electricity'/></div>
        <div className='texts'>Electricity</div>
      </div>
     
    
    </div>
  </div>
</div>

{/* quick access */}


<div className="time_container">
  <div className="time">
    16 jan 2024
  </div>

</div>


<div className="menu_wrapper">

  <div className="menu_container">
    <div className="menu">
      <div className="box">
        <div><HomeIcon/></div>
        <span> <Link to="/Dashboard">Home</Link></span>
      </div>
      <div className="box">
        <div><SendOutlinedIcon/></div>
        <span> <Link to="/Transfer">Send</Link></span>
      </div>
      <div className="box">
        <div><ReceiptOutlinedIcon/></div>
        <span> <Link to="/Transfer">Pay</Link></span>
      </div>
      <div className="box">
        <div><CreditCardOutlinedIcon/></div>
        <span> <Link to="/Unavailable">Cards</Link></span>
      </div>
      <div className="box">
        <div><MenuSharpIcon/></div>
        <span>  <Link to="/Unavailable">More</Link></span>
      </div>
    </div>
  </div>
  
  </div>{

}

</div>
 </div>
    </div>
  )
}

export default Dashboard
