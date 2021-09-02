import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${({ theme }) => theme.primary.contrastText};
  text-decoration: none;
  background: 
    linear-gradient(to right, transparent, transparent),
    linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1));
    background-size: 100% 2px, 0 2px;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 400ms;
  
  &:hover,
  &:focus {
    background-size: 0 2px, 100% 2px;
  }
`;

export default StyledLink;
