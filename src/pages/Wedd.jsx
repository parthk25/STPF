import React from 'react'
import wedd1 from '../img/wedd/01.jpg'
import wedd2 from '../img/wedd/02.jpg'
import wedd3 from '../img/wedd/03.jpg'
import wedd4 from '../img/wedd/04.jpg'
import wedd5 from '../img/wedd/Aa1.jpg'
import wedd6 from '../img/wedd/Aa3.jpg'
import wedd7 from '../img/wedd/Aa4.jpg'
import wedd8 from '../img/wedd/Aa5.jpg'
// import wedd9 from '../img/wedd/Aa6.jpg'
import wedd10 from '../img/wedd/Aa2.jpg'
import wedd11 from '../img/wedd/05.jpg'
import wedd12 from '../img/wedd/Dj4.jpg'
// import wedd13 from '../img/wedd/Dj1.jpg'
import wedd14 from '../img/wedd/Dj3.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom'
// import wedd15 from '../img/wedd/dj2.jpg'

const Wedd = () => {
  return (
    <>
      <div className="w-1140 text-center">
        <h1>Wedding</h1>
        <div className='d-flex flex-wrap justify-content-center mt-5 gap-2'>
          <img src={wedd8} alt="wedd1" width="49%" height="auto" />
          <img src={wedd3} alt="wedd1" width="49%" height="auto" />
          <img src={wedd1} alt="wedd1" width="49%" height="auto" />
          <img src={wedd7} alt="wedd1" width="49%" height="auto" />
          <img src={wedd5} alt="wedd1" width="49%" height="auto" />
          <img src={wedd4} alt="wedd1" width="49%" height="auto" />
          <img src={wedd2} alt="wedd1" width="49%" height="auto" />
          <img src={wedd6} alt="wedd1" width="49%" height="auto" />
          <img src={wedd10} alt="wedd1" width="25%" height="auto" />
          <img src={wedd11} alt="wedd1" width="45%" height="auto" />
          {/* <img src={wedd9} alt="wedd1" width="20%" height="auto" /> */}
          <img src={wedd12} alt="wedd1" width="25%" height="auto" />
          {/* <img src={wedd13} alt="wedd1" width="20%" height="auto" /> */}
          <img src={wedd14} alt="wedd1" width="20%" height="auto" />
          {/* <img src={wedd15} alt="wedd1" width="20%" height="auto" /> */}
        </div>
        <p className='fs-5 mt-5'>For Enquire <Link to="/contact" className="text-info text-decoration-underline">Click Here</Link></p>
      </div>
    </>
  )
}

export default Wedd