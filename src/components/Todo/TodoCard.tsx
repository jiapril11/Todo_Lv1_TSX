import React from "react";
import Button from "../common/Button";

interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

interface propsType {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export default function TodoCard({ todo, setTodos }: propsType) {
  const handleDelete = (id: string) => {
    setTodos((prev: Todo[]) => prev.filter((todo: Todo) => todo.id !== id));
  };

  const handleChange = (id: string) => {
    setTodos((prev: Todo[]) => {
      return prev.map((todo: Todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      );
    });
  };
  return (
    <li
      className={`list-none border p-3 mb-3 ${todo.isDone && `bg-slate-200`}`}
    >
      <p>{todo.id}</p>
      <p>{todo.title}</p>
      <p>{todo.content}</p>
      <p>{todo.isDone.toString()}</p>
      <div className="flex align-center gap-3">
        <Button
          bgColor="bg-red-500"
          textColor="text-white"
          onclick={() => handleDelete(todo.id)}
          btnRole="Delete"
        />

        <Button
          bgColor={`bg-green-500`}
          textColor="text-white"
          onclick={() => handleChange(todo.id)}
          btnRole={todo.isDone}
        />
      </div>
    </li>
  );
}
