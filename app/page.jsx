"use client";

import Image from "next/image";
import moonIcon from "../images/icon-moon.svg";
import TodoItem from "@/components/todoItem";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const [filterIndex, setFilterIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");

  function handleKeyPress(event, value) {
    if (event.key === "Enter") {
      if (value.trim() !== "") {
        setTodoList([
          ...todoList,
          { id: uuidv4(), title: value, isCompleted: false },
        ]);
        setInputValue("");
      }
    }
  }

  const toggleTodo = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
            }
          : todo
      )
    );
  };

  const clearCompletedTodos = () => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.isCompleted === false)
    );
  };

  const renderBasedOnFilterIdx = () => {
    switch (filterIndex) {
      case 0:
        return todoList.map((e) => (
          <TodoItem key={e.id} todo={e} onToggle={toggleTodo} />
        ));
      case 1:
        return todoList.map(
          (e) =>
            e.isCompleted === false && (
              <TodoItem key={e.id} todo={e} onToggle={toggleTodo} />
            )
        );
      case 2:
        return todoList.map(
          (e) =>
            e.isCompleted === true && (
              <TodoItem key={e.id} todo={e} onToggle={toggleTodo} />
            )
        );
    }
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <>
      {/*  IMAGE */}
      <div className="bg-[url('../images/bg-desktop-light.jpg');] bg-cover bg-center h-80 flex items-center justify-center">
        {/* header */}
        <div className="h-1/2 w-1/2 flex flex-col justify-between items-center">
          <div className="w-96 flex justify-between items-center">
            <h1 className="text-zinc-50 font-bold text-4xl tracking-[.3em]">
              TODO
            </h1>
            <Image
              className="cursor-pointer"
              src={moonIcon}
              alt="moon icon"
              height={25}
              width={25}
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <div className="h-5 w-5  border-2 border-[ --dark-grayish-blue] rounded-full"></div>
            </div>
            <input
              className="appearance-none focus:outline-none w-96 h-12 rounded px-10 py-7 placeholder-[--dark-grayish-blue]"
              placeholder="Create a new todo..."
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.currentTarget.value);
              }}
              onKeyUp={(event) => {
                handleKeyPress(event, inputValue);
              }}
            />
          </div>
        </div>
      </div>

      {/* todo list */}
      <div className="relative bottom-12 flex justify-center items-center ">
        <div className="bg-[--very-light-gray] h-[50vh] w-[500px] shadow-md pb-7 rounded-lg">
          <ul className="h-full overflow-y-auto ">
            {/* {todoList.map((e) => (
              <TodoItem key={e.id} todo={e} onToggle={toggleTodo} />
            ))} */}
            {renderBasedOnFilterIdx()}
          </ul>
          {/* bottom stats */}
          <div className="sticky top-[90%] flex justify-between text-sm text-[--dark-grayish-blue] px-5">
            {todoList.length === 0 ? (
              <p>No items</p>
            ) : (
              <p>
                {todoList.filter((todo) => todo.isCompleted === false).length}{" "}
                items left
              </p>
            )}

            <div className="flex justify-around text-[--very-dark-desaturated-blue] w-52 ">
              <p
                onClick={() => setFilterIndex(0)}
                className={`cursor-pointer  hover:font-bold ${
                  filterIndex === 0 && "text-[--bright-blue] font-bold"
                }`}
              >
                All
              </p>
              <p
                onClick={() => setFilterIndex(1)}
                className={`cursor-pointer  hover:font-bold   ${
                  filterIndex === 1 && "text-[--bright-blue] font-bold"
                }`}
              >
                Active
              </p>
              <p
                onClick={() => setFilterIndex(2)}
                className={`cursor-pointer hover:font-bold    ${
                  filterIndex === 2 && "text-[--bright-blue] font-bold"
                }`}
              >
                Completed
              </p>
            </div>
            <p
              className="cursor-pointer hover:font-bold"
              onClick={() => clearCompletedTodos()}
            >
              Clear Completed
            </p>
          </div>
        </div>
      </div>
      {/* Drag and Drop */}
      <div className="flex justify-center items-center p-2">
        <h3 className="text-[--dark-grayish-blue]">
          Drag and drop to reorder list
        </h3>
      </div>
    </>
  );
};

export default Home;
