import React, { useRef, useState } from "react";
import { v4 as uuid } from "uuid";

interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}
interface TodoInput {
  title: string;
  content: string;
}
interface propsType {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoInput({ setTodos }: propsType) {
  const idInputRef = useRef<HTMLInputElement>(null);
  const [todo, setTodo] = useState<TodoInput>({
    title: "",
    content: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTodo((prev: TodoInput) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = {
      ...todo,
      id: uuid(),
      isDone: false,
    };
    setTodos((prev: Todo[]) => [...prev, newTodo]);
    setTodo({ title: "", content: "" });
    idInputRef.current?.focus();
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="flex justify-center items-center gap-3">
          <div>
            <label htmlFor="">
              title:{" "}
              <input
                className="border"
                type="text"
                name="title"
                value={todo.title}
                onChange={handleOnChange}
                ref={idInputRef}
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              content:{" "}
              <input
                className="border"
                type="text"
                name="content"
                value={todo.content}
                onChange={handleOnChange}
              />
            </label>
          </div>
          <button type="submit" className=" bg-purple-700 text-white px-3">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
