import React from "react";
import Header from "./common/Header";
import Routes from "./Routing/Routes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
