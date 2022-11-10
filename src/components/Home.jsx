import React from 'react';
import '../styles/Home.css';
import 'animate.css';

export default function Home() {
  return (
    <div className='body'>
      <div>
          {/* make the info like lists with some hover animations */}
        <h1 className='heading1 animate__animated animate__bounce'>Hey, I am Jane Nkwor</h1>
        <p className='par1'>A Frontend developer and Technical writer</p>
        <p className='par2'>based in Lagos, Nigeria.</p>
      </div>
    </div>
  )
}
