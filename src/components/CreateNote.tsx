import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button";
import { useMyCreatePageContext } from "../contexts/CreateContexts";
import { findByTitle } from "@testing-library/react";

const StyledTitleField = styled.input`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 20vw;
  height: 5vh;
  border-radius: 10px;
  background: papayawhip;
  border: 1px solid white;
  outline: none;
  margin: 1rem;
  &:focus {
    transition: 1s ease-in-out;
    background: yellow;
  }
`;

const InputCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 60%;
  background: black;
`;
const StyledTextField = styled.textarea`
  display: flex;
  border-radius: 19px;
  background: papayawhip;
  border: 1px solid white;
  outline: none;
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 20vh;
  margin: 1rem;
  &:focus {
    transition: 1s ease-in-out;
    background: yellow;
  }
`;

const CreatePageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: blue;
`;

interface Note {
  id: string;
  title: string;
  text: string;
}

interface CreateNoteProps {
  addNote: (note: any) => void;
  handleChangeTitle: (e: any) => void;
  handleChangeText: (e: any) => void;
  handleClick: () => void;
  title: string;
  text: string;
  id: string;
}

function CreateNote({
  handleChangeTitle,
  handleChangeText,
  handleClick,
  title,
  text,
  id,
}: CreateNoteProps) {
  const { toggleCreatePage } = useMyCreatePageContext();

  const handleKeyPress = (event: any) => {
    event.persist();
    if (event.keyCode == 13) {handleClick()}
  };

  return (
    <CreatePageContainer>
      <InputCardContainer>
        <StyledTitleField
          value={title.toUpperCase()}
          onChange={handleChangeTitle}
          // type="text"
          name="title"
          placeholder="Write your Title here please."
        />
        <StyledTextField
          value={text}
          onKeyDown={handleKeyPress}
          onChange={handleChangeText}
          // type="text"
          name="Text"
          placeholder="Write your Text here please."
        />
        <Button color="secondary" onClick={handleClick}>
          Save
        </Button>
        <Button color="danger" onClick={toggleCreatePage}>
          Go Back
        </Button>
      </InputCardContainer>
    </CreatePageContainer>
  );
}

export default CreateNote;
