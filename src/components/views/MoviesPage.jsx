import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import imagesAPI from 'components/services/APIRequests';
import PropTypes from 'prop-types';

const MoviesPage = ({ GoBack }) => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const [moviesName, setMoviesName] = useState('');
  const [page] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const [movies, setMovies] = useState(null);

  const handleNameChange = e => {
    setMoviesName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (moviesName.trim() === '') {
      alert('введите имя фильма');
      return;
    }

    history.push({
      ...location,
      search: `query=${moviesName}`,
    });
  };

  useEffect(() => {
    if (location.search === '') {
      return;
    }

    const getFromlocationSearch = new URLSearchParams(location.search).get(
      'query'
    );

    setMoviesName(getFromlocationSearch);

    GoBack(`${url}${location.search}`);

    imagesAPI
      .fetchSearchByKeyword(getFromlocationSearch, page)
      .then(movies => {
        setMovies(movies.results);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [history, location, page, GoBack, url]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">найти</button>

        <input
          type="text"
          placeholder="Search movies and photos"
          onChange={handleNameChange}
          value={moviesName}
        />
      </form>
      {status === 'rejected' && <h1>{error.massage}</h1>}
      {status === 'resolved' && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`${url}/${movie.id}`}>{movie.original_title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

MoviesPage.propTypes = {
  GoBack: PropTypes.func.isRequired,
};

export default MoviesPage;
