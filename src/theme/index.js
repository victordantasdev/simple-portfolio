import typographyVariants from './typographyVariants';

export const colors = {
  modes: {
    light: {
      title: 'light',

      primary: {
        color: '#FFF8E6',
        contrastText: '#000',
      },

      secondary: {
        color: '#E9C46A',
        contrastText: '#fff',
      },

      background: {
        color: '#fff',
        contrastText: '#070C0E',
      },

      borders: {
        color: '#F1F1F1',
      },

      tertiary: {
        color: '#88989E',
        mainColor: '#070C0E',
      },

      error: {
        color: '#ED4032',

      },

      warning: {
        color: '#F77228',
      },
    },

    dark: {
      title: 'dark',

      primary: {
        color: '#2AAAE1',
        contrastText: '#fff',
      },

      secondary: {
        color: '#2F74C0',
        contrastText: '#fff',
      },

      background: {
        color: '#282A36',
        contrastText: '#F8F8F2',
      },

      borders: {
        color: '#181F22',
      },

      tertiary: {
        color: '#FFFFFF',
        mainColor: '#D5D5D5',
      },

      error: {
        color: '#EB5C50',

      },

      warning: {
        color: '#FB9E6B',
      },
    },
  },
};

export default {
  typographyVariants,
  breakpoints: {
    xs: 0,
    md: 768,
  },
  transition: '200ms ease-in-out',
  borderRadius: '8px',
  fontFamily: "'Fira Sans Condensed', sans-serif",
};
