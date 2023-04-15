import React, { useState } from "react";
import styled from "styled-components";

export const Modal = ({ setModal }) => {
  const [add, setAdd] = useState("");
  const [title, setTitle] = useState([]);
  const closeModalHandler = () => {
    setModal(false);
  };

  const addTodo = () => {
    const data = {
      title: add,
    };
    setTitle([...title, data]);
    // setTitle(addTodo);
  };
  const input = (event) => {
    setAdd(event.target.value);
  };
  return (
    <Container>
      <div>
        <input type="text" value={add} onChange={input} />
      </div>
      <button onClick={closeModalHandler}>Close</button>
      <button onClick={addTodo}>Add</button>
      {title.map((el) => {
        return (
          <>
            <h1>{el.title}</h1>
          </>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 200px;
  height: 200px;
  background-color: aqua;
`;
