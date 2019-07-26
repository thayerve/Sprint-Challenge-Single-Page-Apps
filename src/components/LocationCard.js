import React from 'react';
import { Grid, Card } from "semantic-ui-react";

export default function LocationCard (props) {
  // image={image}
  return (
    <Grid.Column>
      <Card>
        <Card.Content>
            <Card.Header>{props.name}</Card.Header>
            <Card.Meta>{props.type} </Card.Meta>
            <Card.Description>
              <div>Dimension: {props.dimension}</div> 
            <div>Residents: {props.residents.length}</div>
              </Card.Description>
        </Card.Content>
      </Card>
  </Grid.Column>
  )
}
