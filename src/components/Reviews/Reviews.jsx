import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'Services/API';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      fetchMovieReviews(movieId, '/reviews').then(response => {
        setReviews(response);
      });
    }
    return;
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.length ? (
          reviews.map(response => {
            const { id, author, content } = response;
            return (
              <li key={id}>
                <h3>{`Author: ${author}`}</h3>
                <p>{content}</p>
              </li>
            );
          })
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    </div>
  );
};

export { Reviews };
