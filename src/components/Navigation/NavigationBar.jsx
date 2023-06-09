import { StyledLink, StyledLi, StyledUl } from './NavigationLink.styled';
const NavigationBar = () => {
  return (
    <nav>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/">Home</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/movies">Movies</StyledLink>
        </StyledLi>
      </StyledUl>
    </nav>
  );
};

export { NavigationBar };
