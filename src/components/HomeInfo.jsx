import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center" >{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
);

const renderContent = {
    1 : (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'>Sudharsan</span> ✨
        <br/>
        Aspiring Software Engineer.
        </h1>
    ),
    2 : (
        <InfoBox
            text="Hands-on experience from projects & college work!"
            link="/about"
            btnText="See my journey"
        />
    ),
    3 : (
        <InfoBox
            text="Passionate about building innovative projects in my free time!"
            link="/projects"
            btnText="Discover my creations"
        />
    ),
    4 : (
        <InfoBox
            text="Need a project done? Let's work together!"
            link="/contact"
            btnText="Get in touch"
        />
    ),
};


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
