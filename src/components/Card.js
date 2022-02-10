import React from 'react'

const noPic = "https://c.tenor.com/en9QVrLjdzYAAAAC/star-wars-storm-trooper.gif"

export const Card = (props) => {
  return (
    <div className='card'>
        <img className="card--img" src={props.img ? props.img : noPic} alt="a person"/>
        <h2 className='card--title'>{props.name}</h2>
        <div className='card--wrapper'>  
            <ul className='card--list'>
                <li className='card--list_item'><strong>Species:</strong><br /> {props.species}</li>
                <li className='card--list_item'><strong>Homeworld:</strong><br /> {props.homeworld}</li>
                {props.gender && <li className='card--list_item'><strong>Gender:</strong><br /> {props.gender}</li>}
                {props.class && <li className='card--list_item'><strong>Class:</strong><br /> {props.class}</li>}
            </ul>
            {props.about && <a href={props.about}>about</a>}
        </div>
        
    </div>
  )
}
