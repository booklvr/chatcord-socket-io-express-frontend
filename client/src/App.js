import { GlobalStyle } from './globalStyles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Join from './pages/Join'
import Chatroom from './pages/Chatroom'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path='/' component={Join} exact></Route>
        <Route path='/chat' component={Chatroom} exact></Route>
      </Switch>
    </Router>
  )
}

export default App
