import React from 'react'
import { Card } from './Card'

export const Main = () => {
  const [data, setData] = React.useState([])

  const url = "https://akabab.github.io/starwars-api/api/all.json"

  React.useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(Error => console.log("Fetching problem: " + Error))
  }, [])

  
  console.log("render")

  return (
    <section className='cards--container'>
      {data.map(person => <Card 
        key={person.id} 
        name={person.name} 
        img={person.image} 
        species={person.species} 
        homeworld={person.homeworld} 
        affiliations={person.affiliations} 
        gender={person.gender ? person.gender : null}
        class={person.class ? person.class : null}
        about={person.wiki}/>)}  
    </section>
  )
}
