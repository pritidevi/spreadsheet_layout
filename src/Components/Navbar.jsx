import React from 'react'
import { BiRightArrow, BiSolidRightArrowAlt } from 'react-icons/bi';
// import { FaGreaterThan } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5';
import { RiArrowDropRightFill, RiArrowRightLine } from 'react-icons/ri';

export default function Navbar() {
  return (
    <>
      <div className=' flex justify-between w-[100%] min-w-[850px]'>
        <div className="left navbaritems w-[566px]">
          <ul className=' mx-7  my-4 w-[455px] navbaritems'>
            <li className='mx-2 text-[#dad8d8] font-semibold navbaritems '>Workspace  <span className='pl-2'><RiArrowRightLine/> </span> </li>
            <li className='ml-1 mr-[0.5rem] navbar  text-[#dad8d8] font-semibold navbaritems'>Folder2 <span className='pl-2'> <RiArrowRightLine/> </span></li>
            <li className=' mr-[0.5rem] w-[122px] font-semibold'>Spreadsheet 3 </li>
            <li className="mr-14 -mt-1 font-extrabold text-[#dad8d8]">...</li>
          </ul>
        </div>
        <div className="right flex">

          <div className="relative w-60 text-center mt-2">
            <span className='absolute inset-y-0 left-0 flex items-center pl-6 pb-2 text-gray-300'><FaSearch /></span>
            <input type="text " className='bg bg-gray-100  pl-9 py-2  focus:outline-none focus:ring focus:border-blue-300 rounded-md ' placeholder=' Search within sheet' />
          </div>
          <div className="notification text-2xl px-1 py-4 inline-flex"><IoNotificationsOutline />
          <span  className='h-[19px] w-4 bg-green-800 rounded-xl relative top-[-25%] right-[32%] text-xs text-white text-center'>2</span></div>
          <div className="image_and_name flex">
            <img src='src/girl3.jpeg' className='h-7 rounded-full m-2 mt-4 bg-yellow-200 '></img>
          </div>
          <div className="name  size-5 font-semibold w-24 mt-3">John Doe <span className='text-gray-300 text-sm relative bottom-2'>john.doe...</span></div>
         
        </div>
      </div>
      <hr/>
    </>
  )
}
