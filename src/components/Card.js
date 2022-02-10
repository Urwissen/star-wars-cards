import React from 'react'

export const Card = () => {
  return (
    <div className='card'>
        <h2 className='card--title'>Card Title</h2>
        <ul className='card--list'>
            <li className='card--list_item'>Name: xxx</li>
            <li className='card--list_item'>Spezies: xxx</li>
            <li className='card--list_item'>Planet: xxx</li>
            <li className='card--list_item'>Franktion: xxx</li>
        </ul>
        <p>Some content for the card</p>
    </div>
  )
}
