import React from 'react';
import { Grid, Card, Image } from "semantic-ui-react";

export default function EpisodeCard (props) {
  const { episode } = props;
  return (
  <Grid.Column>
      <Card>
        <Card.Content>
            <Card.Header>{episode.name}</Card.Header>
            <Card.Meta>card meta </Card.Meta>
            <Card.Description> card description
              </Card.Description>
        </Card.Content>
      </Card>
  </Grid.Column>
  )
}
