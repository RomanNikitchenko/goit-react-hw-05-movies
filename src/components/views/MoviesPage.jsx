import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import imagesAPI from 'components/services/APIRequests';

const MoviesPage = () => {
  const { url } = useRouteMatch();
  const [moviesName, setMoviesName] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const [movies, setMovies] = useState(null);
  const [unmount, setUnmount] = useState(true);

  const handleNameChange = e => {
    setMoviesName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (moviesName.trim() === '') {
      alert('введите имя изображения');
      return;
    }

    setUnmount(false);
  };

  useEffect(() => {
    if (unmount) {
      return;
    }

    imagesAPI
      .fetchSearchByKeyword(moviesName)
      .then(movies => {
        setMovies(movies.results);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });

    return () => {
      setUnmount(true);
    };
  }, [unmount, moviesName]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <Link to={`${url}/${moviesName}`}>Найти</Link>
        </button>

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

export default MoviesPage;
