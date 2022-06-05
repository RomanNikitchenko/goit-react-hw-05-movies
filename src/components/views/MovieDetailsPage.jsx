import { useState, useEffect } from 'react';
import { NavLink, Link, useParams, Switch, Route } from 'react-router-dom';
import imagesAPI from 'components/services/APIRequests';
import Cast from './Cast';
import Reviews from './Reviews';
import styles from 'components/App.module.css';

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const [movie, setMovie] = useState(null);
  const [posterLink, setPosterLink] = useState(
    'https://blankposter.com/wp-content/uploads/2021/11/Andrea_Busi_Wack-1-860x1204.jpg'
  );

  useEffect(() => {
    setStatus('pending');

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
  }, [moviesId]);

  return (
    <div>
      {status === 'pending' && <h1>Pending...</h1>}
      {status === 'rejected' && <h1>{error.massage}</h1>}
      {status === 'resolved' && (
        <div>
          <hr />
          <div>
            <button type="button">
              <Link to="/">на главную</Link>
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
                  className={styles.link}
                  activeClassName={styles.activeLink}
                  to={`/movies/${moviesId}/casr`}
                >
                  Casr
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={styles.link}
                  activeClassName={styles.activeLink}
                  to={`/movies/${moviesId}/reviews`}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
            <hr />
            <Switch>
              <Route path="/movies/:moviesId/casr" exact>
                <Cast />
              </Route>
              <Route path="/movies/:moviesId/reviews" exact>
                <Reviews />
              </Route>
            </Switch>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
