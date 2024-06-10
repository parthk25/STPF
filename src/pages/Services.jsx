import React from 'react'
import Service from '../card/Service'

const Services = () => {
  return (
    <>
      <div className='w-1140 text-center'>
        <h1>Services</h1>
        <p>Explore our photography services and packages.</p>
        <div className='d-flex column-gap-4 mt-5'>
        <Service title="Wedding" contain="/wedd"/>
        <Service title="Pre-Wedding" contain="/prewedd"/>
        <Service title="Others..." contain="/other"/>
        </div>
        
      </div>
    </>
  )
}

export default Services
