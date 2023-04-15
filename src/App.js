import { useState } from "react";
import "./App.css";
import { Modal } from "./modal/Modal";
import { Counter } from "./counter/Counter.jsx";
import {Temperature} from "./temperature/Temperature.jsx"
function App() {
  const [modal, setModal] = useState(false);
  const openModalHandler = () => {
    setModal(true);
  };
  return (
    <div className="App">
      <Counter />
      <Temperature />
      <button onClick={openModalHandler}>Modal</button>
      {modal ? <Modal setModal={setModal} /> : null}
    </div>
  );
}

export default App;
