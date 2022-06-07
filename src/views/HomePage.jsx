import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import imagesAPI from 'services/APIRequests';
import PropTypes from 'prop-types';

const HomePage = ({ GoBack }) => {
  const { url } = useRouteMatch();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const [movies, setTMovies] = useState(null);
  const [unmount, setUnmount] = useState(false);

  useEffect(() => {
    if (unmount) {
      return;
    }

    GoBack(`${url}`);

    imagesAPI
      .fetchTrending()
      .then(trendingMovies => {
        setTMovies(trendingMovies.results);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });

    return () => {
      setUnmount(true);
    };
  }, [unmount, GoBack, url]);

  return (
    <div>
      {status === 'rejected' && <h1>{error.massage}</h1>}
      {status === 'resolved' && (
        <div>
          <h1>Trending today</h1>
          <ul>
            {movies.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`${url}movies/${movie.id}`}>
                    {movie.original_title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

HomePage.propTypes = {
  GoBack: PropTypes.func.isRequired,
};

export default HomePage;
