import React from 'react'
import own from '../img/1H5A5226.jpg'

const Aboutus = () => {
  return (
    <>
      <div className='w-1140'>
        <div className='n_flex d-flex align-items-center'>
          <div className='about text-center'>
            <div className='mt-5'>
              <h3>RIKEN GOYANI.</h3>
              <br />
              <h5 className='mb-3'>Moment. Memory. Miracle.</h5>
              <p>The journey is never about a shot but the unsaid stories within the shooting experience.The quest within is of something which is ‘epiphanic’.</p>
              <p>As an artist whose medium of bringing the art to the world is an intent of compartmentalising the moments, I am all about things which are not seen by the naked eye but a soul which feels what cannot be said through any other medium.</p>
              <p>The world is material but I am still looking for a metaphor in it. Anything which can allow me the space to create what is not felt is the domain I am looking for.</p>
              <h5 className='mt-3'>People. Photographs. Perfection.</h5>
            </div>
          </div>
          <div className='img'>
            <img src={own} alt="owner"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutus
