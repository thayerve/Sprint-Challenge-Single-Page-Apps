import React from 'react';
import { Grid, Card } from "semantic-ui-react";

export default function CharacterCard (props) {
  const { character } = props;
  return (
  <span>todo: location</span>
  )
}


 ////////////////////////
////////////////////////

// function SWCard(props) {
//   const name = props.name;
//   const gender = props.gender;
//   const numFilms = props.numFilms;
  
//   console.log("SWCard created for ", name);

// return(
//   <Grid.Column>
//       <Card>
//       <Card.Content>
//           <Card.Header>{name}</Card.Header>
//           <Card.Meta>Gender: {gender}</Card.Meta>
//           <Card.Description>{name} is a character who appears in {numFilms} Star Wars films.</Card.Description>
//       </Card.Content>
//       </Card>
//   </Grid.Column>
// )
// }

// export default SWCard