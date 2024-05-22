import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Home = () => {
    return (
        <>
            <div className='bg_pic'>
                <div className='shivay text-center'>
                    <h2 className='text-white'>Welcome to</h2>
                    <h1 className='text-white'>The Photo Factory</h1>
                </div>
                <div className='text-center mt-5'>
                    <Link to="/about"><button type="button" className='button'>Enter...</button></Link>
                </div>
                <div className='social_icons'>
                    <a href="https://www.youtube.com/channel/UCahZuySyuB06gkh1dVofMJA" target='blank' className='text-white'><FaYoutube/></a>
                    <a href="https://www.instagram.com/shivaythephotofactory/" target='blank' className='text-white'><FaInstagram/></a>
                    <a href="https://www.facebook.com/" target='blank' className='text-white'><FaFacebook/></a>
                    <a href="https://in.linkedin.com/in/shivay-the-photo-factory-72a932234" target='blank' className='text-white'><FaLinkedin/></a>
                </div>
            </div>
        </>
    )
}

export default Home
