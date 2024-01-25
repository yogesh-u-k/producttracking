import React,{useState, useEffect} from 'react'
import { Str1 } from '.';

export default ({getModel, setGetModel, getShipment})=>{
  const [index, setIndex] = useState(0);
  const [singleShipmentData, setSingleShipmentData] = useState();

  const getshipmentData = async () =>{
    const getData = await getShipment(index);
    setSingleShipmentData(getData);
    console.log(getData);
  };
  console.log(singleShipmentData);

  const converTime= (time)=>{
    const newTime = new Date(time);
    const dateTime = new Intl.DateTimeFormat("en-US",{
      year:"numeric",
      month:"2-digit",
      day:"2-digit",
    }).format(newTime);

    return dateTime;
  };

  const convertUnixTimestampToTime = (timestamp) => {
    // Multiply by 1000 to convert from seconds to milliseconds
    const unixTimestampInMillis = timestamp * 1000;

    const newTime = new Date(unixTimestampInMillis);
    const formattedTime = new Intl.DateTimeFormat("en-US", {
        
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
    }).format(newTime);

    return formattedTime;
};

  return getModel?(
    <div className='fixed inset-0 z-10 overflow-y-auto'>
      <div
      className='fixed inset-0 w-full h-full bg-black opacity-40 '
      onClick={()=>setGetModel(false)}
      ></div>
      <div className='flex items-center min-h-screen px-4 py-8'
      >
        <div className='relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg'>
          <div className='flex justify-end'>
            <button
            className='p-2 text-gray-400 rounded-md hover:bg-gray-100'
            onClick={()=> setGetModel(false)}
            >
              <Str1></Str1>
              
            </button>
          </div>
          <div 
          className='max-w-sm mx-auto py-3 space-y-3 text-center'>
            <h4 className='text-lg font-medium text-gray-800'>
              Product Tracking Details
            </h4>
            <form onSubmit={(e)=> e.preventDefault()}>
              <div className='relative mt-3'>
                <input 
                type='number'
                placeholder='Id'
                className='w-full pl-5 pr-3 py-2 text-gray-600 bg-transparent outline-none border focus:border-indigo-600shadow-sm rounded-lg' onChange={(e)=> setIndex(e.target.value)}></input>
              </div>
              <button 
              onClick={()=> getshipmentData()}
              className='block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover: bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2'>
                Get Details
              </button>

            </form>

            {singleShipmentData == undefined ? ("")
            :(<div className='text-left text-black '>
              <p>Sender: {singleShipmentData.sender.slice(0,25)}...</p>
              <p>Receiver:{singleShipmentData.receiver.slice(0,25)}...</p>
              <p>PickupTime:{converTime(singleShipmentData.pickupTime)}</p>
              <p>DeliveryTime:{convertUnixTimestampToTime(singleShipmentData.deliveryTime)}</p>
              <p>Distance:{singleShipmentData.distance}km</p>
              <p>Price:{singleShipmentData.price}</p>
              <p>Status: {singleShipmentData.status == 0 
                  ? "Pending"
                :singleShipmentData.status == 1
                ? "In-TRANSIT"
              :"Delivered"}</p>
              <p>Paid:{singleShipmentData.isPaid ? "Complete" : "Not Complete"}</p>
             
          </div>
           )
          }
        </div>
      </div>
    </div>
    </div>
  ):("");
}