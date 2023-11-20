/* eslint-disable react/prop-types */
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({darkMode ,handleThemeSwitch}) => {

  return (
    <div className="pb-2 w-full flex flex-row justify-end text-slate-700 dark:text-white gap-2">
      <div className="flex justify-center items-center duration-100">
        <span className="text-sm">{darkMode ? 'Light' : 'Dark'}</span>
      </div>
      <div className="flex justify-center items-center duration-100" onClick={handleThemeSwitch}>
        {
          darkMode?<FaMoon size={26} className="drop-shadow-lg cursor-pointer"/> : <FaSun size={26} className="drop-shadow-lg cursor-pointer"/>
        }
      </div>
    </div>
  )
}

export default Navbar