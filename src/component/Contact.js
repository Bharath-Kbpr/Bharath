import React, { useEffect, useRef, useState } from 'react';
import mail from '../images/cp_mail.svg'
import github from '../images/github.svg'
import linkedin from '../images/contact_linkedin.png'
import soccer from '../images/soccer.svg'
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
  <div className='computer'>
  <svg
  width="1126"
  height="550"
  viewBox="0 0 1126 670"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="Soccer">
    
    <g id="RightHand">
      <path
        id="Vector_2"
        d="M372.293 236.586C372.293 236.586 321.661 220.83 329.434 246.753C337.206 272.675 379.853 259.581 379.853 259.581L372.293 236.586Z"
        fill="#FFB8B8"
      />
      <path
        id="Vector_3"
        d="M565.837 139.288C565.837 139.288 539.889 103.864 514.68 140.638C489.42 177.485 465.936 207.734 465.936 207.734L403.201 228.168L366.908 231.385L376.906 263.62L482.432 248.327C482.432 248.327 599.915 178.608 565.837 139.288Z"
        fill="#2F2E41"
      />
    </g>

    <g id="Body">
      <path
        id="Vector_5"
        d="M450.02 335.462C450.02 335.462 410.602 363.027 413.23 387.967C415.858 412.907 432.939 481.163 432.939 481.163L468.415 475.913C468.415 475.913 472.356 423.408 459.217 403.718L522.286 368.277L450.02 335.462Z"
        fill="#FFB8B8"
      />
      <path
        id="Vector_6"
        d="M537.396 400.437C537.396 400.437 534.768 449.004 541.337 468.693C547.907 488.383 554.477 561.89 554.477 561.89H591.267C591.267 561.89 608.348 497.571 587.325 468.693C587.325 468.693 580.755 430.627 599.15 412.25L537.396 400.437Z"
        fill="#FFB8B8"
      />
      <path
        id="Vector_7"
        d="M528.855 265.893C528.855 265.893 443.45 319.71 443.45 336.774L511.774 393.217L535.425 366.965L532.797 406.344L606.377 420.783C606.377 420.783 632.655 321.023 631.341 317.085C630.028 313.147 626.086 255.392 626.086 255.392L528.855 265.893Z"
        fill="#2F2E41"
      />
      <path
        id="Vector_8"
        d="M468.415 469.35L430.311 477.225L437.081 505.03C440.413 518.715 440.792 532.952 438.194 546.795V546.795C438.194 546.795 477.612 557.296 477.612 552.045C477.612 546.795 468.415 525.793 471.042 511.354C473.67 496.915 468.415 469.35 468.415 469.35Z"
        fill="#6C63FF"
      />
      <path
        id="Vector_9"
        d="M593.894 555.983L552.269 553.358C552.269 553.358 554.792 596.675 549.747 611.113C544.701 625.552 547.224 630.803 547.224 630.803L583.804 633.428L593.894 555.983Z"
        fill="#6C63FF"
      />
      <path
        id="Vector_10"
        d="M594.407 651.719C594.217 646.31 588.509 620.754 587.224 624.598C585.94 628.442 564.009 630.481 557.942 621.137C557.942 621.137 549.58 609.961 543.807 618.126C538.034 626.291 527.036 640.055 527.036 640.055C527.036 640.055 488.778 649.354 492.001 659.435C492.653 661.474 495.37 662.854 499.288 663.759C499.145 663.977 499.043 664.219 498.986 664.474L498.792 665.383C498.673 665.944 498.781 666.529 499.093 667.009C499.405 667.49 499.895 667.827 500.456 667.947L501.367 668.141C501.928 668.26 502.513 668.152 502.994 667.84C503.475 667.529 503.813 667.039 503.932 666.478L504.127 665.568C504.194 665.24 504.184 664.901 504.097 664.578C505.167 664.71 506.283 664.82 507.436 664.912C507.06 665.218 506.799 665.642 506.697 666.116L506.502 667.026C506.383 667.586 506.491 668.171 506.803 668.651C507.115 669.132 507.606 669.469 508.166 669.589L509.077 669.783C509.638 669.902 510.223 669.794 510.704 669.482C511.186 669.171 511.523 668.681 511.643 668.12L511.837 667.211C511.916 666.834 511.893 666.443 511.77 666.079C511.646 665.714 511.427 665.39 511.136 665.138C514.199 665.275 517.419 665.305 520.637 665.264C520.366 665.548 520.179 665.901 520.095 666.285L519.901 667.195C519.781 667.755 519.889 668.34 520.201 668.821C520.513 669.301 521.004 669.639 521.565 669.758L522.475 669.952C523.036 670.071 523.622 669.963 524.103 669.652C524.584 669.34 524.921 668.85 525.041 668.29L525.235 667.38C525.322 666.971 525.288 666.547 525.138 666.157C524.988 665.767 524.728 665.429 524.389 665.184C526.811 665.114 529.192 665.01 531.464 664.888C531.194 665.172 531.007 665.524 530.923 665.907L530.729 666.817C530.61 667.377 530.718 667.962 531.03 668.443C531.342 668.923 531.832 669.261 532.393 669.38L533.304 669.574C533.864 669.693 534.45 669.585 534.931 669.274C535.412 668.962 535.75 668.472 535.869 667.912L536.063 667.002C536.158 666.552 536.107 666.084 535.916 665.666C535.726 665.248 535.406 664.902 535.005 664.678C543.004 664.162 548.902 663.501 548.902 663.501C548.902 663.501 555.791 662.539 564.203 661.048L564.036 661.832C563.916 662.392 564.024 662.977 564.336 663.457C564.648 663.938 565.139 664.275 565.7 664.395L566.61 664.589C567.171 664.708 567.757 664.6 568.238 664.288C568.719 663.977 569.056 663.487 569.176 662.926L569.37 662.017C569.438 661.696 569.431 661.364 569.35 661.047C569.27 660.729 569.118 660.435 568.906 660.185C570.599 659.863 572.31 659.526 574.007 659.174L573.853 659.896C573.733 660.456 573.841 661.041 574.154 661.522C574.466 662.003 574.956 662.34 575.517 662.459L576.427 662.653C576.988 662.773 577.574 662.665 578.055 662.353C578.536 662.041 578.873 661.551 578.993 660.991L579.187 660.081C579.26 659.741 579.249 659.389 579.155 659.054C579.062 658.72 578.889 658.412 578.651 658.159C580.495 657.735 582.276 657.298 583.929 656.85C583.907 656.917 583.879 656.981 583.864 657.051L583.67 657.961C583.551 658.521 583.659 659.106 583.971 659.586C584.283 660.067 584.773 660.404 585.334 660.524L586.245 660.718C586.806 660.837 587.391 660.729 587.872 660.417C588.353 660.105 588.691 659.616 588.81 659.055L589.004 658.145C589.108 657.658 589.04 657.15 588.813 656.708C588.585 656.265 588.211 655.914 587.754 655.715C591.792 654.396 594.452 653.029 594.407 651.719Z"
        fill="#2F2E41"
      />
      <path
        id="Vector_11"
        d="M528.855 95.2511C549.899 95.2511 566.959 78.2083 566.959 57.1849C566.959 36.1616 549.899 19.1187 528.855 19.1187C507.811 19.1187 490.751 36.1616 490.751 57.1849C490.751 78.2083 507.811 95.2511 528.855 95.2511Z"
        fill="#FFB8B8"
      />
      <path
        id="Vector_12"
        d="M563.017 53.247C563.017 53.247 584.04 79.4996 594.552 78.1869L548.564 113.628C548.564 113.628 543.308 91.3132 536.739 88.6879C530.169 86.0627 563.017 53.247 563.017 53.247Z"
        fill="#FFB8B8"
      />
      <path
        id="Vector_13"
        d="M645.138 248.172C645.138 248.172 645.134 103.329 620.813 90.8514C596.505 78.3815 580.426 71.2643 580.426 71.2643C580.068 76.0169 578.716 80.6417 576.457 84.8397C574.198 89.0378 571.083 92.7157 567.313 95.6359C559.253 101.852 551.223 107.007 546.738 107.023L546.593 106.408L546.046 104.848L532.797 125.441C532.797 125.441 520.972 128.067 517.03 135.943C514.897 140.203 524.954 183.096 519.001 221.92C513.95 254.858 492.668 284.592 492.065 288.207C491.046 294.318 516.912 278.308 528.56 270.823C528.733 271.015 528.855 271.143 528.855 271.143C528.855 271.143 522.286 273.768 535.425 269.83C542.87 267.599 553.264 267.476 560.878 267.787C560.869 270.067 560.923 271.879 561.046 273.112C562.36 286.238 628.057 304.615 637.254 300.677C646.452 296.739 645.138 248.172 645.138 248.172Z"
        fill="#2F2E41"
      />
      <path
        id="Vector_14"
        d="M553.163 389.936C553.163 389.936 571.558 372.872 582.069 382.06C592.581 391.248 599.15 397.812 599.15 397.812C599.15 397.812 568.93 379.435 553.163 389.936Z"
        fill="#6C63FF"
      />
      <path
        id="Vector_15"
        d="M557.941 594.113C557.941 594.113 568.309 584.495 574.233 589.674C580.158 594.853 583.861 598.552 583.861 598.552C583.861 598.552 566.828 588.194 557.941 594.113Z"
        fill="#2F2E41"
      />
      <path
        id="Vector_16"
        d="M441.785 504.651C441.785 504.651 448.903 492.435 456.08 495.667C463.256 498.9 467.877 501.362 467.877 501.362C467.877 501.362 448.563 496.405 441.785 504.651Z"
        fill="#2F2E41"
      />
      <path
        id="Vector_17"
        opacity="0.2"
        d="M616.231 204.855L591.267 299.364L612.289 254.735L616.231 204.855Z"
        fill="black"
      />
      <path
        id="Vector_18"
        d="M552.786 12.813C552.786 12.813 531.723 -9.33954 510.522 4.61128C489.322 18.5621 479.265 32.114 481.344 41.5499C483.422 50.9858 489.574 64.1107 489.574 64.1107C489.574 64.1107 485.751 44.5622 503.305 43.1156C520.86 41.669 545.113 30.0632 545.113 30.0632L561.518 65.0629C561.518 65.0629 563.838 56.9523 570.268 59.2786C576.698 61.605 571.713 15.4077 552.786 12.813Z"
        fill="#2F2E41"
      />
    </g>

    <g id="Shoe">
      <path
        id="Vector_4"
        d="M488.123 567.797C486.81 562.546 475.893 538.741 475.439 542.768C474.984 546.795 453.961 553.358 446.078 545.482C446.078 545.482 435.566 536.294 431.625 545.482C427.683 554.67 419.799 570.422 419.799 570.422C419.799 570.422 384.323 587.486 389.579 596.675C390.642 598.533 393.587 599.317 397.608 599.386C397.514 599.629 397.464 599.887 397.463 600.147V601.077C397.463 601.65 397.69 602.2 398.096 602.605C398.501 603.01 399.051 603.238 399.625 603.238H400.556C401.129 603.238 401.679 603.01 402.085 602.605C402.49 602.2 402.718 601.65 402.718 601.077V600.147C402.716 599.812 402.635 599.482 402.482 599.185C403.557 599.09 404.672 598.966 405.818 598.816C405.514 599.193 405.348 599.663 405.346 600.147V601.077C405.346 601.65 405.574 602.2 405.979 602.605C406.385 603.01 406.935 603.238 407.508 603.238H408.44C409.013 603.238 409.563 603.01 409.969 602.605C410.374 602.2 410.602 601.65 410.602 601.077V600.147C410.601 599.763 410.497 599.385 410.3 599.054C410.103 598.724 409.821 598.452 409.484 598.267C412.508 597.762 415.664 597.121 418.803 596.41C418.597 596.745 418.487 597.129 418.485 597.522V598.452C418.485 599.025 418.713 599.575 419.119 599.98C419.524 600.385 420.074 600.612 420.648 600.612H421.579C422.152 600.612 422.702 600.385 423.108 599.98C423.513 599.575 423.741 599.025 423.741 598.452V597.522C423.741 597.104 423.619 596.696 423.391 596.346C423.163 595.996 422.838 595.72 422.456 595.551C424.81 594.978 427.117 594.38 429.313 593.787C429.108 594.121 428.998 594.505 428.997 594.897V595.827C428.997 596.4 429.225 596.949 429.63 597.354C430.036 597.76 430.586 597.987 431.159 597.987H432.09C432.664 597.987 433.214 597.76 433.619 597.354C434.025 596.949 434.253 596.4 434.253 595.827V594.897C434.251 594.437 434.103 593.99 433.83 593.621C433.556 593.252 433.171 592.98 432.732 592.844C440.448 590.673 446.078 588.799 446.078 588.799C446.078 588.799 452.615 586.422 460.531 583.212V584.013C460.531 584.586 460.759 585.136 461.164 585.541C461.57 585.946 462.12 586.174 462.693 586.174H463.624C464.198 586.174 464.748 585.946 465.153 585.541C465.559 585.136 465.787 584.586 465.787 584.013V583.083C465.786 582.756 465.71 582.433 465.565 582.139C465.42 581.845 465.21 581.589 464.95 581.388C466.54 580.721 468.143 580.035 469.729 579.337V580.075C469.729 580.648 469.956 581.198 470.362 581.603C470.767 582.008 471.317 582.236 471.891 582.236H472.822C473.395 582.236 473.945 582.008 474.351 581.603C474.756 581.198 474.984 580.648 474.984 580.075V579.145C474.984 578.798 474.9 578.456 474.739 578.148C474.577 577.84 474.344 577.575 474.059 577.377C475.773 576.578 477.424 575.78 478.947 574.998C478.94 575.068 478.926 575.136 478.926 575.207V576.138C478.926 576.711 479.154 577.26 479.559 577.665C479.965 578.07 480.515 578.298 481.088 578.298H482.019C482.593 578.298 483.143 578.07 483.548 577.665C483.954 577.26 484.182 576.711 484.182 576.138V575.207C484.182 574.709 484.009 574.227 483.694 573.841C483.379 573.455 482.94 573.19 482.451 573.091C486.125 570.959 488.442 569.069 488.123 567.797Z"
        fill="#2F2E41"
      />
    </g>
    <g id="LeftHand">
      <path
        id="Vector_19"
        d="M599.15 298.052C599.15 298.052 559.732 333.493 586.011 340.056C612.289 346.619 622.801 303.302 622.801 303.302L599.15 298.052Z"
        fill="#FFB8B8"
      />
      <path
        id="Vector_20"
        d="M635.209 108.861C622.185 82.7062 582.555 96.9712 588.994 125.467C589.09 125.892 589.191 126.321 589.296 126.754C596.083 153.729 607.174 179.435 622.144 202.886L607.691 267.205L591.924 300.021L624.772 307.897L665.503 209.45C665.503 209.45 654.268 147.135 635.209 108.861Z"
        fill="#2F2E41"
      />
    </g>
    <g id="SoccerBall">
      <path
        id="Vector_21"
        d="M417.828 513.323C417.827 516.648 417.55 519.967 417.001 523.246V523.259C415.492 532.081 411.997 540.444 406.779 547.719C401.562 554.994 394.759 560.989 386.883 565.253C379.007 569.517 370.264 571.938 361.315 572.333C352.366 572.728 343.444 571.087 335.222 567.534H335.209C332.776 566.485 330.419 565.271 328.153 563.898C321.131 559.663 315.067 554.017 310.344 547.317C305.622 540.617 302.344 533.011 300.718 524.979C299.956 521.14 299.573 517.236 299.575 513.323C299.575 511.538 299.654 509.765 299.812 508.02V508.007C301.175 492.934 308.278 478.959 319.655 468.965C331.032 458.971 345.814 453.722 360.953 454.299C376.091 454.877 390.43 461.237 401.011 472.069C411.591 482.9 417.607 497.376 417.815 512.509V512.522C417.828 512.798 417.828 513.047 417.828 513.323Z"
        fill="#6C63FF"
      />
      <path
        id="Vector_22"
        d="M373.256 493.594H346.775L333.534 470.688L342.515 455.136L343.04 454.995C354.41 451.96 366.418 452.296 377.6 455.961L378.076 456.118L386.498 470.688L373.256 493.594ZM348.292 490.968H371.74L383.463 470.688L376.303 458.3C365.912 455.008 354.806 454.694 344.245 457.393L336.568 470.688L348.292 490.968Z"
        fill="white"
      />
      <path
        id="Vector_23"
        d="M371.942 540.849H345.461L332.22 517.939L345.461 495.028H371.942L385.184 517.939L371.942 540.849ZM346.978 538.224H370.426L382.149 517.939L370.426 497.653H346.978L335.255 517.939L346.978 538.224Z"
        fill="white"
      />
      <path
        id="Vector_24"
        d="M358.702 573.704C350.443 573.719 342.271 572.028 334.698 568.738L333.348 568.152L346.774 544.904H373.256L386.117 567.16L384.84 567.772C376.688 571.697 367.751 573.725 358.702 573.704V573.704ZM337.105 566.899C344.329 569.803 352.066 571.221 359.852 571.067C367.637 570.913 375.312 569.191 382.416 566.005L371.74 547.529H348.292L337.105 566.899Z"
        fill="white"
      />
      <path
        id="Vector_25"
        d="M416.616 517.221H390.135L376.893 494.315L390.134 471.397H402.192L402.581 471.806C413.038 482.796 418.949 497.33 419.13 512.492V512.873L416.616 517.221ZM391.651 514.596H415.099L416.497 512.179C416.243 497.992 410.744 484.401 401.059 474.022H391.652L379.928 494.315L391.651 514.596Z"
        fill="white"
      />
      <path
        id="Vector_26"
        d="M389.77 565.147L376.893 542.882L390.134 519.964H416.615L418.315 522.892L418.296 523.479C416.861 531.838 413.682 539.802 408.967 546.855C404.251 553.908 398.105 559.891 390.925 564.418L389.77 565.147ZM379.928 542.882L390.669 561.454C397.176 557.135 402.742 551.546 407.031 545.022C411.32 538.499 414.244 531.176 415.627 523.494L415.1 522.589H391.652L379.928 542.882Z"
        fill="white"
      />
      <path
        id="Vector_27"
        d="M328.621 565.714L327.474 565.021C320.298 560.689 314.101 554.916 309.274 548.068C304.447 541.22 301.095 533.445 299.43 525.236L299.333 524.751L302.102 519.964H328.583L341.824 542.883L328.621 565.714ZM302.106 525.203C303.702 532.739 306.787 539.882 311.181 546.212C315.574 552.543 321.188 557.934 327.694 562.069L338.79 542.882L327.066 522.589H303.618L302.106 525.203Z"
        fill="white"
      />
      <path
        id="Vector_28"
        d="M328.583 514.596H302.102L298.498 508.372V508.02C299.795 493.144 306.58 479.281 317.535 469.123L317.914 468.772H328.583L341.824 491.69L328.583 514.596ZM303.618 511.97H327.066L338.79 491.69L327.066 471.397H318.95C308.814 480.955 302.492 493.861 301.158 507.722L303.618 511.97Z"
        fill="white"
      />
    </g>
  </g>
</svg>
  </div>
  </div>;
}

export default Contact;
