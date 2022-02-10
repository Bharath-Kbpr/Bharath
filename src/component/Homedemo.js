import React, { useEffect, useRef, useState } from 'react';
import mail from '../images/cp_mail.svg'
import github from '../images/github.svg'
import linkedin from '../images/contact_linkedin.png'
import fire from '../images/fire.PNG'
import Redness from '../images/red.PNG'
import overlay from '../images/dis_2.jpg'
import hoverEffect from 'hover-effect'

function Homedemo({timeline, ease, easeio}) {
  const [state, setState] = useState(false);
  const handleChange = () => {
    setState(!state);
  }
   
  
// let onesidep = useRef(null)
// let twosidep = useRef(null)
// let threeesidep = useRef(null)
// let signaturep = useRef(null)

let h1p = useRef(null)
let h2p = useRef(null)

let fireimg = useRef(null)

let logop = useRef(null);
let menu_item1p = useRef(null);
let menu_item2p = useRef(null);
let menu_item3p = useRef(null);
let menu_item4p = useRef(null);


let containerintro = useRef(null);

let introbharath = useRef(null);

    useEffect(() => {
    //   timeline.to([signaturep], .5 ,{
    //     delay:4,
    //      ease: easeio
    //  })
    //   timeline.to([onesidep, twosidep, threeesidep], .5 ,{
    //    delay:.1,
    //    left:"-100%",
    //     ease: easeio,
    //     stagger: {
    //     amount: .4
    // },
    // })
    timeline.to([introbharath],.6 ,{
      delay:4,
        scale:10,
        ease:easeio
    })
    timeline.to([containerintro],.5 ,{
        
        left:"-100%",
        ease:easeio
    })
 timeline.from(logop, .8, {
        
  opacity: 0,
  x: -20,
  ease: easeio
});
timeline.from([menu_item1p, menu_item2p, menu_item3p, menu_item4p], .7 ,{
  
    opacity: 0,
    x: -20,
    stagger: {
        amount: .4
    },
    ease: easeio
})
timeline.from([h1p], .7 ,{
  opacity: 0,
  x:-20,
  ease: easeio
  
},"-=1.3")
timeline.from([h2p], 1 ,{
  opacity: 0,
  x:-40,
  ease: easeio
  
},"-=1.3")
timeline.from([fireimg], .8, {
  opacity: 0,
  x: '100'
});
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
     <a  href="https://www.linkedin.com/in/bharath-kbpr/" target="_blank"><img src={linkedin} alt="" style={{verticalAlign:"middle", width:"40px"}}/></a>
     <a href="https://github.com/Bharath-Kbpr" target="_blank"><img src={github} alt="" style={{verticalAlign:"middle", width:"40px"}}/></a>
     <a href="mailto: iamkbpr@gmail.com" target="_blank"><img src={mail} alt="" style={{verticalAlign:"middle", width:"40px"}}/></a>
     </div>
   </div>
  </div>
   <section>
   <div className='container' ref ={el => containerintro = el}>
    
    <div className="text_wrapper">
           <div className="text-1 text">Bharath  kbpr</div>
           <div className="text-2 text">Bharath  kbpr</div>
           <div className="text-3 text">Bharath  kbpr</div>
           <div className="text-4 text">Bharath  kbpr</div>
           <div className="text-5 text">Bharath  kbpr</div>
           <div className="text-6 text" ref ={el => introbharath = el}>Bharath  kbpr</div>
           <div className="text-7 text">Bharath  kbpr</div>
           <div className="text-8 text">Bharath  kbpr</div>
           <div className="text-9 text">Bharath  kbpr</div>
           <div className="text-10 text">Bharath  kbpr</div>
           <div className="text-11 text">Bharath  kbpr</div>
        </div>
    
      
    </div>

     <div className='p_navbar'>
        <div className='p_logo' ref = {el => logop = el}>
          <div className="p_logobg">
            <h1 className='p_logoname'>kbpr</h1>
            <p>Since 1999</p>
          </div>
        </div>
        <div className='p_menusection'>
          <ul className='p_menuitems'>
            <li ref = {el => menu_item1p = el}><a href="#">HOME</a></li>
            <li ref = {el => menu_item2p = el}><a href="/about">ABOUT</a></li>
            <li ref = {el => menu_item3p = el}><a href="/portfolio">PORTFOLIO</a></li>
            <li ref = {el => menu_item4p = el}><a href="/Contact">CONTACT</a></li>
          </ul>
          <span className='p__menuitemsMobile' onClick={handleChange}>&lt;MENU&#x2215;&gt;</span>
        </div>
     </div>
     <div className='p_intro'>
       <div className='p_intro__section'>
          <div className='p_intro__section_headings' ref={el => h1p = el}>
              <h1>Hello.</h1>
              <h1>I am Bharath</h1>
              <div className='p_arrow'  ref={el => h2p = el}>
              <svg width="207" height="205" viewBox="0 0 207 205" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M28.0506 2.62112L4 26.2236L140.709 160.385H4V202H204V2.62112H165.392V136.783L28.0506 2" stroke="white" stroke-width="5"/>
             </svg>
           <div>
           <h1>DEVELOPER</h1>
           <h1>UX/UI DESIGNER</h1>
           </div>
              </div>
          </div>
          <div className='p_intro__section__socialicons'>
                 
          </div>
       </div>
       <div className='p_intro__sectionpic' ref={el => fireimg = el}>
          <div className="item-image0">
          <img src={fire} alt="" />
          </div>
       </div>
     </div>
   </section>
  </div>;
}

export default Homedemo;
