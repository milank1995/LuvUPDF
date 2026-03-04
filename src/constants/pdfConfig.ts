export const PDF_CONFIG = {
  MAX_FILE_SIZE: 100 * 1024 * 1024, // 100MB
  MAX_FILE_COUNT: 20,
  ACCEPTED_TYPES: {
    'application/pdf': ['.pdf'],
  },
};

export const BRAND_COLORS = {
  primary: '#E8445A',
  primarySurface: '#FFF0F2',
  primaryBorder: '#FFD6DB',
  primaryShadow: 'rgba(232, 68, 90, 0.28)',

  secondary: '#4A4A6A',
  secondarySurface: '#F8F8FC',
  secondaryBorder: '#EEEEF5',

  text: {
    dark: '#1A1A2E',
    muted: '#8888A8',
    light: '#4A4A6A',
  },

  success: '#16A34A',
  successSurface: '#F0FDF4',
};

export const UI_STYLES = {
  borderRadius: {
    base: '12px',
    large: '16px',
    xl: '20px',
    full: '9999px',
  },
  transitions: {
    base: 'transition-all duration-200',
    slow: 'transition-all duration-300',
  },
};
