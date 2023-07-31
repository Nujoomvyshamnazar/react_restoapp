import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link }   from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import { Button } from "@mui/material";

export default function Navbar() {

 const [ openLinks, setOpenLinks ] = useState(false);

 const toggleNavbar = () =>{
 setOpenLinks(!openLinks)
 }
  return (
<div className="navbar">
<div className="leftSide" id={openLinks ? "open" : "close"}>
<img src={logo} alt="description of image"  />
<div className="hiddenLinks">
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/menu">Menu</Link>
<Link to="/contact">contact</Link>
</div>
</div>
<div className="rightSide">
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/menu">Menu</Link>
<Link to="/contact">contact</Link>
<Button onClick={toggleNavbar}>
<ReorderIcon/>
</Button>
</div>
</div>
  )
}
