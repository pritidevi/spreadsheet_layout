import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowDropdownCircle, IoMdContact } from 'react-icons/io'
import { LuBriefcaseBusiness, LuSheet } from 'react-icons/lu'
import { TbWorld } from 'react-icons/tb'
import { BiRefresh } from 'react-icons/bi'
import { IoLinkOutline } from 'react-icons/io5'
import { PiArrowsSplit } from 'react-icons/pi'

export default function Spreadsheet_items({ itemlist }) {

  const onabcclick = () => {
    console.log("ABC.. button is clicked")
  }
  const on_answer_a_question_click = () => {
    console.log("Answer a question  button is clicked")
  }
  const onextractclick = () => {
    console.log("Extract... button is clicked")
  }

  return (
    <>

      <table className="min-w-full border border-gray-300 text-sm text-left ">
        <thead className="bg-gray-100 font-semibold ">
          <tr>
            <th></th>
            <th colSpan={4}><div className="flex justify-between  bg-gray-300 mb-[2px] "  >
              <button className='flex items-center bg-gray-100 rounded-sm m-1 w-56 pl-2 ' ><span className='text-cyan-400 pr-3'><IoLinkOutline /></span> Q3 Financial Overview</button> <span className='refresh text-red-500 text-lg m-3'><BiRefresh /></span></div>
            </th >

            <th></th>

            <th ><div className="  bg-[#bce2be] h-[43px] mb-[2px] ">
              <button className='spreaditem pl-[34px]' onClick={onabcclick} ><span className='spanitem mr-1'><PiArrowsSplit /></span >ABC ...</button></div></th>

            <th colSpan={2}><div className=" bg-[#dec8ea] h-[43px] mb-[2px] ">
              <button className='spreaditem' onClick={on_answer_a_question_click}><span className='spanitem mr-1'><PiArrowsSplit /></span >Answer a question ... </button></div></th>

            <th  ><div className=' bg-[#edbeb6]  h-[43px] mb-[2px]'>
              <button className='spreaditem' onClick={onextractclick}> <span className='spanitem mr-[2px] '><PiArrowsSplit /></span>Extract ...</button></div></th>

            <th className="border-l-2 border-r-2 border-dashed border-gray-400 text-center w-32">
              <button className="bg-gray-200 text-3xl h-[46px] w-full">+</button>
            </th>

            <th className='w-3 bg-white'></th>
          </tr>
          <tr>
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2 flex gap-2 items-center"> <LuBriefcaseBusiness /><span className="flex items-center gap-28"> Job Request <IoIosArrowDown /></span></th>

            <th className="border px-4 py-2 "> <span className="flex items-center gap-2"><LuSheet className='text-lg' />
              <span className="flex items-center gap-1">
                Submitted <IoIosArrowDown />
              </span></span>
            </th>

            <th className="border px-4 py-2  "><span className="flex items-center gap-2"> <IoIosArrowDropdownCircle className='text-lg' />
              <span className="flex items-center gap-6">
                Status <IoIosArrowDown /></span></span></th>
            <th className="border  py-2  px-4  "><span className="flex items-center gap-2"><IoMdContact className='text-lg' /><span className="flex items-center gap-6">
              Submitter <IoIosArrowDown className='text-lg' /></span></span></th>
            <th className="border px-4 py-2  "><span className="flex items-center gap-2"><TbWorld className='text-lg' /><span className="flex items-center gap-6"> URL <IoIosArrowDown className='text-lg' /></span></span></th>
            <th className="border px-4 bg-[#00800026] py-2">Assigned</th>
            <th className="border px-4  bg-[#e9def0] py-2">Priority</th>
            <th className="border px-4 bg-[#e9def0]  py-2">Due Date</th>
            <th className=" px-4 py-2 bg-[#f1dddc]  ">Est. Value</th>
            <th className=" px-4 py-2 border-l-2 border-r-2 border-dashed border-gray-400 bg-white w-32 "></th>
          </tr>
        </thead>
        <tbody className={`scroll-my-16 `}>
          {itemlist.map(item => (

            <tr key={item.id} >

              <td className={`tableitems  `}>{item.id}</td>
              <td className={`tableitems `} >{item.job}</td>
              <td className={`tableitems ${item.id === 8 ? 'border-2 border-green-500 shadow-lg' : ''} `}>{item.date}</td>
              <td className={`tableitems `}><button className={`btn2  
                  ${item.status === "In-process" && "bg-yellow-100 text-yellow-600"} ${item.status === "Need to start" && "bg-gray-200 text-gray-500"} ${item.status === "Complete" && "bg-green-200 text-green-600"} ${item.status === "Blocked" && "bg-red-200 text-red-600"}`}
              >{item.status}</button></td>
              <td className={`tableitems `}>{item.submitter}</td>
              <td className={`tableitems  underline`}>{item.url}</td>
              <td className={`tableitems `}>{item.assigned}</td>

              <td className={` tableitems  ${item.priority === "High" && `text-red-600`} ${item.priority === "Medium" && "text-yellow-600"} ${item.priority === "Low" && "text-blue-500"}`}>{item.priority}</td>

              <td className={` tableitems `}>{item.duedate}</td>
              <td className={`tableitems  `}>{item.estvalue}</td>
              <td className="border-l-2 border-r-2 border-dashed border-gray-400 w-32">

              </td>
            </tr>
          ))}

        </tbody>
      </table>

    </>
  )
}
