import React, { useState } from "react";
import * as C from "./App.styles";
import ListItem  from "./components/IListItem/index";
import { Item } from "./types/item";
import AddArea from './components/AddArea/index';

function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar o pao na padaria", done: false },
    { id: 2, name: "Comprar um bolo", done: false },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })

    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>
        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index) => (
          <ListItem item={item}></ListItem>
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
