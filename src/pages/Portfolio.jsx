import React from 'react'
import Clothing from '../card/Clothing'
import clth1 from '../img/CLOTHING/03.jpg'
import clth2 from '../img/CLOTHING/12.jpg'
import clth3 from '../img/CLOTHING/15.jpg'
import clth4 from '../img/CLOTHING/20.jpg'
import clth5 from '../img/CLOTHING/23.jpg'
import Fashion from '../card/Fashion'
import fsn from '../img/FASHION SHOW/66DJ0751.JPG'
import fsn1 from '../img/FASHION SHOW/66DJ0760.JPG'
import fsn2 from '../img/FASHION SHOW/66DJ9333.JPG'
import fsn3 from '../img/FASHION SHOW/66DJ1234.JPG'
import fsn4 from '../img/FASHION SHOW/66DJ9158.JPG'
// import fsn5 from '../img/FASHION SHOW/66DJ0008.JPG'
// import fsn6 from '../img/FASHION SHOW/66DJ0306.JPG'
import Jwellry from '../card/Jwellry'
import jwel1 from '../img/JWELLRY/AJ_03561.jpg'
import jwel2 from '../img/JWELLRY/AJ_03930.jpg'
import jwel3 from '../img/JWELLRY/AJ_03935.jpg'
import jwel4 from '../img/JWELLRY/AJ_03947.jpg'
import jwel5 from '../img/JWELLRY/AJ_03582.jpg'
import Food from '../card/Food'
import food from '../img/FOOD/1J8A8940.JPG'
import food1 from '../img/FOOD/1J8A9019.JPG'
import food2 from '../img/FOOD/1J8A8986.JPG'
import food3 from '../img/FOOD/1J8A9018.JPG'
import food4 from '../img/FOOD/1J8A8952.JPG'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Portfolio = () => {
  return (
    <>
    <h2 className='text-center mt-5'>"YOU FEEL. I FOCUS. WE FRAME”</h2>
      <div className='w-1440'>
        <Fashion title="FASHION"/>
        <div className='d-flex flex-wrap row-gap-4'>
          <Fashion img={fsn} />
          <Fashion img={fsn1} />
          <Fashion img={fsn2} />
          <Fashion img={fsn3} />
          <Fashion img={fsn4} />
          {/* <Fashion img={fsn5} />
          <Fashion img={fsn6} /> */}
        </div>
        <Jwellry title="JWELLRY"/>
        <div className='d-flex flex-wrap row-gap-4'>
          <Jwellry img={jwel1} />
          <Jwellry img={jwel2} />
          <Jwellry img={jwel3} />
          <Jwellry img={jwel4} />
          <Jwellry img={jwel5} />
        </div>
        <Clothing title="CLOTHINGS" />
        <div className='d-flex flex-wrap row-gap-4'>
          <Clothing img={clth1} />
          <Clothing img={clth2} />
          <Clothing img={clth3} />
          <Clothing img={clth4} />
          <Clothing img={clth5} />
        </div>
        <Food title="FOOD" />
        <div className='d-flex flex-wrap row-gap-4'>
          <Food img={food}/>
          <Food img={food1}/>
          <Food img={food2}/>
          <Food img={food3}/>
          <Food img={food4}/>
        </div>
        <p className='fs-5 mt-5 text-center'>For Enquire <Link to="/contact" className="text-info text-decoration-underline">Click Here</Link></p>
        {/* <div className="photo-grid mt-5">
        {photos.map(photo => (
          <div key={photo.id}>
            <img src={photo.imageUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>  */}
      </div>
    </>
  )
}

export default Portfolio
