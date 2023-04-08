import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchMovie } from '../Services/API';
import {
  StyledLi,
  StyledLink,
  StyledUl,
  StyledHeader,
} from '../StyledTags/Tags.styled';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName');

  useEffect(() => {
    if (movieName === '') return;

    async function getMovie() {
      const movies = await fetchMovie(movieName);
      setMovie(movies);
    }

    getMovie();
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ movieName: e.currentTarget.elements.movieName.value });
    e.currentTarget.reset();
  };

  console.log(movies);

  return (
    <>
      <StyledHeader> Search Movies </StyledHeader>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movieName" />
        <button type="submit">Search</button>
      </form>
      {movies && (
        <div>
          <StyledUl>
            {movies.map(movie => {
              return (
                <StyledLi key={movie.id}>
                  <StyledLink to={movie.id} state={{ from: location }}>
                    {movie.original_title}
                  </StyledLink>
                </StyledLi>
              );
            })}
          </StyledUl>
        </div>
      )}
    </>
  );
};

export { Movies };
