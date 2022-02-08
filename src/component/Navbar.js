import React from 'react';

const Navbar = () => {
  return <div>
  <nav>
  <div className='logo' >
    <div className='kbpr__logobg'>
    <h1 className='kbpr__logoname'>kbpr</h1>
    <p>Since 1999</p>
    </div>
  </div>
  <div className='kbpr__menusection'>
  <ul className='kbpr__menuitems'>
    <li><a href="#">home</a></li>
    <li><a href="/about">about</a></li>
    <li><a href="/portfolio">portfolio</a></li>
    <li><a href="#">contact</a></li>
  </ul>
  <span className='kbpr__menuitemsMobile'>&lt;MENU&#x2215;&gt;</span>
  </div>
  </nav></div>;
};

export default Navbar;
