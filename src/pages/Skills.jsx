import React from 'react'
import css from './img/css.png'
import html from './img/html.png'
import java from './img/java.png'
import netlify from './img/netlify.png'
import git from './img/git.png'
import react from './img/react.png'
import git2 from './img/git2.png'
import figma from './img/figma.png'
import bootstrap from './img/bootstrap.png'

export default function Skills() {
  return (

<>
        <h1 className='skills-heading'>My Skills</h1>
        <div className='row m-5'> 

                    <div className='col-sm-3'>
                        <img src={css} alt='' width='150px' height='100px'/>
                            <p className='mt-3 text-justify'>I am able to style and format webpages 
                                using the standard CSS and can make web pages responsive using 
                                the Media Quries of CSS.</p>
                                    </div>

                    <div className='col-sm-3'>
                        <img src={figma} alt='' width='150px' height='100px'/>
                            <p className='mt-3 text-justify'>Figma is Web-based graphic design templets that assist in customising 
                                designs for indvidual needs. Complete designs and available for great user experience. I can use the figma 
                                 designs with provided color-codes and styles.</p>
                                    </div>

                    <div className='col-sm-3'>
                        <img src={html} alt='' width='150px' height='100px'/>
                            <p className='mt-3 text-justify'>HTML is a mark-up language that make text on webpage. 
                                I can use comfortably with or without a library. The markup language used for 
                                structuring and presenting content.</p>
                                    </div>

                    <div className='col-sm-3'>
                        <img src={java} alt='' width='150px' height='100px'/>
                            <p className='mt-3 text-justify'>I am able to use programing functions and math. A text-based 
                                programming language used both on the client-side and 
                                server-side that allows you to make web pages interactive.</p>
                                    </div>

                    <div className='col-sm-3'>
                        <img src={react} alt='' width='150px' height='100px'/>
                            <p className='mt-3 text-justify'>Most of my projects are build on a library in order to to deploy 
                                them on live preview of Netlify. React is a Javascript Library that makes code clean, readable, reusable 
                                and effecient for production. Increases good code practises. </p>
                                    </div>

                    <div className='col-sm-3'>
                        <img src={git} alt='' width='150px' height='100px'/>
                            <p className='mt-3 text-justify'>All my code is hosted on Github platform which is a  version control and collaboration. 
                                Github allow me to serve all my work and able to share code with anyone to collaborate on projects. I am able to use the 
                                Git functions as Git Add, Commit, Push, Clone, Fetch and Merge. </p>
                    </div>

                    <div className='col-sm-3'>
                        <img src={git2} alt=''width='150px' height='100px'/>
                        <p className='mt-3 text-justify'>Git is a free and open source distributed version control system designed 
                            to handle everything from small to very large projects with speed and efficiency.
                        </p>
                    </div>

                    <div className='col-sm-3'>
                        <img src={netlify} alt='' width='150px' height='100px'/>
                        <p className='mt-3 text-justify'>Netlify is a web domain hosting platform, enbabling one to customize and own domains.
                                My personal domain www.abitondev.com is currently hosted on Netlify. It is a platform linked to my Github 
                                and can easily and effeciently update any changes made in a code. It also allows one to preview on a live server whether 
                                even on different scale sreens.</p>
                    </div>

                    <div className='col-sm-3'>
                        <img src={bootstrap} alt='' width='150px' height='100px'/> 
                        <p className='mt-3 text-justify'>Bootstrap is a CSS library that allows one to make responsive web pages
                        starting with small screen response. It is also intergrated with Javascript in making Navbar components. It allows one to
                        make easy and presentable webpages fast and efficiently. I have intergrated Bootstrap also in my portifolio pages. </p>
                    </div>


            </div>

    </>
  )
}
