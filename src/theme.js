import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    // Core Colors
    primary: {
      50: "#EEF1F4",
      100: "#D5DDE6",
      200: "#AAB9CA",
      300: "#7F95AD",
      400: "#547191",
      500: "#3A506B", // Original primary
      600: "#2E4056",
      700: "#233041",
      800: "#17202B",
      900: "#0C1016",
    },
    secondary: {
      50: "#F0FAFA",
      100: "#D7F2F1",
      200: "#9EE4E3",
      300: "#5BC0BE", // Original secondary
      400: "#49A09E",
      500: "#3B817F",
      600: "#2C615F",
      700: "#1E4140",
      800: "#0F2020",
      900: "#051010",
    },
    accent: {
      light: "#1C2541",
      DEFAULT: "#0B132B", // Original accent
      dark: "#060D1F",
    },
    gray: {
      50: "#F5F5F5", // Original background
      100: "#EBEBEB",
      200: "#D9D9D9",
      300: "#BFBFBF",
      400: "#969696",
      500: "#6E7C7C", // Original lightText
      600: "#585858",
      700: "#3B3B3B",
      800: "#1C2541", // Original text
      900: "#0B132B",
    },
    success: {
      light: "#E6F6E6",
      DEFAULT: "#4CAF50",
      dark: "#388E3C",
    },
    error: {
      light: "#FDEAEA",
      DEFAULT: "#F44336",
      dark: "#C62828",
    },
    warning: {
      light: "#FFF3E0",
      DEFAULT: "#FF9800",
      dark: "#F57C00",
    },
    info: {
      light: "#E3F2FD",
      DEFAULT: "#2196F3",
      dark: "#1976D2",
    },
  },

  typography: {
    fonts: {
      main: "'Inter', sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    sizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
    },
    lineHeights: {
      tight: 1.2,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
  },

  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
  },

  breakpoints: {
    xs: "320px",
    sm: "576px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    DEFAULT:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
  },

  transitions: {
    DEFAULT: "all 0.3s ease",
    fast: "all 0.15s ease",
    slow: "all 0.5s ease",
  },

  radii: {
    none: "0",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },

  zIndices: {
    0: 0,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    auto: "auto",
  },
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fonts.main};
    font-weight: ${({ theme }) => theme.typography.weights.regular};
    line-height: ${({ theme }) => theme.typography.lineHeights.normal};
    background-color: ${({ theme }) => theme.colors.gray[50]};
    color: ${({ theme }) => theme.colors.gray[800]};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.typography.weights.semibold};
    line-height: ${({ theme }) => theme.typography.lineHeights.tight};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.sizes["5xl"]};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.sizes["4xl"]};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.sizes["3xl"]};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  a {
    color: ${({ theme }) => theme.colors.primary[500]};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.DEFAULT};

    &:hover {
      color: ${({ theme }) => theme.colors.secondary[300]};
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    html {
      font-size: 14px;
    }

    h1 {
      font-size: ${({ theme }) => theme.typography.sizes["4xl"]};
    }

    h2 {
      font-size: ${({ theme }) => theme.typography.sizes["3xl"]};
    }

    h3 {
      font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
    }
  }

  /* Remove default focus outline and add custom one */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary[500]};
    outline-offset: 2px;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray[100]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray[300]};
    border-radius: ${({ theme }) => theme.radii.full};
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary[100]};
    color: ${({ theme }) => theme.colors.primary[900]};
  }
`;

export default theme;
