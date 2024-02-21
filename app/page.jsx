"use client";

import TodoItem from "@/components/todoItem";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const [filterIndex, setFilterIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const toggleLightMode = () => {
    // if (typeof window !== "undefined") {
    console.log("oi");
    var html = document.querySelector("html");

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      html.classList.add("light");
    } else {
      html.classList.remove("light");
      html.classList.add("dark");
    }
    // }
  };

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

  const removeTodoById = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.id !== id)
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
          <TodoItem
            key={e.id}
            todo={e}
            onToggle={toggleTodo}
            removeTodo={removeTodoById}
          />
        ));
      case 1:
        return todoList.map(
          (e) =>
            e.isCompleted === false && (
              <TodoItem
                key={e.id}
                todo={e}
                onToggle={toggleTodo}
                removeTodo={removeTodoById}
              />
            )
        );
      case 2:
        return todoList.map(
          (e) =>
            e.isCompleted === true && (
              <TodoItem
                key={e.id}
                todo={e}
                onToggle={toggleTodo}
                removeTodo={removeTodoById}
              />
            )
        );
    }
  };

  return (
    <>
      {/*  IMAGE */}
      <div className="bg-[url('../images/bg-mobile-light.jpg');] dark:bg-[url('../images/bg-mobile-dark.jpg')] sm:bg-[url('../images/bg-desktop-light.jpg');]  dark:sm:bg-[url('../images/bg-desktop-dark.jpg');] bg-cover bg-center h-60 sm:h-80 flex items-center justify-center">
        {/* header */}
        <div className="h-1/2 flex flex-col justify-between items-center">
          <div className="w-[300px] sm:w-[450px] md:w-[500px] lg:w-[550px] xl:w-[600px] 2xl:w-[700px] flex justify-between items-center">
            <h1 className="text-2xl text-zinc-50 font-bold sm:text-4xl tracking-[.3em]">
              TODO
            </h1>
            <div
              onClick={() => toggleLightMode()}
              className="cursor-pointer bg-cover bg-center bg-[url('../images/icon-moon.svg')] dark:bg-[url('../images/icon-sun.svg')] h-7 w-7 sm:h-8 sm:w-8"
            />
          </div>
          <div className="relative ">
            <div className="absolute inset-y-0 left-1 flex items-center pl-3">
              <div className="h-7 w-7 border-2 border-[--dark-grayish-blue] dark:border-[--very-dark-grayish-blue-light] rounded-full"></div>
            </div>
            <input
              className="appearance-none focus:outline-none dark:bg-[--very-dark-desaturated-blue] dark:text-[--very-light-gray] w-[300px]  sm:w-[450px] md:w-[500px] lg:w-[550px] xl:w-[600px]  2xl:w-[700px] h-3 sm:h-12 rounded px-14 py-7 placeholder-[--dark-grayish-blue]"
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
      <div className="relative bottom-10 sm:bottom-12 flex justify-center items-center">
        <div className="bg-[--very-light-gray] dark:bg-[--very-dark-desaturated-blue] h-[50vh] w-[300px] sm:w-[450px] md:w-[500px] lg:w-[550px] xl:w-[600px] 2xl:w-[700px] shadow-md pb-7 rounded-lg">
          <ul className="h-full overflow-y-auto ">
            {renderBasedOnFilterIdx()}
          </ul>
          {/* bottom stats */}
          <div className="sticky top-[90%] flex justify-center sm:justify-between  text-sm text-[--dark-grayish-blue]  px-5">
            {todoList.length === 0 ? (
              <p className=" hidden sm:block text-[--dark-grayish-blue]  ">
                No items
              </p>
            ) : (
              <p className=" hidden sm:block text-[--dark-grayish-blue] ">
                {todoList.filter((todo) => todo.isCompleted === false).length}{" "}
                items left
              </p>
            )}

            <div className="flex  justify-around text-[--very-dark-desaturated-blue] w-52 ">
              <p
                onClick={() => setFilterIndex(0)}
                className={`cursor-pointer  hover:font-bold  ${
                  filterIndex === 0
                    ? "text-[--bright-blue] font-bold"
                    : "text-[--dark-grayish-blue] font-bold"
                }`}
              >
                All
              </p>
              <p
                onClick={() => setFilterIndex(1)}
                className={`cursor-pointer  hover:font-bold    ${
                  filterIndex === 1
                    ? "text-[--bright-blue] font-bold"
                    : "text-[--dark-grayish-blue] font-bold"
                }`}
              >
                Active
              </p>
              <p
                onClick={() => setFilterIndex(2)}
                className={`cursor-pointer hover:font-bold  ${
                  filterIndex === 2
                    ? "text-[--bright-blue] font-bold"
                    : "text-[--dark-grayish-blue] font-bold"
                }`}
              >
                Completed
              </p>
            </div>
            <p
              className="cursor-pointer text-[--dark-grayish-blue] hover:font-bold hidden sm:block  "
              onClick={() => clearCompletedTodos()}
            >
              Clear Completed
            </p>
          </div>
        </div>
      </div>
      {/* Drag and Drop */}
      <div className="flex justify-center items-center p-2">
        <p className="text-[--dark-grayish-blue]">
          Drag and drop to reorder list
        </p>
      </div>
    </>
  );
};

export default Home;
