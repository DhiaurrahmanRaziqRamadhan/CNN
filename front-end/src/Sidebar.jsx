/* eslint-disable react/prop-types */
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMiniUserGroup, HiMiniUserPlus } from "react-icons/hi2";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import React from "react";

const Sidebar = ({open, setOpen}) => {
  const menus = [
    {name:'Dashboard',link:'/',icon:MdDashboard},
    {name:'Attendance',link:'/attendance',icon:HiMiniUserGroup},
    {name:'New User',link:'new_user', icon:HiMiniUserPlus}
  ]

  return (
    <div className={`bg-blue-950  min-h-screen text-slate-100 px-4 ${open?'w-[288px]':'w-[74px]'} duration-300 fixed shadow-xl`}>
      <div className={`py-3 flex ${open?'justify-between':'justify-center'} items-center`}>
        <p className={`${!open?'opacity-0':''} ${!open?'absolute':''} duration-300`}>CNN</p>
        <RxHamburgerMenu 
          size={26}
          className={`cursor-pointer ${!open?'z-10':''}`}
          onClick={()=>setOpen(!open)}
        />
      </div>
      <hr className={`bg-slate-500 border-0 my-2 h-px rounded-full ${open? '' : 'opacity-0'}`}/>
      <div className="mt-4 gap-4 flex flex-col relative">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={`group flex items-center text-based font-semibold gap-3.5 p-2 hover:bg-blue-700 hover:duration-300 rounded-md`}
          >
            <div>{React.createElement(menu?.icon, {size:'26'})}</div>
            <h2 className={`whitespace-pre duration-300 ${!open && 'opacity-0'}`}>{menu?.name}</h2>
          </Link>
        ))

        }
      </div>
    </div>
  )
}

export default Sidebar