import React from 'react'
import {BiSearch} from 'react-icons/bi'
import{RxCross2} from 'react-icons/rx'

const Home = () => {
  return (
    <div>
        <div className="flex gap-1 text-sm p-2">
            <p>Medical Darpan > </p>
            <p>Search ></p>
            <p className="font-medium">FabiFlu Tablet </p>
        </div>

        <div className=' flex w-[450px]  bg-white items-center justify-between ml-2 mt-3 pl-2 '> 
              <BiSearch className=' text-3xl text-[#7c7c7c] '/>
          <div className=''>
            <input placeholder="Paracetamol" className="outline-none  px-2 pl-2 p-2 w-[330px] "></input>
            <button className="bg-[#32b8ad] p-[7px] px-4 text-white ">Search</button>
          </div>
        </div>
{/* filter */}
        <div className='flex items-center gap-3 pt-3 p-2'>
          <p className="text-3xl font-semibold text-[#5f5f5f]">Paracetamol</p>
          <p className="text-md font-medium text-[#5f5f5f]">(128 products)</p>
          <button className="bg-[#32b8ad] flex items-center gap-1 text-white p-1 px-2 rounded-md">Aceclofenac <RxCross2 className="text-md mt-1"/></button>
          <button className="bg-[#32b8ad] flex items-center gap-1 text-white p-1 px-2 rounded-md">500 mg <RxCross2 className="text-md mt-1"/></button>
          <p className='text-red-900'>Remove all </p>
        </div>


    </div>
  )
}

export default Home
