import React from "react";
import { Theme, ThemeProvider } from "@chakra-ui/core";

import "./App.css";
import FormikContainer from "./components/FomikContainer";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      {/*</div>FormikContainer></FormikContainer>*/}
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
