import React, { useContext } from 'react';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import Button from '../common/Button';
import StyledLink from '../common/StyledLink';
import WrapperCabecalho from './styles/WrapperCabecalho';

const links = [
  {
    text: 'Sobre mim',
    url: '/about',
  },

  {
    text: 'Contato',
    url: '/contato',
  },
];

export default function Cabecalho({ toggleTheme }) {
  const { colorTheme } = useContext(ThemeContext);

  return (
    <WrapperCabecalho>
      <WrapperCabecalho.LeftSide>
        <StyledLink
          href="/"
          style={{ color: '#fff' }}
        >
          {'<Me />'}
        </StyledLink>
      </WrapperCabecalho.LeftSide>

      {/* ============= */}

      <WrapperCabecalho.RightSide>
        <Button onClick={toggleTheme}>
          {colorTheme.title === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </Button>
        {links.map((link) => (
          <li key={link.text}>
            <StyledLink
              href={link.url}
              style={{ marginLeft: '38px' }}
            >
              {link.text}
            </StyledLink>
          </li>
        ))}
      </WrapperCabecalho.RightSide>
    </WrapperCabecalho>
  );
}

Cabecalho.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
