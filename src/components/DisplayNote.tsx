import React from "react";
import styled from "styled-components";

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
`;
const SeparatorText = styled.h4`
  margin: 0 1rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;

function DisplayNote({ title, id, text, deleteNote, handleClick }: NoteProps) {
  return (
      <>
    <Container onClick={handleClick}>
      <Separator>{title}</Separator>
      <hr />
      <SeparatorText>{text}</SeparatorText>
      {id}
    </Container>
      <button onClick={handleClick}>EDIT</button>
      <button onClick={() => deleteNote(id)}>DELETE</button>
      </>
  );
}

export default DisplayNote;
