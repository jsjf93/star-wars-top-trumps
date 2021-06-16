import NavigationBar from './components/Layout/Navbar/NavigationBar';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router';
import Game from './pages/Game/Game';
import Help from './pages/Help/Help';

function App() {
  return (
    <div className="app">
      <NavigationBar />

      <Switch>
        <Route exact path="/">
          <Game />
        </Route>
        <Route exact path="/help">
          <Help />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
