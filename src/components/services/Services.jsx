import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
 
const Services = () => {
   const animals = ["Dog", "Bird", "Cat", "Mouse"];

  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="service_header">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            {animals.map(animal => (
              <li><BiCheck className='service_list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          ))}
          </ul>
        </article>
        {/*   =    = = = = = = = = = = = = = = = = == = = = =  = = = = = = = = = */}

         <article className='service'>
          <div className="service_header">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            {animals.map(animal => (
              <li><BiCheck className='service_list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          ))}
          </ul>
        </article>
        {/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = ==  */}
         <article className='service'>
          <div className="service_header">
            <h3>Mobile Devlopment</h3>
          </div>
          <ul className='service_list'>
            {animals.map(animal => (
              <li><BiCheck className='service_list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services