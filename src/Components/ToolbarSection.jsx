import React from 'react'
import { FaRegShareFromSquare } from 'react-icons/fa6'
import { IoFilter } from 'react-icons/io5'
import { LuArrowDownToLine, LuArrowUpDown, LuArrowUpToLine } from 'react-icons/lu'
import { PiArrowsSplit } from 'react-icons/pi'
import { RiArrowRightDoubleFill } from 'react-icons/ri'
import { VscEyeClosed } from 'react-icons/vsc'

export default function ToolbarSection() {
    const onimportclick = () => {
        console.log("Import button is clicked")
    }
    const onexportclick = () => {
        console.log("Export button is clicked")
    }
    const onshareclick = () => {
        console.log("Share button is clicked")
    }
    const onnewactiontclick = () => {
        console.log("New Action button is clicked")
    }
    return (
        <><div className='flex  justify-between h-10'>
            <div className="left btn ">

                <button className="toolbar  btn mr-2">Tool bar <span ><RiArrowRightDoubleFill /></span>
                </button>
                <button className='hide_fields btn mr-2'><span ><VscEyeClosed /></span>Hide fields</button>
                <button className='sort btn mr-1'><span><LuArrowUpDown /></span>Sort</button>
                <button className='filter btn mr-1'><span><IoFilter /></span>Filter</button>
                <button className='cell_view btn'>Cell view</button>

            </div >
            <div className="right flex">

                <button className='button' onClick={onimportclick}><LuArrowDownToLine />Import</button>
                <button className='button' onClick={onexportclick}><LuArrowUpToLine />Export</button>
                <button className='button' onClick={onshareclick}><FaRegShareFromSquare />Share</button>
                <button className='button bg-[#1e5e36] text-white' onClick={onnewactiontclick}><PiArrowsSplit />New Action</button>

            </div>
        </div>
        </>
    )
}
