import React, { useEffect, useState } from 'react';
import axios from "axios";
import CharacterCard from './CharacterCard';
import { Grid } from "semantic-ui-react";

export default function CharacterList(props) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then (response => {
      setCharacters(response.data.results);
    })
    .catch(error => console.log(`Uh oh Morty...`, error))
  }, [characters]);
  if (!characters) return <h3>Loading...</h3>;
  console.log("characters: ", characters);
  return (
      
    <Grid relaxed stackable columns={2}>
        {characters.map((character) =>
            <CharacterCard {...props} key = {character.id} />
        )}
    </Grid >
)

}
 ////////////////////////////////
////////////////////////////////


// export default function CardGrid() {
//   const [people, setPeople] = useState([]);

//   useEffect(() => {
//       axios.get("https://henry-mock-swapi.herokuapp.com/api")
//           .then(response => {
//               console.log("raw response: ", response);
//               setPeople(response.data.results);
//           })
//           .catch(error => console.log(`That's no app...`, error))

//   }, []);
//   if (!people) return <h3>Loading...</h3>;
//   console.log('People: ', people);
//   return (
      
//       <Grid relaxed stackable columns={4}>
//           {people.map((person) =>
//               <SWCard key = {person.name} name={person.name} gender={person.gender} numFilms={person.films.length}/>
//           )}
//       </Grid >
//   )
// }

