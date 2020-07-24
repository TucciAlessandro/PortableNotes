import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button";
import { useMyCreatePageContext } from "../contexts/CreateContexts";

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
const StyledTextField = styled.input`
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
  titleProp?: string;
  textProp?: string |undefined;
  idProp?: string;
}

function CreateNote({ addNote, titleProp, textProp, idProp }: CreateNoteProps) {
  const [id, setId] = useState(uuidv4());
  const [title, setTitle] = useState(titleProp);
  const [text, setText] = useState(textProp);
  const { toggleCreatePage } = useMyCreatePageContext();

  const handleChangeId = (e: any) => {
    setId(e.target.value);
    console.log(id);
  };
  const handleChangeTitle = (e: any) => setTitle(e.target.value);
  const handleChangeText = (e: any) => setText(e.target.value);

  const handleClick = () => {
    if (id && title && text !== undefined) {
      addNote({ id, title, text });
    }
  };
  return (
    <CreatePageContainer>
      <InputCardContainer>
        <StyledTitleField
          onChange={handleChangeTitle}
          type="text"
          name="title"
          placeholder="Write your Title here please."
        />
        <StyledTextField
          onChange={handleChangeText}
          type="text"
          name="Text"
          placeholder="Write your Text here please."
        />
        <Button color="secondary" onClick={handleClick}>
          Save
        </Button>
        <Button color="danger" onClick={toggleCreatePage}>
          Delete
        </Button>
      </InputCardContainer>
    </CreatePageContainer>
  );
}

export default CreateNote;
