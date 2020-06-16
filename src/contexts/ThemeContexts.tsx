import React, { ReactNode, createContext, useState, useContext } from "react";
import { ThemeProvider, css } from "styled-components";

interface ThemeContextProviderProps {
  children: ReactNode;
}
const gradientDark = css`
  background: #2c3e50;
  background: -webkit-linear-gradient(to top, #4ca1af, #2c3e50);
  background: linear-gradient(to top, #4ca1af, #2c3e50);
`;

const gradientLight = css`
  background: #bdc3c7;
  background: -webkit-linear-gradient(to bottom, #2c3e50, #bdc3c7);
  background: linear-gradient(to bottom, #2c3e50, #bdc3c7);
`;

const darkTheme = {
  type: "dark",
  gradient: gradientDark,
  buttonVariant: {
    primary: "#2d9a4f",
    secondary: "#0068ad",
    danger: " #990000",
  },
};

// const theme = {
//   primaryColor: 'asd',
//   secondaryColor:' adsds',
//   accentColor: 'asdads'
// }

const lightTheme = {
  type: "light",
  gradient: gradientLight,
  buttonVariant: {
    primary: " #89e49b",
    secondary: "#4cb2f5",
    danger: "#f34f28",
  },
};

const DEFAULT_CONTEXT_VALUE = {
  toggleTheme: () => console.error("not in context"),
};

interface ThemeContextValue {
  toggleTheme: () => void;
}

const MyThemeContext = createContext<ThemeContextValue>(DEFAULT_CONTEXT_VALUE);

export const useMyThemeContext = () => useContext(MyThemeContext);

export const MyThemeContextsProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () =>
    setTheme((oldTheme) =>
      oldTheme.type === "light" ? darkTheme : lightTheme
    );

  return (
    <MyThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MyThemeContext.Provider>
  );
};
