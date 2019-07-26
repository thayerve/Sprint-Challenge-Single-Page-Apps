import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList'
import WelcomePage from './WelcomePage';
import LocationsList from './LocationsList';
import EpisodeList from './EpisodeList';

export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
      <Route path='/characters' render={props => <CharacterList {...props} /> }/>
      <Route path='/locations' render={props => <LocationsList {...props} />} />
      <Route path='/episodes' render={props => <EpisodeList {...props} />} />
      <Route path="/" exact component={ WelcomePage }/>
    </Switch>
  </div>

}
