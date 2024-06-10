import React from 'react'
import ser from '../img/SHIVAY.png'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Service = (props) => {
    return (
        <>
            <div className='box p-4'>
                <img src={ser} alt="ser" width="70%" height="auto" />
                <h3 className='mt-4'>{props.title}</h3>
                <Link to={props.contain}><button className='button mt-5'>for more details click me</button></Link>
            </div>
        </>
    )
}

export default Service
