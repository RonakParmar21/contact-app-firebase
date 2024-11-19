import "./App.css";
import Navbar from "./component/Navbar";
import { IoSearch } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex text-center relative max-w-screen-2xl ml-5 gap-3">
        <IoSearch className="absolute text-2xl text-center m-[3px] text-white" />
        <input type="text" className="pl-[30px] rounded text-xl bg-transparent text-white border" />
        <IoIosAddCircle className="text-3xl text-white" />
      </div>
    </>
  );
}

export default App;
