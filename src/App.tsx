import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Board from "./components/Board";
import { MyThemeContextsProvider } from "./contexts/ThemeContexts";
import { MyCreatePageContextsProvider } from "./contexts/CreateContexts";
import CreateNote from "./components/CreateNote";

const Container = styled.div`
  width: 100vw;
  display: flex;
  overflow: auto;
  flex-direction: column;
  height: 100vh;
`;

const BoardContainer = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: row;
  height: 100%;
  background-color: lightblue;
`;

function App() {
  return (
    <BrowserRouter>
      <MyThemeContextsProvider>
        <MyCreatePageContextsProvider>
          <Container>
            <Navbar />
            <BoardContainer>
              <Route exact path="/" component={Board} />
              <Route exact path="/create" component={CreateNote} />
            </BoardContainer>
          </Container>
        </MyCreatePageContextsProvider>
      </MyThemeContextsProvider>
    </BrowserRouter>
  );
}

export default App;
