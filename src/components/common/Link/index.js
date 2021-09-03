import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const Link = ({ children, href, ...props }) => (
  <NextLink href={href} passHref>
    <StyledLink {...props}>
      {children}
    </StyledLink>
  </NextLink>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
