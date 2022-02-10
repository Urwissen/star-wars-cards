import React from 'react'
import person from "../boba.webp"

export const Card = (props) => {
  return (
    <div className='card'>
        <img className="card--img" src={props.img ? props.img : person} alt="a person"/>
        <div className='card--wrapper'>
            <h2 className='card--title'>{props.name}</h2>
            <ul className='card--list'>
                <li className='card--list_item'>Größe: {props.height}</li>
                <li className='card--list_item'>Spezies: xx</li>
                <li className='card--list_item'>Planet: xx</li>
                <li className='card--list_item'>Franktion: xxx</li>
            </ul>
            <p className='card--description'>Some content for the card</p>
        </div>
        
    </div>
  )
}
