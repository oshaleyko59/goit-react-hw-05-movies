import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'service/fetchTheMovieDb';
import Error from 'components/Error/Error';
import Loading from 'components/Loading/Loading';
import { STATUS } from 'common/constants';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  //for fetch error
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(STATUS.PENDING);
    api
      .fetchMovieReviews(id)
      .then(({ results }) => {
        setReviews(results);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(STATUS.REJECTED);
        setReviews([]);
      });

    return () => {
      console.log('Unmounting phase, aborting...');
      api.abortFetch();
    };
  }, [id]);

  return (
    <div>
      {status === STATUS.REJECTED && <Error msg={error.message} />}
      {status === STATUS.PENDING && <Loading />}
      {status === STATUS.RESOLVED && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <div>Author: {author}</div>
                <div>{content}</div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
