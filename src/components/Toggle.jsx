import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../components/ThemeContext'
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const Toggle = (props) => {
  const {theme, toggleTheme} = useContext(ThemeContext)
    
  const moonSun = toggleTheme ? <BsSunFill/> : <BsMoonFill/>
  return (
    
  <div >
    <button id='switch' className={`${theme}-theme`} onClick={toggleTheme}>{moonSun}</button>
  </div>
)} 

export default Toggle


// ! to make toggle icon change from sun to moon when toogleds