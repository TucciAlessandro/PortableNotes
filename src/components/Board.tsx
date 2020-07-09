import React, { useState } from "react";
import DisplayNote from "./DisplayNote";
import styled, { keyframes } from "styled-components";
import CreateNote from "./CreateNote";
import useLocalStorage from "../hooks/useLocalStorage";
import Navbar from "./Navbar";

const boxAnimationSlide = keyframes`
from{
-webkit-transform: translateX(-500px);
transform: translateX(-500px);
}
to {
  -webkit-transform: translateX(0);
    transform: translateX(0)}
  `;
const NoteContainer = styled.div`
  display: flex;
  background-color: beige;
  flex-direction: column;
  margin: 1rem;
  width: 20vw;
  height: 30vh;
  align-items: center;
  justify-content: center;
  border-radius: 19px;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  animation: ${boxAnimationSlide} 0.5s ease-in;
  &:hover {
    -webkit-transform: translateZ(100px);
    transform: translateZ(100px);
    -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
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
    </>
  );
}

export default Board;
