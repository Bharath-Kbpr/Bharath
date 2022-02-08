import React, { useEffect, useRef, useState } from 'react';
import mail from '../images/cp_mail.svg'
import github from '../images/github.svg'
import linkedin from '../images/contact_linkedin.png'
function Contact({timeline, ease}) {

   const [state, setState] = useState(false);
   const handleChange = () => {
     setState(!state);
   }
   let menu_item1 = useRef(null);
  let menu_item2 = useRef(null);
  let menu_item3 = useRef(null);
  let menu_item4 = useRef(null);


  let logo = useRef(null);
  let Menu = useRef(null);


  let contactm = useRef(null);


  let socialc1 = useRef(null);
  let socialc2 = useRef(null);
  let socialc3 = useRef(null);


  useEffect(() => {
   timeline.from([logo, Menu], .5 ,{
      y:20,
      opacity: 0,
      stagger: {
          amount: .4
      },
      ease: ease
           
  })
   timeline.from([menu_item1, menu_item2, menu_item3, menu_item4], .7 ,{
      opacity: 0,
      x: -20,
      stagger: {
          amount: .4
      },
      ease: ease
  })
  timeline.to([contactm], .7 ,{
  'clip-path':'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
  opacity: 1,
  y:0,
  duration:2.2
})
timeline.from([socialc1, socialc2, socialc3], .7 ,{
   opacity: 0,
   y: 100,
   stagger: {
      amount: .4
  },
   ease: ease
})
}, [])

  return <div>
  <div className="menu_screen" style={{display: state ? "block":"none"}}>
   
     <div className='mobile_title'><h1>KBPR</h1><h1 className='close' onClick={handleChange}>&lt;CLOSE&#x2215;&gt;</h1></div>
  
   <ul>
     <li><a href="/">&lt;HOME&#x2215;&gt;</a></li>
     <li><a href="/about">&lt;ABOUT ME&#x2215;&gt;</a></li>
     <li><a href="/portfolio">&lt;PORTFOLIO&#x2215;&gt;</a></li>
     <li><a href="/contact">&lt;CONTACT ME&#x2215;&gt;</a></li>
   </ul>
   <div>
     <p className='mobile_links_title'>Social Links</p>
     <div className='social_mobile_links'>
     <a><img src={linkedin} alt="" style={{verticalAlign:"middle", width:"40px"}}/></a>
     <a><img src={github} alt="" style={{verticalAlign:"middle", width:"40px"}}/></a>
     <a><img src={mail} alt="" style={{verticalAlign:"middle", width:"40px"}}/></a>
     </div>
   </div>
  </div>
  <div className="ContactT">
     <div className='contact_logo' ref = {el => logo = el}>
     <h1><a href="/">kbpr</a></h1>
     </div>
     <div>
      <ul className='contact_ul'>
         <li ref = {el => menu_item1 = el}><a href="/">home</a></li>
         <li ref = {el => menu_item2 = el}><a href="/about">about</a></li>
         <li ref = {el => menu_item3 = el}><a href="/portfolio">portfolio</a></li>
         <li ref = {el => menu_item4 = el}><a href="/Contact">contact</a></li>
      </ul>
      <span className='kbpr__ContactmenuitemsMobile' ref = {el => Menu = el} onClick={handleChange}>&lt;MENU&#x2215;&gt;</span>
     </div>
  </div>
  <div className='m' ref = {el => contactm = el}>
  <h1>&lt;Contact&#x2215;&gt;</h1>
  </div>
  <div className='Contact_social' >
  <a href="https://www.linkedin.com/in/bharath-kbpr/" target="_blank"> <h3 ref = {el => socialc1 = el}><img src={linkedin} alt="" style={{verticalAlign:"middle", width:"50px"}}/> Linkedin</h3></a>
  <a href="https://github.com/Bharath-Kbpr" target="_blank"><h3 ref = {el => socialc2 = el}><img src={github} alt="" style={{verticalAlign:"middle", width:"50px"}}/> GitHub</h3></a>
  <a href="mailto: iamkbpr@gmail.com" target="_blank"> <h3 ref = {el => socialc3 = el}><img src={mail} alt="" style={{verticalAlign:"middle"}}/> Mail</h3></a>
   
    
   
  </div>
  </div>;
}

export default Contact;
