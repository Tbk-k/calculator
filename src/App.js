import "./App.css";
import Calculator from "./components/calculator/Calculator";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, thirdTheme } from "./assets/theme";
import React, { useEffect, useState } from "react";

function App() {
  const [mode, setMode] = useState(1);
  const [theme, setTheme] = useState(darkTheme);
  const handleMode = (e) => {
    setMode(e.target.value);
  };

  useEffect(() => {
    switch (mode) {
      case "2":
        setTheme(lightTheme);
        break;
      case "3":
        setTheme(thirdTheme);
        break;
      default:
        setTheme(darkTheme);
        break;
    }
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Calculator mode={mode} change={handleMode} />
    </ThemeProvider>
  );
}
export default App;
