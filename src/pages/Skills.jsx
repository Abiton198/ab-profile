import React from 'react'
import css from './img/css.png'
import html from './img/html.png'
import java from './img/java.png'
import netlify from './img/netlify.png'
import git from './img/git.png'
import react from './img/react.png'
import git2 from './img/git2.png'

export default function Skills() {
  return (

<div className='skills'> 

            <div className='skill'>
                <img src={css} alt='' className='img-skill'/>
                <p className='para-skill'>The standard used in the styling and formatting of web pages.</p>
            </div>

            <div className='skill'>
                <img src={html} alt='' className='img-skill'/>
                <p className='para-skill'>The markup language used for structuring and presenting content.</p>
            </div>

            <div className='skill'>
                    <img src={java} alt='' className='img-skill'/>
                    <p className='para-skill'>A text-based programming language used both on the client-side and 
                    server-side that allows you to make web pages interactive.</p>
            </div>

            <div className='skill'>
                <img src={react} alt='' className='img-skill'/>
                <p className='para-skill'>Javascript Library that makes code clean, readable, reusable and effecient 
                    for production. Increases good code practises. </p>
            </div>

            <div className='skill'>
                <img src={git} alt='' className='img-skill'/>
                <p className='para-skill'>A code hosting platform for version control and collaboration.</p>
            </div>

            <div className='skill'>
                <img src={git2} alt='' className='img-skill'/>
                <p className='para-skill'>Git is a free and open source distributed version control system designed 
                    to handle everything from small to very large projects with speed and efficiency.
                </p>
            </div>

            <div className='skill'>
                <img src={netlify} alt='' className='img-skill'/>
                <p className='para-skill'>A web domain hosting platform, enbabling one to customize and own domains.</p>
            </div>


    </div>
  )
}
