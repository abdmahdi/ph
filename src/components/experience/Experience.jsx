import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      
      <h5>Skills I have </h5>
      <h2>My Experience</h2>
      <div className="container container_exper">
        <div className="exp_frontend">
          <h3>FrontEnd Development</h3>
          <div className="exp_content">
            <article className='exp_details'>
              <BsPatchCheckFill className='exp_details-icon' />
              <div>
                  <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>

            </article>


              <article className='exp_details'>
              <BsPatchCheckFill className='exp_details-icon'/>
             <div> <h4>CSS</h4>
              <small className='text-light'>Intermediate</small></div>

            </article>


              <article className='exp_details'>
              <BsPatchCheckFill className='exp_details-icon'/>
             <div> <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small></div>

            </article>


              <article className='exp_details'>
              <BsPatchCheckFill className='exp_details-icon'/>
             <div> <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
 
              </div>
            </article>

              <article className='exp_details'>
              <BsPatchCheckFill className='exp_details-icon'/>
            <div>  <h4>React JS</h4>
              <small className='text-light'>Experienced</small></div>

            </article>
          </div>
        </div>

        {/* <             ==============    BackEnd  +++++++++                 */ }
        <div className="exp_backend">
            <h3>BackEnd Development</h3>
          <div className="exp_content">
            <article className='exp_details'>
              <BsPatchCheckFill className='exp_details-icon'/>
           <div>   <h4>Python</h4>
              <small className='text-light'>Experienced</small></div>

            </article>


              <article className='exp_details'>
              <BsPatchCheckFill className='exp_details-icon'/>
             <div> <h4>Django</h4>
              <small className='text-light'>Intermediate</small>

              </div>
            </article>


              <article className='exp_details'>
              <BsPatchCheckFill className='exp_details-icon'/>
            <div>  <h4>Mysql</h4>
              <small className='text-light'>Experienced</small></div>

            </article>


              <article className='exp_details'>
              <BsPatchCheckFill className='exp_details-icon'/>
             <div> <h4>Sqlite</h4>
              <small className='text-light'>Experienced</small>
</div>
            </article>

              <article className='exp_details'>
              <BsPatchCheckFill className='exp_details-icon'/>
           <div>   <h4>Postgres</h4>
              <small className='text-light'>Experienced</small>
</div>
            </article>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience