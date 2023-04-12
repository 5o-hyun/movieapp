export const colors = {
  color: '#aaaaaa',
  subColor: '#61dafb',
  backgroundColor: '#111111', //${({ theme }) => theme.colors.backgroundColor};
  gray: {
    100: '#f1f1f0',
    200: '#d9d9d6',
    300: '#c8c9c7',
    400: '#b1b3b3',
    500: '#97999b',
    600: '#75787b',
    700: '#54565a',
    800: '#212721',
  },
  white: '#ffffff',
  black: '#000000',
};

const deviceSizes = {
  //   fold: '359px',
  //   mobile: '589px',
  mobile: '767px',
  tablet: '1023px',
  desktop: '1919px',
};

export const devices = {
  //   fold: `screen and (max-width: ${deviceSizes.fold})`,
  //   mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`, // @media ${({ theme }) => theme.devices.tablet}
  desktop: `screen and (max-width: ${deviceSizes.desktop})`,
};

export const spacing = {
  minute: '0.2rem',
  microTiny: '0.4rem', // ${({ theme }) => theme.spacing.microTiny}
  tiny: '0.8rem',
  tinySmall: '1rem',
  small: '1.2rem',
  smallMedium: '1.6rem',
  base: '2rem',
  medium: '2.4rem',
  large: '2.8rem',
  bigLarge: '4rem',
};

export const theme = {
  colors,
  devices,
  spacing,
};

export default theme;
