import React from "react";

import "./App.css";
import FormikContainer from "./components/FomikContainer";
import { Theme, ThemeProvider } from "@chakra-ui/core";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <FormikContainer></FormikContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
