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
  justify-content: space-between;
  width: 100%;
  height: 5%;
  background-color: #dcf4fd;
  border-bottom: solid 2px #ffe7bf;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const StyledButton = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
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
      <StyledTitle>
        <StyledFontAwesomeIcon icon={faBookOpen} size="2x" onClick={redirect} />
        <h2>CREATE A NOTE SO YOU DON'T FORGET WHAT REALLY MATTERS </h2>
      </StyledTitle>
      <StyledButton>
        {!isCreating && (
          <Button color="primary" onClick={toggleCreatePage}>
            <StyledFontAwesomeIcon icon={faPlusSquare} />
            New Note
          </Button>
        )}
      </StyledButton>
    </StyledNavbar>
  );
}

export default Navbar;
