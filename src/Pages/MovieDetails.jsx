import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'Services/API';
import { StyledFilmImg, StyledLink } from 'StyledTags/Tags.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const firstRender = useRef(true);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      fetchMovieDetails(movieId).then(response => {
        setMovie(response);
      });
    }
  });

  const { poster_path, original_title, vote_average, overview, genres } = movie;
  return (
    <>
      <div>
        <Link to={location.state?.from ?? '/'}>Go back</Link>
        <div>
          <div>
            <StyledFilmImg
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={original_title || 'no images'}
            />
          </div>
          <div>
            <h1>{original_title}</h1>
            <p>{`User Score:  ${(vote_average * 10).toFixed(0)}%`}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres?.map(genre => (
                <li key={genre.id}>{genre.name},</li>
              ))}
            </ul>
          </div>
          <h4>Additional information</h4>
          <div className="movie_additional">
            <StyledLink
              className="link_additional"
              to="cast"
              state={{ ...location.state }}
            >
              Cast
            </StyledLink>
            <StyledLink
              className="link_additional"
              to="reviews"
              state={{ ...location.state }}
            >
              Reviews
            </StyledLink>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export { MovieDetails };
