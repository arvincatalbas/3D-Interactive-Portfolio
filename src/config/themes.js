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
  },
  {
    id: 'light',
    name: 'Crystal Light',
    primaryColor: '#4f46e5',
    secondaryColor: '#ec4899',
    colors: {
      primary: '#4f46e5',
      secondary: '#ec4899',
      bgDark: '#f8fafc',
      bgDarker: '#f1f5f9',
      floor: '#cbd5e1',
      wall: '#e2e8f0',
      grid1: '#cbd5e1',
      grid2: '#94a3b8',
      rug: '#818cf8',
      lights: {
        ambient: '#ffffff',
        directional: '#ffffff',
        spotDesk: '#a5b4fc',
        spotCert: '#fbcfe8',
        lamp: '#4f46e5',
      }
    }
  }
];

export const getThemeById = (id) => {
  return THEMES.find(theme => theme.id === id) || THEMES[0];
};
