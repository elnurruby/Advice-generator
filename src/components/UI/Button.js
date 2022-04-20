import React from 'react'
import classes from './Button.module.css'
import img from './icon-dice.svg'
export default function Button(props) {
  return (
    <button className={classes["dice-btn"]} onClick={props.onClick} id="dice">
    <img src={img} alt="" className='dice'/>
  </button>
  )
}
