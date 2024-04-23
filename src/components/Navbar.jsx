import { useContext } from "react";
import { ContextTheme } from "../context/ContextTheme";
import { MdNightlightRound, MdOutlineLightMode } from "react-icons/md";

function Navbar() {

    const {theme,handleChangeTheme} =  useContext(ContextTheme)

  return (
    <nav className="bg-neutral-100 dark:bg-zinc-950 flex justify-between p-5">
      <div>
        <h2 className="font-bold text-teal-500 text-3xl">S8</h2>
      </div>

      <button  onClick={handleChangeTheme}>
        {theme == "light" ? (
          <MdOutlineLightMode className="text-3xl font-bold text-teal-600 hover:text-teal-500" />
        ) : (
          <MdNightlightRound className="text-3xl font-bold text-teal-600 hover:text-teal-500" />
        )}
      </button>
    </nav>
  );
}

export default Navbar;
