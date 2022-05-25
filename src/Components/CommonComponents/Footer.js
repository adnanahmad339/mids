import React, { Component } from 'react';

import playStore from "./Images/playStore.png";
import appStore from "./Images/appStore.png" 

import './Footer.css'


const Footer=() => {
return(

    <footer id='footer'>
<div className='leftFooter'>
<h4>Download Our App</h4>
<p>Download App for Android and IOS mobile phone</p>
<img src={playStore} alt="playstore"/>
<img src={appStore} alt="appstore"/>
</div>

<div className='midFooter'>

<h1>Comsats University Islamabad</h1>
<p>High quality is our first priority</p>

<p>Copyrights 2021 &copy; Adnan Ahmad</p>

</div>


<div className='rightFooter'> 
<h4>Follow Us</h4>
        <a href="">Instagram</a>
        <a href="">Youtube</a>
        <a href="">Facebook</a>
</div>



    </footer>






);



};


export default Footer;