import React, { useEffect, useState } from 'react';
import axios from "axios";
import EpisodeCard from './EpisodeCard';
import { Grid } from "semantic-ui-react";

export default function EpisodeList(props) {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/episode/")
    .then (response => {
      setEpisodes(response.data.results);
    })
    .catch(error => console.log(`Uh oh Morty...`, error))
  }, []);
  if (!episodes) return <h3>Loading...</h3>;
  console.log("episodes: ", episodes);
  return (
      
    <Grid relaxed stackable columns={2}>
        {episodes.map((episode) =>
            <EpisodeCard {...episode} key = {episode.id} name={episode.name} />
        )}
    </Grid >
)

}