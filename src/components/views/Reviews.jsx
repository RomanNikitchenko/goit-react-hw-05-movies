import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import imagesAPI from 'components/services/APIRequests';

const Reviews = () => {
  const { moviesId } = useParams();
  const [unmount, setUnmount] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (unmount) {
      return;
    }

    imagesAPI
      .fetchFullMovieReviews(moviesId)
      .then(reviews => {
        setReviews(reviews.results);
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
          {reviews.length === 0 && (
            <p>We don't have any reviews for this movie</p>
          )}
          {reviews.length > 0 && (
            <ul>
              {reviews.map(({ author = '', content = '', id }) => {
                return (
                  <li key={id}>
                    <h3>{`Author: ${author}`}</h3>
                    <p>{content}</p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Reviews;
