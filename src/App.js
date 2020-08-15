import React from "react";
import { theme, ThemeProvider } from "@chakra-ui/core";

import "./App.css";

import LoginForm from "./components/LoginForm";
//import EnrollmentForm from "./components/EnrollmentForm";
//import FormikContainer from "./components/FomikContainer";
//import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <div className="App">
        <LoginForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
