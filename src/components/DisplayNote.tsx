import React from "react";
import styled from "styled-components";
import Button from "./Button";

interface NoteProps {
  title: string;
  id: string;
  text: string;
  handleClick: (e: any) => void;
  deleteNote: (id: string) => void;
}

interface Note {
  id: string;
  title: string;
  text: string;
}

const Separator = styled.h2`
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SeparatorText = styled.h4`
  margin: 0 1rem;
`;

const StyledHr = styled.hr`
  width: 80%;
  color: black;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function DisplayNote({ title, id, text, deleteNote, handleClick }: NoteProps) {
  return (
    <>
      <Container onClick={handleClick}>
        <Separator>{title.toUpperCase()}</Separator>
        <StyledHr />
        <SeparatorText>{text}</SeparatorText>
        {id}
      </Container>
      <ButtonContainer>
        <Button color="secondary" size="small" onClick={handleClick}>
          EDIT
        </Button>
        <Button color="danger" size="small" onClick={() => deleteNote(id)}>
          DELETE
        </Button>
      </ButtonContainer>
    </>
  );
}

export default DisplayNote;
