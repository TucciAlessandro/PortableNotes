import React, { useState } from "react";
import DisplayNote from "./DisplayNote";
import styled from "styled-components";
import CreateNote from "./CreateNote";

const NoteContainer = styled.div`
  display: flex;
  background-color: papayawhip;
  flex-direction: column;
  margin: 2rem;
  width: 20vw;
  height: 30vh;
  align-items: center;
  justify-content: center;
  border: solid 1px black;
`;
interface Note {
  id: string;
  title: string;
  text: string;
}

interface Data {
  notes: Note[];
}

const data: Note[] = [
  {
    id: "1",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    title: "test",
  },
  {
    id: "2",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    title: "test",
  },
  {
    id: "3",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley   ",
    title: "test",
  },
];

function Board() {
  const [notes, setNotes] = useState(data);
  const [showEditing, setShowEditing] = useState(false);
  const addNote = (note: Note) => {
    const newData = { ...data, note };
    setNotes(newData);
  };

  const deleteNote = (id: string) => {
    const newData = data.filter((note) => note.id !== id);
    setNotes(newData);
    console.log(notes);
  };

  return (
    <>
      {!showEditing ? (
        notes.map((note) => (
          <NoteContainer>
            <DisplayNote
              id={note.id}
              title={note.title}
              text={note.text}
              deleteNote={deleteNote}
              handleClick={() => setShowEditing(!showEditing)}
            />
          </NoteContainer>
        ))
      ) : (
        <CreateNote />
      )}
    </>
  );
}

export default Board;
