import React, { useState } from "react";
import DisplayNote from "./DisplayNote";
import styled, { keyframes } from "styled-components";
import CreateNote from "./CreateNote";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";
import { useMyCreatePageContext } from "../contexts/CreateContexts";
import { text } from "@fortawesome/fontawesome-svg-core";

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
  background-color: #e3fafb;
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
  -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  &:hover {
    -webkit-transform: translateZ(100px);
    transform: translateZ(100px);
    -webkit-box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.35);
    box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.35);
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
    id: uuidv4(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    title: "test",
  },
  {
    id: uuidv4(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    title: "test",
  },
  {
    id: uuidv4(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley   ",
    title: "test",
  },
];

function Board() {
  const [notes, setNotes] = useLocalStorage("myNotes", data);
  const { isCreating, toggleCreatePage } = useMyCreatePageContext();
  const [id, setId] = useState(uuidv4());
  const [title, setTitle] = useState("0");
  const [text, setText] = useState("0");

  const handleChangeTitle = (e: any) => setTitle(e.target.value);
  const handleChangeText = (e: any) => setText(e.target.value);

  const addNote = ({ id, title, text }: Note) => {
    const note = { id: id, title: title, text: text };
    const newData = [...notes, note];
    setNotes(newData);
    setText('0');
    setTitle('0');
    toggleCreatePage();
  };

  const handleEdit = (id: string) => {
    const dataToEdit = notes.find((notes) => notes.id === id);
    dataToEdit && setTitle(dataToEdit.title);
    dataToEdit && setText(dataToEdit.text);
    toggleCreatePage();
  };

  const deleteNote = (id: string) => {
    const newData = notes.filter((note) => note.id !== id);
    setNotes(newData);
    console.log(notes);
  };

  const handleClick = () => {
    if (id && title && text !== undefined) {
      addNote({ id, title, text });
    }
  };

  return (
    <>
      {!isCreating ? (
        notes.map((note) => (
          <NoteContainer>
            <DisplayNote
              id={note.id}
              title={note.title}
              text={note.text}
              deleteNote={deleteNote}
              handleEdit={handleEdit}
              handleClick={() => toggleCreatePage()}
            />
          </NoteContainer>
        ))
      ) : (
        <CreateNote
          addNote={addNote}
          handleChangeTitle={handleChangeTitle}
          handleClick={handleClick}
          handleChangeText={handleChangeText}
          title={title}
          text={text}
          id={id}
        />
      )}
    </>
  );
}

export default Board;
