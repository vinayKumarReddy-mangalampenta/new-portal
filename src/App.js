import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import Home from './components/Home'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/signup" component={SignUpForm} />
    <Route exact path="/" component={Home} />
  </Switch>
)
export default App
// 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
