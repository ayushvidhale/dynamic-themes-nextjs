const appTheme = {
  colors: {
    primary: '#0070f3',
    background: {
      light: '#fff',
      dark: '#111',
    },
    text: {
      light: '#333',
      dark: '#fff',
    },
  },
  fonts: {
    body: 'Helvetica Neue, Arial, sans-serif',
    heading: 'Helvetica Neue, Arial, sans-serif',
  },
};

const darkTheme = {
  ...appTheme,
  colors: {
    ...appTheme.colors,
    background: {
      ...appTheme.colors.background,
      light: '#111',
      dark: '#fff',
    },
    text: {
      ...appTheme.colors.text,
      light: '#fff',
      dark: '#333',
    },
  },
};

const lightTheme = appTheme;

export { appTheme, darkTheme, lightTheme };