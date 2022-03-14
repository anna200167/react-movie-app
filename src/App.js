import React from 'react'
import Heading from './Components/Heading'
import Card from './Components/Card'
import movies from './data/movies'


function App() {
  return (
    <>
      <Heading/>
     { movies.map((el)=>{
       return(
        <Card 
        imgsrc={el.poster}
        Title={el.Title}
       Released={el.Released}
       imdbRating={el.imdbRating}

      />
       )
      })}
      
    </>
    )
}

export default App