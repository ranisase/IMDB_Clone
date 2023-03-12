import React from "react";
import {Box} from "./FooterStyles";
import { FaTiktok } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import{BsTwitter} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {AiFillFacebook} from 'react-icons/ai';
import {SiAmazon} from 'react-icons/si';
import {AiFillCopyrightCircle} from 'react-icons/ai';
import "./Footer.css";

const Footer = () => {
return (
	<Box>
     <h1 style={{textAlign:"center",  padding: "10px"}} > 
     <span ><FaTiktok /></span>
     <span ><AiFillInstagram/></span>
     <span ><BsTwitter/></span>
     <span ><BsYoutube/></span>
     <span > <AiFillFacebook/></span>
      </h1>

      <h3 style={{textAlign:"center",  padding: "10px"}} > 
     <span >Get the IMDb App</span>
     <span >Help</span>
     <span >Site Index</span>
     <span > Box Office Mojo</span>
     <span > IMDb Developer</span>

      </h3>

      <h3 style={{textAlign:"center",  padding: "10px"}} > 
     <span >Press Room</span>
     <span >Advertising</span>
     <span >Jobs</span>
     <span > Condition of Use</span>
     <span > Privacy Policy</span>
     <span > Your Ads Privacy Choices</span>
     </h3>

     <h3 style={{textAlign:"center",  padding: "10px"}} > 
     <span >an <SiAmazon/> company</span>
     </h3>

     <h3 style={{textAlign:"center",  padding: "10px", fontSize:"12px", fontWeight:"lighter"}} > 
     <span ><AiFillCopyrightCircle/>1990-2023 by IMDb.com,inc.</span>
     </h3>

      
      
	</Box>
);
};
export default Footer;
