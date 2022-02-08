import React, { useEffect, useRef, useState } from 'react';
import resume from '../images/Resume.pdf'
import mail from '../images/cp_mail.svg'
import github from '../images/github.svg'
import linkedin from '../images/contact_linkedin.png'

function Aboutpage({timeline, ease}) {

  const [state, setState] = useState(false);
  const handleChange = () => {
    setState(!state);
  }

  let blackbg = useRef(null);
  let logo = useRef(null);
  let profile = useRef(null);
  let storyProfile = useRef(null);
  let menu_item1 = useRef(null);
    let menu_item2 = useRef(null);
    let menu_item3 = useRef(null);
    let menu_item4 = useRef(null);
    let mobilemenu_item = useRef(null);

  useEffect(()=> {
  timeline.from([blackbg], 1 ,{
            opacity: 0,
            x: '-400'      
        })
        timeline.from([logo], .5 ,{
            y:20,
            opacity: 0,
            
                 
        })
        timeline.from([profile], 1.5 ,{
    width: "0%",
            x:"-20"  
            
        })
        timeline.from([menu_item1, menu_item2, menu_item3, menu_item4,mobilemenu_item], .5 ,{
            opacity: 0,
            y: -200,
            stagger: {
                amount: .4
            },
            ease: ease
        })
        timeline.from([storyProfile], 1 ,{
    opacity: "0",
            y:"20"  
            
        })
        
       
       
}, [])







  return <section className='aboutpage'>
  <div className="menu_screen" style={{display: state ? "block":"none"}}>
   
     <div className='mobile_title'><h1>KBPR</h1> <h1 className='close' onClick={handleChange}>&lt;CLOSE&#x2215;&gt;</h1></div>
  
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
   <div className='about_container'>
     <div className='leftcontainer' ref={el => blackbg = el}>
     <h1 ref={el => logo = el}><a href="/">kbpr</a></h1>
     </div>
     <div className="rightcontainer">
     <div>
     <ul  className='kbpr__menuitems kbpr__menuitems-about'>
       <li ref = {el => menu_item1 = el}><a href="/">home</a></li>
       <li ref = {el => menu_item2 = el}><a href="#">about</a></li>
       <li ref = {el => menu_item3 = el}><a href="/portfolio">portfolio</a></li>
       <li ref = {el => menu_item4 = el}><a href="/Contact">contact</a></li>
     </ul>
     <span className='kbpr__menuitemsMobile-about' ref = {el => mobilemenu_item = el} onClick={handleChange}>&lt;MENU&#x2215;&gt;</span>
     </div>
       <div className="about_story" ref={el => storyProfile = el}>
       <h1>My Story</h1>
         <p>
“Hello this is Bharath. I wrote my first program in my 9th Grade 
ever since then I was marvelling what wonders we can do with programming and all that led me to take <span style={{color:"#E0171F"}}>Computer Science</span>. I belive programming as power to create anything out of nothing, Out of intrest got hand on Web, Python, Selenium,OpenCV and i’m still exploring. Now besides programming, I’m a Software Engineer by profession. I love website development and contributing 
to open source projects and writting high-level tools in python. ”</p>
<span className='resume' ><a href={resume} target="_blank" rel='noopener noreferrer'>Resume</a></span>
       </div>
       
     </div>
   </div>
  
  <div className='center_container' ref={el => profile = el}>
  
  </div>
  </section>;
}

export default Aboutpage;
