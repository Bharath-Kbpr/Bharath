import React, { useEffect, useRef } from 'react';

function Navbarscroll({timeline, ease, easeio}) {
    let oneside = useRef(null)
let twoside= useRef(null)
let threeeside = useRef(null)

useEffect(() => {
    
      timeline.to([oneside], .5 ,{
       delay:.2,
       top:"300%",
        ease: easeio
    })
    timeline.to([twoside], .5 ,{
      delay:.3,
      top:"200%",
       ease: easeio
   })
   timeline.to([threeeside], .5 ,{
    delay:.4,
    top:"100%",
     ease: easeio
 })
})
  return <div>
    <div className='bg1' ref={el => oneside = el}></div>
    <div className='bg2' ref={el => twoside = el}></div>
    <div className='bg3' ref={el => threeeside = el}></div>
  </div>;
}

export default Navbarscroll;
