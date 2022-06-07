import { lazy, Suspense } from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  NavLink,
  useParams,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import imagesAPI from 'services/APIRequests';
import styles from 'App.module.css';

const Cast = lazy(() => import('./Cast.jsx' /* webpackChunkName: "Cast" */));

const Reviews = lazy(() =>
  import('./Reviews.jsx' /* webpackChunkName: "Reviews" */)
);

const MovieDetailsPage = ({ page }) => {
  const history = useHistory();
  const { url, path } = useRouteMatch();
  const { moviesId } = useParams();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const [movie, setMovie] = useState(null);
  const [posterLink, setPosterLink] = useState(
    'https://blankposter.com/wp-content/uploads/2021/11/Andrea_Busi_Wack-1-860x1204.jpg'
  );
  const [unmount, setUnmount] = useState(false);

  useEffect(() => {
    if (unmount) {
      return;
    }

    imagesAPI
      .fetchFullMovieInfo(moviesId)
      .then(movie => {
        setMovie(movie);
        movie.poster_path !== null &&
          setPosterLink(`https://image.tmdb.org/t/p/w300${movie.poster_path}`);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });

    return () => {
      setUnmount(true);
    };
  }, [moviesId, unmount]);

  return (
    <div>
      {status === 'rejected' && <h1>{error.massage}</h1>}
      {status === 'resolved' && (
        <div>
          <hr />
          <div>
            <button type="button" onClick={() => history.push(page)}>
              Go back
            </button>
          </div>
          <hr />
          <img src={posterLink} alt={movie.title} />
          <hr />
          <div>
            Additional information
            <ul>
              <li>
                <NavLink
                  exact
                  className={styles.link}
                  activeClassName={styles.activeLink}
                  to={`${url}/casr`}
                >
                  Casr
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  className={styles.link}
                  activeClassName={styles.activeLink}
                  to={`${url}/reviews`}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
            <hr />
            <Suspense fallback={<h1>ЗАГРУЖАЕМ...</h1>}>
              <Switch>
                <Route path={`${path}/casr`} exact>
                  <Cast />
                </Route>
                <Route path={`${path}/reviews`} exact>
                  <Reviews />
                </Route>
              </Switch>
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
};

MovieDetailsPage.propTypes = {
  page: PropTypes.string.isRequired,
};

export default MovieDetailsPage;
