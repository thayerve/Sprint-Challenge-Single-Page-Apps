import React from 'react';
import { Grid, Card } from "semantic-ui-react";

export default function LocationCard ({ name, type, dimension, residents }) {
  // image={image}
  return (
    <Grid.Column>
      <Card>
        <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>{type} </Card.Meta>
            <Card.Description>{dimension}, {residents}
              </Card.Description>
        </Card.Content>
      </Card>
  </Grid.Column>
  )
}
