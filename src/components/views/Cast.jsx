import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import imagesAPI from 'components/services/APIRequests';

const Cast = () => {
  const { moviesId } = useParams();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const [cast, setCast] = useState(null);
  const [profilePath] = useState(
    'https://blankposter.com/wp-content/uploads/2021/11/Andrea_Busi_Wack-1-860x1204.jpg'
  );
  const [unmount, setUnmount] = useState(false);

  useEffect(() => {
    if (unmount) {
      return;
    }

    imagesAPI
      .fetchFullMovieCredits(moviesId)
      .then(credits => {
        setCast(credits.cast);
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
        <ul>
          {cast.map(({ profile_path, name, character, id }) => {
            return (
              <li key={id}>
                <img
                  width={200}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : profilePath
                  }
                  alt={name}
                />
                <p>{name}</p>
                <p>{character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cast;
