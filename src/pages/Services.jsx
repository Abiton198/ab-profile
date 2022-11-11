import React from 'react'
import css from './img/css.png'
import html from './img/html.png'
import java from './img/java.png'
import netlify from './img/netlify.png'
import git from './img/git.png'
import react from './img/react.png'

export default function Services (props){
   
          return (
    <div className="services">

                <h2 className='title-service'>What I do</h2>

                    <h3 className='overview'>Design + Development</h3>
                    <p className='para-service'> 
                      I offer a complete <span className='span'>startup design </span>of project ideas and transform them 
                      into a brand that you desire and can be enjoyed by your intended consumers.
                      Specializes in bringing up your visibility through building and deploying 
                      a <span className='span'>proffesional website</span> and increase business revenue.   
                    </p>
    
                    <h3 className='overview'>E-Commerce</h3>
                    <p className='para-service'>
                      The world has become <span className='span'>digital</span>. And a digitial mindset is the only way to grow
                      business and attract more. I can magnify business through standout web-marketing,
                      ensuring <span className='span'>products and services</span> reaches clients more easy. Link services to digital
                      marketing platforms as <span className='span'>Youtube, Facebook, Instagram, Twitter, LinkedIn</span>, and many 
                      other social platforms. 
                    </p>

                    <h3 className='overview'>Social Media Management</h3>
                    <p className='para-service'>
                      The need for <span>social media </span>visibilty is growing large and loud. Management of content 
                      and having an active page is a priority for business growth. Get a proffessional and 
                      reliable <span className='span'>social media pro</span>. You have arrived, its here!
                    </p>
 
                    <h3 className='overview'>WordPress</h3>
                    <p className='para-service'>
                      Quick setup and go! Meeting individual needs to facilitate growth of business. Call 
                      for assistance in quick set-up of customized <span className='span'>WordPress website</span>, setting a website in 
                      minutes on the go!
                    </p>
           
           <div className='skills'> 

                    <div className='skill'>
                        <img src={css} alt='' className='img-skill'/>
                    </div>
                    <div className='skill'>
                        <img src={html} alt='' className='img-skill'/>
                        <p>The markup language used for structuring and presenting content.</p>
                    </div>
                    <div className='skill'>
                        <img src={java} alt='' className='img-skill'/>
                    </div>
                    <div className='skill'>
                        <img src={react} alt='' className='img-skill'/>
                    </div>
                    <div className='skill'>
                        <img src={git} alt='' className='img-skill'/>
                        <p>A code hosting platform for version control and collaboration.</p>
                    </div>
                    <div className='skill'>
                        <img src={netlify} alt='' className='img-skill'/>
                    </div>

           </div>
      
        
    </div>
  )
}
