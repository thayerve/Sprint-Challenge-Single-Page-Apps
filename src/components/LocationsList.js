import React, { useEffect, useState } from 'react';
import axios from "axios";
import LocationCard from './LocationCard';
import { Grid } from "semantic-ui-react";

export default function LocationsList(props) {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
      axios
      .get("https://rickandmortyapi.com/api/location/")
      .then (response => {
        setLocations(response.data.results);
        
      })
      .catch(error => console.log(`Uh oh Morty...`, error))
    }, []);
    if (!locations) return <h3>Loading...</h3>;
    console.log("locations: ", locations);
    return (
        
      <Grid relaxed stackable columns={2}>
          {locations.map((location) =>
              <LocationCard {...location} key = {location.id} />
          )}
      </Grid >
  )
}
