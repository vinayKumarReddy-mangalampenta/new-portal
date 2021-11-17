import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'

const App = () => (
  <Switch>
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={SignUpForm} />
  </Switch>
)
export default App
