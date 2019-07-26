import React from 'react';
import { Grid, Card, Image } from "semantic-ui-react";

export default function EpisodeCard (props) {
  
  return (
  <Grid.Column>
      <Card>
        <Card.Content>
            <Card.Header>{props.name}</Card.Header>
            <Card.Meta> {props.episode} </Card.Meta>
            <Card.Description> 
                <div>Aired: {props.air_date}</div>
                <div>Featuring {props.characters.length} characters</div>
              </Card.Description>
        </Card.Content>
      </Card>
  </Grid.Column>
  )
}
