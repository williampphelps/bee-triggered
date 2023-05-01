import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import LogTypes from "../../utility/LogTypes";

import useDataFetcher from "./DataFetcher";

import TimeAgo from "timeago-react";

import axios from "axios";

export default function LogModal(props) {

  const { data, loading, error, refetch } = useDataFetcher('/api/log/' + props.log);
  const { data: machineData, loading: machineLoading, error: machineError } = useDataFetcher('/api/machines/' + data?.node_id);


  const local_time = new Date(data?.local_time).toLocaleString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }
  );

  const markRead = () => {
    axios.put('/api/log/' + data?._id, { status: 'read' }).then((res) => {
      props.setOpen(false);
      refetch();
    });
  }
  const markUnread = () => {
    axios.put('/api/log/' + data?._id, { status: 'unread' }).then((res) => refetch());
  }

  if (loading || error || machineError || machineLoading) {
    return (
      <Dialog
        open={props.open}
        onClose={() => props.setOpen(false)}
        as="div"
        className="cards-container fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center p-4 bg-neutral-900/25"
      >
        <Dialog.Panel className="relative card bg-green-500 shadow-xl shadow-blue-500/25 rounded-lg md:w-7/12 w-full h-3/4">
          <div className="card-content static p-8 bg-neutral-900 flex flex-col gap-4 h-full">
            <div className="static flex flex-col gap-1 h-full overflow-auto">
              <Dialog.Title className="text-3xl">Loading...</Dialog.Title>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    )
  }


  return (
    <Dialog
      open={props.open}
      onClose={() => props.setOpen(false)}
      as="div"
      className="cards-container fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center p-4 bg-neutral-900/25"
    >
      <Dialog.Panel className="relative card bg-green-500 shadow-xl shadow-blue-500/25 rounded-lg md:w-7/12 w-full h-3/4">
        <div className="card-content static p-8 bg-neutral-900 flex flex-col gap-4 h-full">
          <div className="static flex flex-col gap-1 h-full overflow-auto">
            <Dialog.Title className="text-3xl">{LogTypes[data?.logtype]?.title} on {machineData?.name}</Dialog.Title>
            <Dialog.Description className="text-sm mb-4">
              {data?.status == "unread" ? <button className='px-4 py-2 bg-blue-500 rounded-lg' onClick={markRead}>Mark Read</button> : <button className='px-4 py-2 bg-blue-500 rounded-lg' onClick={markUnread}>Mark Unread</button>}
            </Dialog.Description>
            <div className='grid grid-cols-2 gap-2 pb-4'>
              <div className='bg-neutral-800 rounded-lg p-4'>
                <b>Time Since:</b><br />
                <TimeAgo datetime={data?.local_time} />
              </div>
              <div className='bg-neutral-800 rounded-lg p-4'>
                <b>Timestamp:</b><br />
                {local_time}
              </div>
              <div className='bg-neutral-800 rounded-lg p-4'>
                <b>Location:</b><br />
                {machineData?.location}
              </div>
              <div className='bg-neutral-800 rounded-lg p-4'>
                <b>Device:</b><br />
                {machineData?.name}
              </div>
              <div className='bg-neutral-800 rounded-lg p-4'>
                <b>Source IP:</b><br />
                {data?.src_host} : {data?.src_port}
              </div>
              <div className='bg-neutral-800 rounded-lg p-4'>
                <b>Device IP:</b><br />
                {data?.dst_host} : {data?.dst_port}
              </div>
            </div>
            <div className='bg-neutral-800 w-full rounded-lg p-4'>
              <div className='w-full overflow-auto'>
                <b>Log Data</b><br /><br />
                {data?.logdata ? Object.keys(data?.logdata).map((key, index) => {
                  if (typeof (data?.logdata[key]) === 'object' && data?.logdata[key] !== null) {
                    let dataOBJ = data?.logdata[key];
                    console.log(dataOBJ);
                    return (
                      <>
                        {Object.keys(dataOBJ).map((objKey, objIndex) => {
                          return (
                            <div key={objIndex} className='grid grid-cols-4 w-full border-b border-neutral-700 hover:bg-neutral-700 py-2 overflow-auto'>
                              <span className='font-bold'>{objKey}</span>
                              <span className='col-span-3'>{dataOBJ[objKey]}</span>
                            </div>
                          )
                        })}
                      </>
                    )

                  }
                  return (
                    <div key={index} className='grid sm:grid-cols-4 grid-cols-1 w-full border-b border-neutral-700 hover:bg-neutral-700 py-2 overflow-auto'>
                      <span className='font-bold col-span-1'>{key}</span>
                      <span className='col-span-3'>{data?.logdata[key]}</span>
                    </div>
                  )

                }) : () => { return <p>Loading...</p> }}
              </div>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
