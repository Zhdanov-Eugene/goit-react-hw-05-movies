import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as moviesApi from '../../services/movies-api';
import styles from './Reviews.module.css';

export default function Reviews({ movieId }) {
  const [review, setReview] = useState([]);

  useEffect(() => {
    moviesApi
      .fetchMovieReview(movieId)
      .then(({ results }) => setReview(results));
  }, [movieId]);

  return (
    <ol className={styles.list}>
      {review.map(({ id, author, content }) => (
        <li key={id}>
          <h4 className={styles.title}>Author: {author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ol>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};