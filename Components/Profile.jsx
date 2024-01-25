import React,{useState, useEffect} from "react";
import Image from "next/image";
import { Str1 } from ".";
 

// Internal import
import { images } from "../Images/index";

export default ({
  openProfile,
  setOpenProfile,
  currentUser,
  getShipmentsCount,
}) =>


{
 
  const [count , setCount ]= useState();
  useEffect(() =>{
    const getShipmentData = getShipmentsCount();

    return async ()=>{
      const allData = await getShipmentData;
      setCount(allData);
    };
  
},[]);

  return openProfile?(
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40"
      onClick={()=> setOpenProfile(false)}></div>
    
          <div
          className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="flex justify-end">
                  <button 
                  className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                  onClick={()=> setOpenProfile(false)}>
                    <Str1></Str1>
                  </button>
    
                </div>

                <div
                className="max-w-sm mx-auto py-3 space-y-3 text-center">
                  <div class= "flex flex-col items-center pd-10">
                    <Image 
                    class="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src="data:image/png;base64,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" width={25} height={25}
                    alt="Bonnie image"
                    />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-while" >
                     Welcome Trader
                    </h5>
                      
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                      {currentUser}
                    </span>
                    <div class ="flex mt-4 space-x-3 md:mt-6">
                      <a
                      href="#"
                      class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black rounded-lg border-2">
                        Balance: 345 ETH
                      </a>
                      <a 
                      href="#"
                      class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black rounded-lg border-2">
                        Total Shipment: {count}
                      </a>
                    </div>
                  </div>
                </div>
            </div>
            </div>

                </div>
  ):("")
}

