module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F6F52',
        secondary: '#739072',
        accent: '#A9B388',
        background: '#F8F7F4',
        surface: '#FFFFFF',
        border: '#D8E2D0',
        textPrimary: '#2F3E2F',
        textSecondary: '#5E6B5E',
        success: '#5C8D5E',
        error: '#C75C5C',
      },
      borderRadius: { DEFAULT: '0.5rem' },
      boxShadow: {
        DEFAULT: '0 2px 8px rgba(0,0,0,0.08)',
        md: '0 4px 16px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
};
