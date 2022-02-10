import React from 'react'
import { Card } from './Card'

export const Main = () => {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch("https://swapi.dev/api/people/")
    .then(response => response.json())
    .then(data => setData(data.results))
  }, [])
  
  console.log("render")

  return (
    <section className='cards--container'>
      {data.map(person => <Card key={person.name} name={person.name}/>)}  
    </section>
  )
}
