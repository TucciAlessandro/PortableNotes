import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Button from "./Button";
import { useHistory } from "react-router-dom";
import { useMyCreatePageContext } from "../contexts/CreateContexts";

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 5%;
  background-color: papayawhip;
  border-bottom: solid 2px black;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: end;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin: 0 1rem 0 1rem;
`;

function Navbar() {
  const { isCreating, toggleCreatePage } = useMyCreatePageContext();
  const history = useHistory();
  const redirect = () => {
    history.push("/");
  };

  return (
    <StyledNavbar>
      <StyledFontAwesomeIcon icon={faBookOpen} size="2x" onClick={redirect} />
      <h2>CREATE A NOTE SO YOU DON'T FORGET WHAT REALLY MATTERS </h2>
      {!isCreating &&  <Button color="primary" onClick={toggleCreatePage}>
        <StyledFontAwesomeIcon icon={faPlusSquare} />
        New Note
      </Button> }
     
    </StyledNavbar>
  );
}

export default Navbar;
