import { useState, lazy, Suspense } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
// import HomePage from './views/HomePage';
// import MoviesPage from './views/MoviesPage';
// import MovieDetailsPage from './views/MovieDetailsPage';

const HomePage = lazy(() =>
  import('./views/HomePage.jsx' /* webpackChunkName: "HomePage" */)
);

const MoviesPage = lazy(() =>
  import('./views/MoviesPage.jsx' /* webpackChunkName: "MoviesPage" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.jsx' /* webpackChunkName: "MovieDetailsPage" */
  )
);

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

const App = () => {
  const [page, setPage] = useState('/');

  const handlChangeUrl = name => {
    setPage(name);
  };

  return (
    <div>
      <header>
        <Navigation />
      </header>

      <Suspense fallback={<h1>ЗАГРУЖАЕМ...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage GoBack={handlChangeUrl} />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage GoBack={handlChangeUrl} />
          </Route>

          <Route path="/movies/:moviesId">
            <MovieDetailsPage page={page} />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
