import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList'
import WelcomePage from './WelcomePage';
import LocationsList from './LocationsList';

export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
      <Route path='/characters' render={props => <CharacterList {...props} /> }/>

      <Route path='/locations' render={props => <LocationsList {...props} />} />
      <Route path="/" exact 
        render={props => <WelcomePage {...props} />} />
      {/* <Route path="/episodes" component={} /> */}
    </Switch>
  </div>

}
