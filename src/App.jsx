import { Route, Routes } from 'react-router-dom'
import React, { useContext } from 'react'
import { ThemeContext } from './components/ThemeContext'
import { Toggle } from './components'
import {AboutMe,
        MyWork,
        Services,
        Home,
        NavBar,
        SocialMedia,
        Skills
        } from './pages'


export default function App () {
  const {theme} = useContext(ThemeContext)

  return (
    < div id="App" className={`${theme}-theme`} >        
           <NavBar/>
          <div className='top-display'>
              <SocialMedia/>
              <Toggle/>
          </div>

         <Routes>
           <Route exact path='/' element={<Home/>}/> 
           <Route path='/Services' element={<Services/>}/>
           <Route path='/AboutMe'  element={<AboutMe/>}/>
           <Route path='/Skills'  element={<Skills/>}/>
           <Route path='/MyWork' element={<MyWork/>}/> 
         
         </Routes>          
    </div>
  )
  }

  



