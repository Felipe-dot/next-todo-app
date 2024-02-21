import Image from "next/image";
import iconCheck from "../images/icon-check.svg";
import iconCross from "../images/icon-cross.svg";

const TodoItem = ({ todo, onToggle, removeTodo }) => {
  return (
    <div className="p-5 cursor-pointer border-b-[1px] border-b-[--dark-grayish-blue]">
      <li>
        <div className="relative">
          <div
            className="sm:hidden absolute inset-y-0 right-0 flex items-center px-3"
            onClick={() => removeTodo(todo.id)}
          >
            <Image src={iconCross} height={15} width={15} alt="cross logo" />
          </div>
          {todo.isCompleted && (
            <div
              className="absolute inset-y-0 flex items-center justify-center pl-2 z-10"
              onClick={() => onToggle(todo.id)}
            >
              <Image src={iconCheck} height={15} width={15} alt="check logo" />
            </div>
          )}
          <div className="grid grid-cols-10  items-center ">
            <input
              className={`w-[1.8em] h-[1.8em]  appearance-none border-[2px] dark:border-[--very-dark-grayish-blue-light] shadow-sm rounded-full cursor-pointer checked:bg-gradient-to-r from-[--gradient-color-blue] to-[--gradient-color-pink] z-0 ${
                todo.isCompleted && "border-none"
              }`}
              type="checkbox"
              id={todo.id}
              checked={todo.isCompleted}
              onChange={() => onToggle(todo.id)}
              name={todo.title}
            />
            <label
              className={`text-lg text-wrap  break-words col-start-2 col-end-10 overflow-hidden truncate font-bold text-[--very-dark-grayish-blue-light] dark:text-[--ligh-grayish-blue] ${
                todo.isCompleted
                  ? "line-through  text-[--dark-grayish-blue] dark:text-[--very-dark-grayish-blue-light] font-medium "
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
