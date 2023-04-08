import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: black;
  font-size: 20px;
  text-decoration: none;

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
export { StyledHeader, StyledLi, StyledLink, StyledUl };
