import React, { useEffect, useRef } from 'react';
import one from '../images/1.PNG'
import two from '../images/2.PNG'
import three from '../images/3.PNG'
import four from '../images/4.PNG'
import five from '../images/5.PNG'
import six from '../images/6.PNG'
import seven from '../images/7.PNG'
import eight from '../images/8.PNG'
import nine from '../images/9.PNG'
import elv from '../images/11.PNG'
import x from '../images/xs.png'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import mail from '../images/mail.svg'
import Redness from '../images/red.PNG'
import fire from '../images/fire.PNG'
import overlay from '../images/dis_2.jpg'
import hoverEffect from 'hover-effect'
// import Navbar from './Navbar'
import { init } from 'ityped'

function Homepage({timeline, ease, easeio}) {
  useEffect(() => {
    var img_animate1 = new hoverEffect({
    parent: document.querySelector(".item-image11"),
    intensity: 3,
    image1: Redness, 
    image2: fire,
    displacementImage: overlay,
    imageRatio: 380 / 300
  })
  
 
  }, [])
  let logo = useRef(null);
    let menu_item1 = useRef(null);
    let menu_item2 = useRef(null);
    let menu_item3 = useRef(null);
    let menu_item4 = useRef(null);
    
let h1 = useRef(null)
let h2 = useRef(null)


let icon1 = useRef(null)
let icon2 = useRef(null)
let icon3 = useRef(null)
let fireimg = useRef(null)


let oneside = useRef(null)
let twoside= useRef(null)
let threeeside = useRef(null)
let signature = useRef(null)

    useEffect(() => {
      timeline.to([signature], .5 ,{
        delay:4,
         ease: easeio
     })
      timeline.to([oneside], .5 ,{
       delay:.2,
       left:"-100%",
        ease: easeio
    })
    timeline.to([twoside], .5 ,{
      delay:.3,
      left:"-100%",
       ease: easeio
   })
   timeline.to([threeeside], .5 ,{
    delay:.4,
    left:"-100%",
     ease: easeio
 })
        timeline.from(logo, .8, {
        
          opacity: 0,
          x: -20,
          ease: easeio
        });
        timeline.from([menu_item1, menu_item2, menu_item3, menu_item4], .7 ,{
          
            opacity: 0,
            x: -20,
            stagger: {
                amount: .4
            },
            ease: easeio
        })
        // timeline.from([h2, h1], .7 ,{
        //     opacity: 0,
        //     x:-20,
        //     ease: easeio
            
        // },"-=1.3")
        // timeline.from([icon1, icon2, icon3], .1 ,{
        //     opacity: 0,
        //     x: '100',
        //     stagger: {
        //         amount: .4
        //     },
            
            
        // })
        timeline.from([fireimg], .8, {
          opacity: 0,
          x: '100'
      });
       
       
    })
 










// let strip1 = useRef(null)
// let strip2 = useRef(null)
// useEffect(()=> {
//   timeline.from([strip1], 1 ,{
//             y: '400',
//             opacity: 0,
//             stagger: {
//                 amount: .4
//             },
// <svg width="207" height="205" viewBox="0 0 207 205" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M28.0506 2.62112L4 26.2236L140.709 160.385H4V202H204V2.62112H165.392V136.783L28.0506 2" stroke="white" stroke-width="5"/>
// </svg>
// <div className='kbpr__introsection'>
//     <div className="kbpr__introsection_holder">
      
//     <h2 className='kbpr__introsection-h2' ref={el =>h2=el}>Hello.</h2>
//     <h1 className='kbpr__introsection-h1' ref={el =>h1=el}>I am Bharath</h1>
//       <div className='kbpr_inro'>
//       <svg width="207" height="205" viewBox="0 0 207 205" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M28.0506 2.62112L4 26.2236L140.709 160.385H4V202H204V2.62112H165.392V136.783L28.0506 2" stroke="white" stroke-width="5"/>
// </svg>
//    <div>
//    <h1>DEVELOPER</h1>
// <h1>UX/UI DESIGNER</h1>
//    </div>
//       </div>
//     </div>
    //  <div className='kbpr__socialicons'> 
      //  <div className='linkedin' ref={el => icon1 = el}>
      //  <a href="https://www.linkedin.com/in/bharath-kbpr/" target="_blank"> <img  src={linkedin} alt="" /></a>
      //  </div>
      //  <div className='github' ref={el => icon2 = el}>
      //  <a href="https://github.com/Bharath-Kbpr" target="_blank"> <img  src={github} alt="" /></a>
      
      //  </div>
      //  <div className='mail' ref={el => icon3 = el}>
      //  <a href="mailto: iamkbpr@gmail.com" target="_blank"><img src={mail} alt="" /></a>
       
      //  </div>
     
     
     
    //  </div>
     
//    </div>
            
//         })
//         timeline.from([ strip2], .5 ,{
//             y: '-400',
//             opacity: 0,
//             stagger: {
//                 amount: .4
//             },  
//         })
  
// })



  // const textRef = useRef();
  // useEffect(()=>{
  //   init(textRef.current,{
  //       showCursor: false,
  //       strings: ["Developer","Designer"]
  //   });
  // },[]);
  // const boxRef = useRef();

  // wait until DOM has been rendered
  // useEffect(() => {
  //   gsap.to(boxRef.current, { rotation: "+=360" });
  // });
  return <>
  <section>
  
  <div class="overlay first" ref={el => oneside = el}></div>
  <div class="overlay second" ref={el => twoside = el}>
  <div className='signature'  ref={el => signature = el}>
  <svg width="1208" height="830" viewBox="0 0 1208 830" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M477.484 240.185C452.65 174.685 360.883 67.6846 192.483 163.685C24.0834 259.685 -9.01652 541.185 24.9835 629.685C35.4835 746.518 177.184 884.885 321.984 777.685L380.984 708.685L416.484 651.685C447.984 605.685 490.783 475.085 463.983 454.685C460.65 421.185 430.383 359.685 335.983 381.685C241.583 403.685 170.817 495.518 164.984 533.685C153.65 565.018 154.483 642.085 192.483 651.685C230.483 661.285 303.983 632.018 335.983 616.185C367.484 580.685 380.984 551.285 380.984 533.685C380.984 516.085 385.484 489.255 380.984 481.422L373.733 561.185C453.057 572.685 453.057 572.685 546.484 533.685L866.984 419.185L884.984 362.185L900.484 303.185L914.484 201.185V116.185C914.317 101.851 904.584 79.4846 866.984 104.685C829.384 129.885 873.65 517.851 900.484 708.685C886.817 724.518 858.684 740.785 855.484 679.185C852.284 617.585 854.15 531.518 855.484 496.185L884.984 201.185C893.484 105.518 934.884 -58.7154 1032.48 49.6846C1130.08 158.085 935.484 496.185 825.984 651.685C772.984 713.439 718.084 801.395 922.484 659.185C1126.88 516.975 1192.65 470.264 1199.98 464.685" stroke="black" stroke-width="26"/>
</svg>
</div>
  </div>
  <div class="overlay third" ref={el => threeeside = el}></div>
 
  <nav>
  <div className='logo' ref={el => logo = el}>
    <div className='kbpr__logobg'>
    <h1 className='kbpr__logoname'>kbpr</h1>
    <p>Since 1999</p>
    </div>
  </div>
  <div className='kbpr__menusection'>
  <ul className='kbpr__menuitems'>
    <li ref = {el => menu_item1 = el}><a href="#">home</a></li>
    <li ref = {el => menu_item2 = el}><a href="/about">about</a></li>
    <li ref = {el => menu_item3 = el}><a href="/portfolio">portfolio</a></li>
    <li ref = {el => menu_item4 = el}><a href="/Contact">contact</a></li>
  </ul>
  <span className='kbpr__menuitemsMobile'>&lt;MENU&#x2215;&gt;</span>
  </div>
  </nav>
  <div className='kbpr__intro'>
  
     
  
   <div className='kbpr__imgcontainer ' ref ={el => fireimg = el}>
      <div className='item-image11'>
      </div> 
   </div>
  </div>
    
  </section>
  </>;
}

export default Homepage;
