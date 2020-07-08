import React, { useState } from "react";
import DisplayNote from "./DisplayNote";
import styled from "styled-components";
import CreateNote from "./CreateNote";
import Button from "./Button";
import useLocalStorage from "../hooks/useLocalStorage";

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
  border-radius: 19px;
  -webkit-box-shadow: -2px 0px 23px 1px rgba(0, 0, 0, 0.53);
  -moz-box-shadow: -2px 0px 23px 1px rgba(0, 0, 0, 0.53);
  box-shadow: -2px 0px 23px 1px rgba(0, 0, 0, 0.53);
  &:hover {
    transition: 0.8s ease-in-out;
    -webkit-box-shadow: -2px 0px 23px 23px rgba(0, 0, 0, 0.53);
    -moz-box-shadow: -2px 0px 23px 23px rgba(0, 0, 0, 0.53);
    box-shadow: -2px 0px 23px 23px rgba(0, 0, 0, 0.53);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: row;
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
  const [notes, setNotes] = useLocalStorage("myNotes", data);
  const [showCreatePage, setShowCreatePage] = useState(false);

  // const addNote = (note: Note) => {
  //   const newData = [...notes, note];
  //   // console.log(note);
  //   setNotes(newData);
  //   // console.log(notes);
  //   setShowCreatePage(!showCreatePage);
  // };

  const addNote = ({ id, title, text }: Note) => {
    const note = { id: id, title: title, text: text };
    const newData = [...notes, note];
    // console.log(note);
    setNotes(newData);
    // console.log(notes);
    setShowCreatePage(!showCreatePage);
  };

  const deleteNote = (id: string) => {
    const newData = notes.filter((note) => note.id !== id);
    setNotes(newData);
    console.log(notes);
  };

  return (
    <>
      {!showCreatePage ? (
        notes.map((note) => (
          <NoteContainer>
            <DisplayNote
              id={note.id}
              title={note.title}
              text={note.text}
              deleteNote={deleteNote}
              handleClick={() => setShowCreatePage(!showCreatePage)}
            />
          </NoteContainer>
        ))
      ) : (
        <CreateNote addNote={addNote} />
      )}
      {/* <Button color="danger">CREATE NOTE!</Button> */}
    </>
  );
}

export default Board;
