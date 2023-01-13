import React from 'react'
import Logo from "../images/logo.png"
import {Link} from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder'
import "../styles/Navbar.css"

export default function Navbar() {

  const [openLinks, setOpenLinks] = React.useState(false)

  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  }
  

  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
              <Link to="/">
            <img src={Logo} alt="logo neki"/>
              </Link>
            <div className="hiddenLinks">
              <Link to="/">Pocetna</Link>
              <Link to="/onama">O nama</Link>
              <Link to="/kontakt">Kontakt</Link>
            </div>
        </div>
        <div className="rightSide">
            <Link to="/">Pocetna</Link>
            <Link to="/onama">O nama</Link>
            <Link to="/kontakt">Kontakt</Link>
         <button onClick={toggleNavbar}>
               <ReorderIcon />
         </button>
        </div>
    </div>
    
  )
}