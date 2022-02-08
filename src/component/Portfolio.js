import React, { useEffect, useRef, useState } from 'react';
import img1 from '../images/slide1.PNG'
import img2 from '../images/slide2.PNG'
import img3 from '../images/slide3.PNG'
import img4 from '../images/slide4.PNG'
import img5 from '../images/slide5.PNG'
import img6 from '../images/slide6.PNG'
import overlay from '../images/overlay.png'
import hoverEffect from 'hover-effect'
import mail from '../images/cp_mail.svg'
import github from '../images/github.svg'
import linkedin from '../images/contact_linkedin.png'
function Portfolio({timeline, ease}) {


  const [state, setState] = useState(false);
  const handleChange = () => {
    setState(!state);
  }

  let menu_item1 = useRef(null);
  let menu_item2 = useRef(null);
  let menu_item3 = useRef(null);
  let menu_item4 = useRef(null);

  let logo1 = useRef(null);
  let logo2 = useRef(null);

  let project1 = useRef(null);
  let project2 = useRef(null);
  let project3 = useRef(null);
  let project4 = useRef(null);
  let project5 = useRef(null);
  let project6 = useRef(null);
  let projects = useRef(null);

  useEffect(() => {
    timeline.to([logo1, logo2], 1, {
      'clip-path':'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      y:0,
      duration:2.2,
      ease: ease
    });
    timeline.from([menu_item1, menu_item2, menu_item3, menu_item4], .7 ,{
        opacity: 0,
        y: -200,
        stagger: {
            amount: .4
        },
        ease: ease
    })
    timeline.from([projects], 1.5 ,{
      opacity: 0,
              x:"-20"  
              
          })
    timeline.from([project1, project2, project3, project4, project5, project6], 1.5 ,{
      opacity: 0,
              x:"-20"  
              
          })
  }, [])

  useEffect(() => {
    var img_animate1 = new hoverEffect({
    parent: document.querySelector(".item-image1"),
    intensity: .3,
    image1: img1, 
    image2: img1,
    displacementImage: overlay
  })
  var img_animate2 = new hoverEffect({
    parent: document.querySelector(".item-image2"),
    intensity: .3,
    image1: img2, 
    image2: img2,
    displacementImage: overlay
  })
  var img_animate3 = new hoverEffect({
    parent: document.querySelector(".item-image3"),
    intensity: .3,
    image1: img3, 
    image2: img3,
    displacementImage: overlay
  })
  var img_animate4 = new hoverEffect({
    parent: document.querySelector(".item-image4"),
    intensity: .3,
    image1: img4, 
    image2: img4,
    displacementImage: overlay
  })
  var img_animate5 = new hoverEffect({
    parent: document.querySelector(".item-image5"),
    intensity: .3,
    image1: img5, 
    image2: img5,
    displacementImage: overlay
  })
  var img_animate6 = new hoverEffect({
    parent: document.querySelector(".item-image6"),
    intensity: .3,
    image1: img6, 
    image2: img6,
    displacementImage: overlay
  })
  }, [])
 
 
  return <section className='Portfoliopage'>
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
     <a  href="https://www.linkedin.com/in/bharath-kbpr/" target="_blank"><img src={linkedin} alt="" style={{verticalAlign:"middle", width:"40px"}}/></a>
     <a href="https://github.com/Bharath-Kbpr" target="_blank"><img src={github} alt="" style={{verticalAlign:"middle", width:"40px"}}/></a>
     <a href="mailto: iamkbpr@gmail.com" target="_blank"><img src={mail} alt="" style={{verticalAlign:"middle", width:"40px"}}/></a>
     </div>
   </div>
  </div>
  <div className='portfolio__nav'>
   <div className='portfolio__title' >
    <h1 ref = {el => logo1 = el}>my </h1>
    <h1 ref = {el => logo2 = el}>portfolio </h1>
   </div>
   <div className='kbpr__portfolio_menusection'>
  <ul className='kbpr__portfoliomenuitems'>
    <li ref = {el => menu_item1 = el}><a href="/">home</a></li>
    <li ref = {el => menu_item2 = el}><a href="/about">about</a></li>
    <li ref = {el => menu_item3 = el}><a href="/portfolio">portfolio</a></li>
    <li ref = {el => menu_item4 = el}><a href="/Contact">contact</a></li>
  </ul>
  
  <span className='kbpr__projectmenuitemsMobile' onClick={handleChange}>&lt;MENU&#x2215;&gt;</span>
  </div>
  </div>
  <div className='project__collection' ref = {el => projects = el}>
      <div className='item-image1 img-look' ><p ref = {el => project1 = el}>HOSTSTAR CLONE</p></div>
      <div className='item-image2 img-look' ><p ref = {el => project2 = el}>FOOD RECIPE</p></div>
      <div className='item-image3 img-look' ><p ref = {el => project3 = el}>TESLA CLONE</p></div>
      <div className='item-image4 img-look' ><p ref = {el => project4 = el}>AMAZON CLONE</p></div>
      <div className='item-image5 img-look' ><p ref = {el => project5 = el}>CORONA TRACKER</p></div>
      <div className='item-image6 img-look' ><p ref = {el => project6 = el}>ECOMMERCE</p></div>
      
  </div>
  
 
  </section>;
}

export default Portfolio;
