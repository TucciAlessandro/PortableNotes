import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Board from "./components/Board";
import { MyThemeContextsProvider } from "./contexts/ThemeContexts";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const BoardContainer = styled.div`
  width: 100vw;
  display: flex;
  height: 100vh;
  background-color: lightblue;
`;

function App() {
  return (
    <MyThemeContextsProvider>
      <Container>
        <Navbar />
        <BoardContainer>
          <Board />
        </BoardContainer>
      </Container>
    </MyThemeContextsProvider>
  );
}

export default App;
