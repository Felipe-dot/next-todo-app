"use client";

import Image from "next/image";
import iconCheck from "../images/icon-check.svg";
import { useState } from "react";

const TodoItem = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxClick = () => {
    console.log("OI AMIGO");
    if (!isChecked) {
      setIsChecked((prev) => !prev);
    }
  };

  return (
    <div className=" p-4 cursor-pointer border-b-[1px] border-b-[--very-dark-grayish-blue-light]">
      <li>
        <div className="relative">
          {isChecked && (
            <div
              className="absolute inset-y-0 flex  items-center justify-center pl-1.5 z-10"
              onClick={handleCheckBoxClick}
            >
              <Image src={iconCheck} height={12} width={12} alt="check logo" />
            </div>
          )}
          <div className="flex items-center ">
            <input
              className=" w-[1.5em] h-[1.5em] appearance-none border-[2px]  shadow-sm rounded-full cursor-pointer checked:bg-gradient-to-r from-[--gradient-color-blue] to-[--gradient-color-pink] z-0"
              type="checkbox"
              id={todo.title}
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              name={todo.title}
            />
            <label className="px-2" htmlFor={todo.title}>
              {todo.title}
            </label>
          </div>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
