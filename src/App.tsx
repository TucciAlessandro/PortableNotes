import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Board from "./components/Board";
import { MyThemeContextsProvider } from "./contexts/ThemeContexts";
import CreateNote from "./components/CreateNote";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const BoardContainer = styled.div`
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: lightblue;
`;

function App() {
  return (
    <BrowserRouter>
      <MyThemeContextsProvider>
        <Container>
          <Navbar />
          <BoardContainer>
            <Route exact path= "/" component={Board} />
            <Route exact path= "/create" component={CreateNote} />
          </BoardContainer>
        </Container>
      </MyThemeContextsProvider>
    </BrowserRouter>
  );
}

export default App;
