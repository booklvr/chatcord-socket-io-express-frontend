import { GlobalStyle } from './globalStyles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Join from './pages/Join'
import Chatroom from './pages/Chatroom'
import io from 'socket.io-client'

const socket = io.connect('/')

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact>
          <Join socket={socket} />
        </Route>
        <Route
          path='/chat/:room/:username'
          exact
          render={(props) => <Chatroom {...props} socket={socket} />}
        ></Route>
      </Switch>
    </Router>
  )
}

export default App
