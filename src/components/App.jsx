import { Switch, Route } from "react-router-dom";
import Navigation from './Navigation/Navigation';
import HomeView from './views/HomeView';
import Movies from './views/Movies';
import NotFoundView from './views/HomeView';


const App = () => {
  return (
    <div >

      <header>
        <Navigation />
      </header>

      <Switch>
        
        <Route path='/' exact>
          <HomeView />
        </Route>

        <Route path='/movies' exact>
          <Movies />
        </Route>

        <Route>
          <NotFoundView />
        </Route>

      </Switch>
    </div>
  );
};

export default App;
