import React from "react";
import "./App.css";
import Root from "./Root";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Cover from './components/Cover';

function App() {
  return (
    <Root>
      <div>
        <Header />
        <Cover />
        <Menu />
      </div>
    </Root>
  );
}

export default App;
