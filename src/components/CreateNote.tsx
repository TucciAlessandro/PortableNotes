import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledTextField = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 20vh;
  margin: 1rem;
`;

const CreatePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightblue;
`;

interface Note {
  id: string;
  title: string;
  text: string;
}

interface CreateNoteProps {
  addNote: (note: any) => void;
}

function CreateNote({ addNote }: CreateNoteProps) {
  // const [note, setNote] = useState<Note>(); // State should be on parent
  const [id, setId] = useState("0");
  const [title, setTitle] = useState("0");
  const [text, setText] = useState("0");

  const handleChangeId = (e: any) => {
    setId(e.target.value);
    console.log(id);
  };
  const handleChangeTitle = (e: any) => setTitle(e.target.value);
  const handleChangeText = (e: any) => setText(e.target.value);

  const handleClick = () => {
    if (text !== undefined) {
      addNote({ id, title, text });
    }
  };
  return (
    <CreatePageContainer>
      <StyledTextField
        onChange={handleChangeId}
        type="text"
        name="id"
        placeholder="Write your ID here please."
      />
      <StyledTextField
        onChange={handleChangeText}
        type="text"
        name="Text"
        placeholder="Write your Text here please."
      />
      <StyledTextField
        onChange={handleChangeTitle}
        type="text"
        name="title"
        placeholder="Write your Title here please."
      />
      <Button color='secondary' onClick={handleClick}>
        Click me to add note to parent state
      </Button>
    </CreatePageContainer>
  );
}

export default CreateNote;
