// color design tokens export
export const colorTokens = {
  grey: {
    // kolor navbara i tych 4 komponentow
    0: "#C58940",
    //tlo z tylu
    10: "#FAF8F1",
    //wyszukiwarka i nazwa konta
    50: "#f2f3f6",
    //nazwa konta i friendlist w darkmode
    100: "#ebedf3",
    // lokalizacja social w darkmode
    200: "#e9ebef",

    // nazwa lokalizacji social network itp w lightmode
    300: "#ebedf3",
    // ikonki image clip attachment audio
    400: "#eceff6",
    // ikonkig lokalizacji teczki twitter social profiles nazwa chlopa
    500: "#e1e7f4",

    600: "rgb(250,246,246)",

    //nazwa uzytykownika zalogowanego/lampka/friendlist
    700: "#333333",

    //kolor komponentow w darkmode
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: "#060707",
    300: "#66E6FC",
    400: "#33DDFB",
    500: "#E5BA73",
    600: "#00A0BC",
    700: "#006B7D",
    800: "#E5BA73",
    900: "#001519",
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[900],
              alt: colorTokens.grey[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[50],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[50],
            },
            background: {
              default: colorTokens.grey[10],
              alt: colorTokens.grey[0],
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
