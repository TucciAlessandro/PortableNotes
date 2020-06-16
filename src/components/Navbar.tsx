import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 5%;
  background-color: papayawhip;
  border-bottom: solid 2px black;
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin: 2rem;
`;
function Navbar() {
  return (
    <StyledNavbar>
      <StyledFontAwesomeIcon icon={faBookOpen} size="2x" />
      <h2>CREATE A NOTE SO YOU DON'T FORGET WHAT REALLY MATTERS </h2>
    </StyledNavbar>
  );
}

export default Navbar;
