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
      api.abortFetch();
    };
  }, [id]);

  return (
    <div>
      {status === STATUS.REJECTED && <Error msg={error.message} />}
      {status === STATUS.PENDING && <Loading />}
      {status === STATUS.RESOLVED &&
        (!reviews.length ? (
          <p>We don't have any reviews for this movie.</p>
        ) : (
          <ul>
            {reviews.map(({ id, author, content }) => {
              return (
                <li key={id}>
                  <h4>Author: {author}</h4>
                  <div>{content}</div>
                </li>
              );
            })}
          </ul>
        ))}
    </div>
  );
};

export default Reviews;
