export const THEMES = [
  {
    id: 'cyberpunk',
    name: 'Cyber Emerald',
    primaryColor: '#00ffcc',
    secondaryColor: '#ff00ff',
    colors: {
      primary: '#00ffcc',
      secondary: '#ff00ff',
      bgDark: '#0e0f14',
      bgDarker: '#08090c',
      lights: {
        ambient: '#1a1835',
        directional: '#8aa8ff',
        spotDesk: '#00f3ff',
        spotCert: '#ff00cc',
        lamp: '#00ffcc',
      }
    }
  },
  {
    id: 'sunset',
    name: 'Neon Sunset',
    primaryColor: '#ff5e62',
    secondaryColor: '#ff9966',
    colors: {
      primary: '#ff5e62',
      secondary: '#ff9966',
      bgDark: '#140e17',
      bgDarker: '#0c0810',
      lights: {
        ambient: '#251835',
        directional: '#ffaa7f',
        spotDesk: '#ff00ff',
        spotCert: '#ff9966',
        lamp: '#ff5e62',
      }
    }
  },
  {
    id: 'ocean',
    name: 'Deep Ocean',
    primaryColor: '#00d2ff',
    secondaryColor: '#0066ff',
    colors: {
      primary: '#00d2ff',
      secondary: '#0066ff',
      bgDark: '#0b132b',
      bgDarker: '#050814',
      lights: {
        ambient: '#0e1832',
        directional: '#66a3ff',
        spotDesk: '#00d2ff',
        spotCert: '#7b2cbf',
        lamp: '#00d2ff',
      }
    }
  },
  {
    id: 'amber',
    name: 'Vibrant Amber',
    primaryColor: '#ffb703',
    secondaryColor: '#fb8500',
    colors: {
      primary: '#ffb703',
      secondary: '#fb8500',
      bgDark: '#14110f',
      bgDarker: '#0c0a09',
      lights: {
        ambient: '#241c11',
        directional: '#ffe0b2',
        spotDesk: '#fb8500',
        spotCert: '#ffb703',
        lamp: '#ffb703',
      }
    }
  }
];

export const getThemeById = (id) => {
  return THEMES.find(theme => theme.id === id) || THEMES[0];
};
