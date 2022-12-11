import React from 'react'
import{RxCross2} from 'react-icons/rx'
import {FaTelegramPlane} from 'react-icons/fa'
import{Myproducts} from '../Data/Productsdata'

const Products = () => {
  return (
    <div className="flex">
{/* Side filter */}
  <div className="p-2  w-[300px] flex flex-col gap-4">
        <div className=" flex flex-col items-start  gap-3  bg-white ">
            <h1 className="bg-[#d9d9d9] py-2 text-lg font-semibold text-center w-full">Related Category</h1>
            <p className="font-semibold px-2 ">Paracetamol Tablets</p>
            <p className="font-semibold px-2 ">Paracetamol Syrup</p>
            <p className="font-semibold px-2 ">Paracetamol Powder</p>
            <p className="bg-[#32b8ad] max-w-[95%] mx-auto flex items-center justify-between text-white p-1 px-2 rounded-md w-full">Aceclofenac <RxCross2 className="text-md mt-1 cursor-pointer"/></p>
            <p className="font-semibold px-2 ">Magaladrate Simethicone Oral Suspension</p>
            <p className="font-semibold px-2 pb-2 ">Mefenamic Paracetamol Syrup</p>
        </div>

        <div className="border-2 flex flex-col items-start  gap-3  bg-white ">
            <h1 className="bg-[#d9d9d9]  py-2 text-lg font-semibold text-center w-full">Related Brands</h1>
            <p className="font-semibold px-2">Cipmol Paracetamol</p>
            <p className="font-semibold px-2 ">Pandal Paracetamol Tablets</p>
            <p className="font-semibold px-2 ">Combiflam</p>
            <p className="font-semibold px-2">Crocin Tablets</p>
            <p className="font-semibold px-2">Calpol Paracetamol Tablets</p>
            <p className="font-semibold px-2 pb-2">Sumo Tablet</p>
        </div>

        <div className=" flex flex-col items-start  gap-3  bg-white ">
            <h1 className="bg-[#d9d9d9]  py-2 text-lg font-semibold text-center w-full">Business Type</h1>
            <p className="font-semibold px-2">Wholesaler</p>
            <p className="font-semibold px-2">Manufacturer</p>
            <p className="font-semibold px-2">Retailer</p>
            <p className="font-semibold px-2 pb-2">Exporter</p>
        </div>

         <div className=" flex flex-col items-start  gap-3  bg-white ">
            <h1 className="bg-[#d9d9d9]  py-2 text-lg font-semibold text-center w-full">Strength</h1>
            <p className="bg-[#32b8ad] flex items-center justify-between text-white p-1 px-2 rounded-md w-full max-w-[94%] mx-auto">500 mg <RxCross2 className="text-md mt-1"/></p>
            <p className="font-semibold px-2 pb-2">650 mg</p>
        </div>

        <div className=" flex flex-col items-start  gap-3  bg-white ">
            <h1 className="bg-[#d9d9d9]  py-2 text-lg font-semibold text-center w-full">Manufacturer</h1>
            <p className="font-semibold px-2 ">Intas Pharmaceutical Ltd</p>
            <p className="font-semibold px-2 pb-2 ">Alkem Laboratories Ltd</p>
        </div>

        <div className=" flex flex-col items-start  gap-3 bg-white ">
            <h1 className="bg-[#d9d9d9]  py-2 w-full font-semibold text-lg text-center">Prescription/Non prescription </h1>
            <p className="font-semibold px-2">Intas Pharmaceutical Ltd</p>
            <p className="font-semibold px-2 pb-2">Alkem Laboratories Ltd</p>
        </div>       
    </div>

    {/* Products */}

    <div className=" w-full h-[910px]  grid grid-cols-3 gap-6 p-5 -mt-3 ">
        {
            Myproducts.map((product) =>{
                return(
 <       div key={product.id} className=" border-2 border-gray-600 flex flex-col items-center gap-2 rounded-xl   ">
            <img src="https://th-i.thgim.com/public/sci-tech/health/qqe11f/article31879293.ece/alternates/FREE_1200/fabiflujpg" className='w-[420px] p-2 rounded-xl'/>
            <div className='border-b-[1px] border-gray-600 flex flex-col items-center gap-5 w-full pb-3'>
               <div >
                 <h3 className="text-lg font-semibold">Favipiravir 400mg(Fabiflu) Tablets</h3>
                 <p className="font-bold text-lg text-red-900 text-center ">Rs 1,775/<span className="text-sm text-gray-600 font-normal">stripe</span></p>
                </div>
                <div>
                  <p className='font-semibold'>Glenmark Pharmaceutical Limited</p>
                  <p className="text-sm text-gray-600 text-center">PARVAT PATIYA, SURAT ,GUJRAT</p>  
                </div>
            </div>
             
             <div className="">
                <p className='flex items-center  gap-4 text-xl text-[#34b8ac] font-semibold'><FaTelegramPlane className='text-2xl font-bold'/> Contact Supplier</p>
             </div>

           <div className='h-4 bg-red-900 w-full  rounded-b-[10px] p-0 m-0'></div>


        </div>
                )
            })
        }

       

    </div>
 </div>
  
  )
}

export default Products