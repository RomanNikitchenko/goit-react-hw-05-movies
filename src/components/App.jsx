import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
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

const App = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>

      <Suspense fallback={<h1>ЗАГРУЖАЕМ...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:moviesId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
