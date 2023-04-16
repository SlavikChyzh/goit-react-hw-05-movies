import { Actor } from 'components/Actor/Actor';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledActorUl, StyledLi } from 'StyledTags/Tags.styled';

import { fetchMovieActors } from '../../Services/API';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      fetchMovieActors(movieId).then(response => {
        setCast(response);
      });
    }
    return;
  }, [movieId]);

  return (
    <>
      <StyledActorUl className="actors">
        {cast.length ? (
          cast?.map(actor => {
            return (
              <StyledLi key={actor.cast_id}>
                <Actor actor={actor} />
              </StyledLi>
            );
          })
        ) : (
          <p>No Cast</p>
        )}
      </StyledActorUl>
    </>
  );
};

export { Cast };
