import { fetchTrendMovies } from 'Services/API';
import { useEffect, useState } from 'react';
import {
  StyledLi,
  StyledLink,
  StyledUl,
  StyledHeader,
} from '../StyledTags/Tags.styled';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrendMovies().then(setTrendMovies);
  }, []);

  return (
    <>
      <div>
        <StyledHeader> Todays Trend </StyledHeader>
        <StyledUl>
          {trendMovies.map(movie => {
            return (
              <StyledLi key={movie.id}>
                <StyledLink
                  to={`movies/${movie.id}`}
                  state={{ from: location }}
                >
                  {movie.original_title}
                </StyledLink>
              </StyledLi>
            );
          })}
        </StyledUl>
      </div>
    </>
  );
};
export { Home };
