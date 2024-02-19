"use client";

import Image from "next/image";
import iconCheck from "../images/icon-check.svg";
import { useState } from "react";

const TodoItem = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxClick = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="p-5 cursor-pointer border-b-[1px] border-b-[--dark-grayish-blue]">
      <li>
        <div className="relative">
          {isChecked && (
            <div
              className="absolute inset-y-0 flex items-center justify-center pl-2 z-10"
              onClick={handleCheckBoxClick}
            >
              <Image src={iconCheck} height={15} width={15} alt="check logo" />
            </div>
          )}
          <div className="flex items-center ">
            <input
              className=" w-[1.8em] h-[1.8em] appearance-none border-[2px]  shadow-sm rounded-full cursor-pointer checked:bg-gradient-to-r from-[--gradient-color-blue] to-[--gradient-color-pink] z-0"
              type="checkbox"
              id={todo.title}
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              name={todo.title}
            />
            <label
              className={`px-4 text-lg text-wrap font-bold text-[--very-dark-grayish-blue-light] ${
                isChecked
                  ? "line-through text-[--dark-grayish-blue] font-medium"
                  : ""
              }`}
              htmlFor={todo.title}
            >
              {todo.title}
            </label>
          </div>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
