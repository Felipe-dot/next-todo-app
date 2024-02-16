import Image from "next/image";
import moonIcon from "../images/icon-moon.svg";

const Home = () => {
  return (
    <>
      {/*  IMAGE */}
      <div className="bg-[url('../images/bg-desktop-light.jpg');] bg-cover bg-center h-80 flex items-center justify-center">
        {/* header */}
        <div className="h-1/2 w-1/2 flex flex-col justify-between items-center">
          <div className="w-full max-w-96 flex justify-between items-center">
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
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <div class="h-5 w-5  border-2 border-[ --dark-grayish-blue] rounded-full"></div>
            </div>
            <input
              className="appearance-none focus:outline-none w-96 h-12 rounded px-10 py-2 placeholder-[--very-dark-blue]"
              placeholder="Create a new todo..."
              type="text"
            />
          </div>
        </div>
        {/* todo list */}
        <div className=""></div>
        <div className=""></div>
      </div>
    </>
  );
};

export default Home;
