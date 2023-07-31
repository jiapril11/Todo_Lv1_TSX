import React from "react";
import TodoCard from "./TodoCard";

interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

interface propsType {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  isDoneState: boolean;
}
export default function TodoList({ todos, setTodos, isDoneState }: propsType) {
  return (
    <ul className="py-5">
      {todos
        .filter((todo: Todo) => todo.isDone === isDoneState)
        .map((todo: Todo) => (
          <TodoCard key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
    </ul>
  );
}
