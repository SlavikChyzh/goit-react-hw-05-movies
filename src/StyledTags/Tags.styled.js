import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: black;
  font-size: 20px;
  text-decoration: none;
  margin: 20px;

  &.active {
    color: orange;
  }
`;

const StyledLi = styled.li`
  list-style: none;
  margin-left: 35px;
`;

const StyledHeader = styled.h3`
  display: flex;
  font-size: 30;
  justify-content: center;
`;
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
`;
const StyledActorUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 1em;
`;
const StyledFilmImg = styled.img`
  float: left;
  padding: 30px;
  height: 300px;
  border-radius: 5px;
`;
export {
  StyledHeader,
  StyledLi,
  StyledLink,
  StyledUl,
  StyledActorUl,
  StyledFilmImg,
};
