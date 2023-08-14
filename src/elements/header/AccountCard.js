import React,{useEffect, useState} from 'react'
import SubCard from './SubCard'

const AccountCard = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  
  return (
    <div>
        <div className="d-flex show">
            <h5 style={{marginTop:'20px'}}>Saikat Mohanty</h5>
            <a href="#" data-toggle="dropdown" title="drlantern@gotbootstrap.com" onClick={handleClick} className="header-icon d-flex align-items-center justify-content-center ml-2" aria-expanded={show}>
                <img src="../../assets/img/pro.png" className="profile-image rounded-circle" alt="Hello World" />
            </a>
            {show?(
                <SubCard/>
            ):''}
        </div>
    </div>
  )
}

export default AccountCard