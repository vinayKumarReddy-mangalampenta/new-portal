import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import AllTracks from './components/AllTracks'
import ImprovingPage from './components/ImprovingPage'
import SessionPage from './components/SessionPage'
import Ibcom from './components/Ibcom'
import Profile from './components/Profile'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/signup" component={SignUpForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/tracks/all" component={AllTracks} />
      <ProtectedRoute exact path="/track/:trackId" component={ImprovingPage} />
      <ProtectedRoute
        exact
        path="/track/:trackId/course"
        component={SessionPage}
      />
      <ProtectedRoute exact path="/profile/" component={Profile} />

      <ProtectedRoute component={NotFound} />
    </Switch>
    <Ibcom />
  </>
)
export default App

// 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
