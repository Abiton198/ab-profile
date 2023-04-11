import React, { useContext } from 'react'
import abiton_plant from '../img/abiton_plant.jpg'
import { ThemeContext } from '../components/ThemeContext'

const AboutMe = (props) => {
  const {theme} = useContext(ThemeContext)
  return (
    <>
  
    <div className={`${theme}-theme`} >

        <div className="about_me">
              <h2 className="about">Who I am</h2>
                  <p className='para'> <span className='span'>Proffesional Front-end software developer</span>, entry level, with proven 
                    skills in problem solving, good communication and great passion for learning
                     and growing in software development. Gained coding skills through self-paced
                      and project-based learning with <span className='span'>Scrimba</span> , in Front End Developer 
                      Career Path Course.
                  </p>

                  <p className='para'>Ambition to be a <span className='span'>full-stack developer</span> and continue to grow analytic skills,
                     prowess in problem solving. Learning <span className='span'>Arabic Language</span> for the past 3 years 
                     has helped me in strengthening skills, consistency and desire for learning 
                     new and challenging things. The Arabs' Language has managed to really stretch 
                     the <span>complexity </span>I can handle. With this skill, coding has complemented
                      it. Currently studying BA Arabic Language, with intension to provide software 
                      solutions in Arabic.
                  </p>

                  <p className='para'>Working as a <span className='span'>garderner </span>has taught me various life principles I intend to implement
                     in coding. When I started coding I planted a seed of a <span className='span'>Palm-date</span> tree, so as long as am 
                     active in coding my growth is guaranteed because I understand 
                     these principles:
                  </p>
                  <div className='plant-points'>
                      <img src={abiton_plant} alt='' className='plant'/>
                      <ul className='unordered'>
                        <li>Growth is gradual</li>
                        <li>Learn, learn and learn some more</li>
                        <li>You need the right environment to thrive</li>
                        <li>Never ever give up</li>
                        <li>Not all problems are quick fix</li>
                        <li>Victories dont not come by accident</li>
                      </ul>
                  </div>
           
            <div className='icons'>

                  <p><i className="fa-solid fa-id-badge"></i> Abiton Padera  </p>               
                  <p ><i className="fa-solid fa-phone"></i>+27 (0) 761 272 025 </p>
                  <p ><i className="fa-regular fa-envelope"></i> abitondev@gmail.com  </p>
                  <p> <a>www.abitondev.com</a> </p>   

                  <div className='about-contacts'>
                  <ul className="social_list">
                                                     
                            <li className="social_item">
                                <a className="whatsapp" href="http://wa.me/0027761272025">
                                    <i className="fab fa-whatsapp"></i>
                                </a></li>
                                
                            <li className="social_item">
                                <a className="twitter" href="https://twitter.com/abitondev?ref_src=twsrc%5Etfw">
                                    <i className="fab fa-twitter"></i>
                                </a></li>
                                
                            <li className="social_item">
                                <a className="github" href="https://github.com/Abiton198">
                                    <i className="fab fa-github"></i>  
                                </a></li>

                                <li className='social_item'>
                                <a className='linked-in' href='https://www.linkedin.com/in/abiton-padera-232a6a9a/'>
                                <i className="fa-brands fa-linkedin-in"></i>
                                      
                                </a></li>
                        </ul>


                  </div>
                    
              <div className='interests'>
                    <p ><i class="fa-brands fa-readme"></i>Reading </p>
                    <p ><i class="fa-sharp fa-solid fa-earth-americas"></i>Traveling </p>
                    <p><i class="fa-solid fa-binoculars"></i> nature & landscaping </p>
                  </div>
                </div>   
        </div>
    </div>
    </>
  )
}
export default AboutMe