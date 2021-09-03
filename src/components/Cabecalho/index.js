import React, { useContext } from 'react';
import Switch from 'react-switch';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import WrapperCabecalho from './styles/WrapperCabecalho';
import { Moon, Sun } from '../../assets/Icons/SwichIcons';
import Link from '../common/Link';

const links = [
  {
    text: 'Sobre mim',
    url: '/sobre',
  },

  {
    text: 'Contato',
    url: '/contato',
  },
];

export default function Cabecalho({ toggleTheme }) {
  const theme = useContext(ThemeContext);

  return (
    <WrapperCabecalho>
      <WrapperCabecalho.LeftSide>
        <Link
          href="/"
          style={{ color: '#fff' }}
        >
          {'<Me />'}
        </Link>
      </WrapperCabecalho.LeftSide>

      <WrapperCabecalho.RightSide>
        <Switch
          onChange={toggleTheme}
          checked={theme.title === 'dark'}
          checkedIcon={<Sun />}
          uncheckedIcon={<Moon />}
          onColor={theme.secondary.color}
          offColor={theme.secondary.color}
        />
        {links.map((link) => (
          <li key={link.text}>
            <Link
              href={link.url}
              style={{ marginLeft: '38px' }}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </WrapperCabecalho.RightSide>
    </WrapperCabecalho>
  );
}

Cabecalho.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
