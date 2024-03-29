import React, {useContext} from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { ThemeContext } from '../components/ThemeContext'

const NavBar = (props) => {
  const {theme} = useContext(ThemeContext)

      return (
          <div className={`${theme}-theme`}>
              {theme === "light" ? "" : ""}
              <div className='my-nav'>
                  <h1 className='logo'>My Portifolio</h1>
                     <input type='checkbox' id="nav-toggle" className='nav-toggle'/>
                      <nav>
                          <ul> 
                              <Link to='/' className='links'>Home</Link>
                              <Link to='/AboutMe' className='links'>About</Link>
                              <Link to='/Services'className='links'>Services</Link>
                              <Link to='/MyWork' className='links'> Projects</Link>
                              <Link to='/Skills' className='links'> Skills</Link>
                              
                          </ul>
                        </nav> 
                  
                  <label for="nav-toggle" className='nav-toggle-label'>
                    <span> </span>
                  </label>
              </div>
            </div>
              )}
            
        function CustomLink({ to, children, ...props}){
          const resolvedPath = useResolvedPath(to)
          const isActive = useMatch({path: resolvedPath.pathname, end:true})
          return(
                  <li className={isActive ? "active" : ""}>
                      <Link to={to} {...props}> {children} </Link>
                  </li>           
          )}
export default NavBar
// to replaces href 
// Link replaces <a> tag