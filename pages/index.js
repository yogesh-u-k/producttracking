import React,{useEffect, useState, useContext} from 'react'

import {
  Table,
  Form,
  Services,
  Profile,
  CompleteShipment,
  GetShipment,
  StartShipment
} from "../Components/index";

import { TrackingContext } from '@/Conetxt/Tracking';

const index = ()=>
{
  const{
    currentUser,
    createShipment,
    getAllShipment,
    completeShipment,
    getShipment,
    startShipment,
    getShipmentsCount,
  } = useContext (TrackingContext);

  //state variable
  const [createShipmentModel, setCreateShipmentModel]= useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [startModal , setStartModal]= useState(false);
  const [completeModal, setCompleteModal]= useState(false);
  const [getModel, setGetModel] = useState(false);

  //data state variable
  const[allShipmentsdata, setallShipmentsdata] = useState();

  useEffect(()=>{
    const getCampaignsData = getAllShipment();
    return async () =>{
      const allData = await getCampaignsData;
      setallShipmentsdata(allData);
    };
  },[])
 return (
  <div className='bg-white'>
  <Services 
    setOpenProfile={setOpenProfile}
    setCompleteModal={setCompleteModal}
    setGetModel={setGetModel}
    setStartModal={setStartModal}
    ></Services>

    <Table
       setCreateShipmentModel={setCreateShipmentModel}
       allShipmentsdata={allShipmentsdata}
      ></Table>

      <Form
      createShipmentModel = {createShipmentModel}
      createShipment={createShipment}
      setCreateShipmentModel={setCreateShipmentModel}
      ></Form>

      <Profile className="text-black"
      openProfile={openProfile}
      setOpenProfile ={setOpenProfile}
      currentUser={currentUser}
      getShipmentsCount ={getShipmentsCount}
      ></Profile>

      <CompleteShipment
      completeModal={completeModal}
      setCompleteModal={setCompleteModal}
      completeShipment={completeShipment}
      ></CompleteShipment>

      <GetShipment
        getModel={getModel}
        setGetModel={setGetModel}
        getShipment={getShipment}
        >

        </GetShipment>

        <StartShipment
        startModal={startModal}
        setStartModal={setStartModal}
        startShipment={startShipment}
        />

  </div>
 );
  
};
export default index;