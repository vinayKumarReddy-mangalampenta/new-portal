import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import AllTracks from './components/AllTracks'
import ImprovingPage from './components/ImprovingPage'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/signup" component={SignUpForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/tracks/all" component={AllTracks} />
    <ProtectedRoute exact path="/track/:trackId" component={ImprovingPage} />
    <ProtectedRoute component={NotFound} />
  </Switch>
)
export default App
// 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
