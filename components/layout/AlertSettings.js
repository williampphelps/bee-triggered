import { useEffect, useState } from "react";
import { Dialog, Listbox } from "@headlessui/react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useDataFetcher from "./DataFetcher";
import axios from "axios";

export default function AlertSettingsModal(props) {

  const { data, loading, error, refetch } = useDataFetcher('/api/handlers/');

  const [newAddress, setNewAddress] = useState("");
  const [newType, setNewType] = useState("Email");

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('/api/handlers/', { address: newAddress, type: newType }).then((res) => {
      refetch();
      setNewAddress("");
    });

  }

  if (loading || error) {
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
          <Dialog.Title className="text-3xl">Alert Settings</Dialog.Title>
          <Dialog.Description className="text-sm mb-4">
          </Dialog.Description>
          <div className="flex flex-col gap-4">
            <b>Alert Handlers</b>
            <div>
              {data?.map((value, index) => {
                return (
                  <div key={index} className='grid grid-cols-4 w-full border-b border-neutral-700 hover:bg-neutral-700 py-2 overflow-auto'>
                    <span className='font-bold'>{value.type}</span>
                    <span className='col-span-3'>{value.address}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4 py-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                <label htmlFor="http-banner">
                  Address:
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder={newType + " Address"}
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  className="grow rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                <label htmlFor="http.skin">
                  Alert Type:
                </label>
                <Listbox value={newType} onChange={(e) => setNewType(e)}>
                  <div className="relative grow">
                    <Listbox.Button className="relative w-full rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500 text-left">
                      <span>{newType}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <FontAwesomeIcon icon={faChevronDown} />
                      </span>
                    </Listbox.Button>
                    <Listbox.Options className="absolute mt-1 w-full max-h-60 z-10 overflow-auto rounded-lg bg-neutral-800 border border-neutral-700 shadow-lg shadow-blue-500/25">
                      <Listbox.Option value="Email" className="py-2 px-4 hover:bg-neutral-700">Email</Listbox.Option>
                      <Listbox.Option value="Microsoft Teams Webhook" className="py-2 px-4 hover:bg-neutral-700">Microsoft Teams Webhook</Listbox.Option>
                      <Listbox.Option value="Slack Webhook" className="py-2 px-4 hover:bg-neutral-700">Slack Webhook</Listbox.Option>
                      <Listbox.Option value="Custom Webhook" className="py-2 px-4 hover:bg-neutral-700">Custom Webhook</Listbox.Option>
                    </Listbox.Options>
                  </div>
                </Listbox>
              </div>
              <input type="submit" value="Add New Alert Handler" className="py-2 px-4 bg-green-400 text-white hover:bg-green-500" />
            </form>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
