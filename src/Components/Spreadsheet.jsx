import React from 'react'
import { BiRefresh } from 'react-icons/bi'
import { IoLinkOutline } from 'react-icons/io5'
import { PiArrowsSplit } from 'react-icons/pi'

export default function Spreadsheet() {
    return (
        <>

            <table className="left w-[100%] h-[23px]">
                <tbody>
                  <th>
                        <tr>
                         
                            <td className="leftarea flex justify-between col-span-4 bg-gray-300">
                                <button className='flex bg-gray-100 rounded-sm m-1'><span className='text-cyan-400'><IoLinkOutline /></span> Q3 Financial Overview</button> <span className='refresh text-red-500 text-lg m-3'><BiRefresh /></span>
                            </td>

                         
                            <td>
                                <button className='bg-green-100 text-center  h-[46px] flex'><span><PiArrowsSplit/></span>ABC ...</button></td>
                            <td>
                                <button className='bg-purple-200 text-center flex  h-[46px]col-span-2'><span><PiArrowsSplit /></span>Answer a question ... </button></td>
                            <td>
                                <button className='bg-orange-200 text-center flex h-[46px]'> <span><PiArrowsSplit /></span>Extract ...</button></td>
                            <td>
                                <button className='bg-gray-300 text-lg text-center w-32 h-[46px]'>+</button></td>
                        </tr></th>
                  </tbody>
            </table>

        </>
    )
}
