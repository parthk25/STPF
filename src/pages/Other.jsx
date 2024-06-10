import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Other = () => {
  return (
    <>
      <div className="w-1140 text-center">
        <h1>Our Other Services</h1>
        <div className='mt-4 fs-4 other'>
          <ul className='list-unstyled'>
            <li>Product Shoot</li>
            <li>Baby Shower</li>
            <li>Fashion Shoot</li>
            <li>Corporate Events</li>
          </ul>
          👇👇👇
        </div>
        <p className='fs-5 mt-5'>For Enquire <Link to="/contact" className="text-info text-decoration-underline">Click Here</Link></p>
      </div>
    </>
  )
}

export default Other