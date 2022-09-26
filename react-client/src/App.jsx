import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "./GlobalStyle";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
