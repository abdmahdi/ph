import React from 'react'
import './about.css'
import image from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={image} alt="About" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Experience</small>
            </article>

             <article className="about_card">
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ WorldWide</small>
            </article>
            
             <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>Complete Projects +200</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, consectetur laboriosam doloribus repellendus aperiam tenetur iusto? Labore placeat consequuntur eveniet necessitatibus odit sit ea ipsa nobis earum a! Quae, officiis?</p>
         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About