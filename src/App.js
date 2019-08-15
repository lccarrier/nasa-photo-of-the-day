import React from "react";
import "./App.css";
import Nasa from "./components/Nasa"
import styled from 'styled-components'
import GlobalStyle from './components/Global';

function App() {

  return (
    <div>
      <Nasa />
      <GlobalStyle />
    </div>
  );
}

export default App;