import React from 'react'
import pw1 from '../img/prewedd/01.jpg'
import pw2 from '../img/prewedd/03.jpg'
import pw3 from '../img/prewedd/05.jpg'
import pw4 from '../img/prewedd/02.jpg'
import pw5 from '../img/prewedd/08.jpg'
import pw6 from '../img/prewedd/07.jpg'
import pw7 from '../img/prewedd/11.jpg'
import pw8 from '../img/prewedd/13.jpg'
import pw9 from '../img/prewedd/12.jpg'
import pw10 from '../img/prewedd/14.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Prewedd = () => {
  return (
    <>
      <div className="w-1140 text-center">
        <h1>Pre-Wedding</h1>
        <div className='d-flex flex-wrap justify-content-center mt-5 gap-2'>
          <img src={pw1} alt="prewedd" width="49%" height="auto" />
          <img src={pw2} alt="prewedd" width="49%" height="auto" />
          <img src={pw3} alt="prewedd" width="49%" height="auto" />
          <img src={pw4} alt="prewedd" width="49%" height="auto" />
          <img src={pw5} alt="prewedd" width="49%" height="auto" />
          <img src={pw6} alt="prewedd" width="49%" height="auto" />
          <img src={pw7} alt="prewedd" width="24%" height="auto" />
          <img src={pw8} alt="prewedd" width="24%" height="auto" />
          <img src={pw9} alt="prewedd" width="24%" height="auto" />
          <img src={pw10} alt="prewedd" width="24%" height="auto" />
        </div>
        <p className='fs-5 mt-5'>For Enquire <Link to="/contact" className="text-info text-decoration-underline">Click Here</Link></p>
      </div>
    </>
  )
}

export default Prewedd