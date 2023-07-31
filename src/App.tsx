import { useState, Dispatch, SetStateAction } from "react";
import TodoList from "./components/Todo/TodoList";
import { v4 as uuid } from "uuid";
import TodoInput from "./components/Todo/TodoInput";

interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

function App() {
  const initialState: Todo[] = [
    {
      id: uuid(),
      title: "title1",
      content: "content1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "title2",
      content: "content2",
      isDone: false,
    },
    {
      id: uuid(),
      title: "title3",
      content: "content3",
      isDone: false,
    },
  ];

  const [todos, setTodos] = useState<Todo[]>(initialState);

  return (
    <div className="App">
      <h1 className="text-2xl text-center py-6">TODO LIST</h1>
      <div className="py-5">
        <TodoInput setTodos={setTodos} />
      </div>
      <h2 className="text-xl">Todo</h2>
      <TodoList todos={todos} setTodos={setTodos} isDoneState={false} />
      <hr className="py-4" />
      <h2 className="text-xl">Done</h2>
      <TodoList todos={todos} setTodos={setTodos} isDoneState={true} />
    </div>
  );
}

export default App;
