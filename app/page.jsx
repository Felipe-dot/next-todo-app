import Image from "next/image";
import moonIcon from "../images/icon-moon.svg";
import TodoItem from "@/components/todoItem";

const Home = () => {
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
            />
          </div>
        </div>
      </div>

      {/* todo list */}
      <div className="relative bottom-12 flex justify-center items-center">
        <div className="bg-[--very-light-gray] h-[50vh] w-[500px] shadow-md pb-7">
          <ul className="h-full overflow-y-auto ">
            <TodoItem todo={{ title: "teste" }} />
            <TodoItem todo={{ title: "teste" }} />
            <TodoItem todo={{ title: "teste" }} />
          </ul>
          {/* bottom stats */}
          <div className="sticky top-[90%] flex justify-between text-sm text-[--dark-grayish-blue] px-5">
            <p>5 items left</p>
            <div className="flex justify-around text-[--very-dark-desaturated-blue] w-52 ">
              <p>All</p>
              <p>Active</p>
              <p>Completed</p>
            </div>
            <p>Clear Completed</p>
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
