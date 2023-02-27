import CardsContainer from "../components/layout/CardsContainer";
import Link from "next/link";

import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faRobot } from "@fortawesome/free-solid-svg-icons";
import LogList from "../components/layout/LogList";
import useDataFetcher from '../components/layout/DataFetcher';

import { Tab } from "@headlessui/react";
import { useState, useEffect } from "react";
import MachineSettingsModal from "../components/layout/MachineSettingsModal";
import LogInfoModal from '../components/layout/LogModal';
import axios from "axios";
import TimeAgo from "timeago-react";

export default function Home() {
  const { data: session } = useSession();
  const { data, loading, error, refetch } = useDataFetcher('/api/machines/');

  const [open, setOpen] = useState(false);
  const [machineModalId, setMachineModalId] = useState("63b70c238b56bcd1920ee5ef");

  const [logOpen, setLogOpen] = useState(false);
  const [log, setLog] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const openModal = (id) => {
    setMachineModalId(id);
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const createMachine = async () => {
    axios.post("/api/machines/", {
      name: 'bee-' + Math.random().toString(16).substr(2, 4),
      location: "On The Way",
      user: session.user.id,
      status: 'unactivated',
    }).then((res) => console.log(res)).then(() => refetch());
  }

  if (!session) {
    return (
      <CardsContainer>
        <div className="p-24">
          <h1 className="text-6xl p-1 text-glow text-animated text-center bg-clip-text bg-gradient-to-r from-blue-500 via-emerald-500 to-green-500 text-transparent mb-10">
            Bee Triggered
          </h1>
          <div className="flex w-full overflow-hidden items-center justify-center">
            <div className="cards-container flex flex-wrap gap-5 w-full items-center justify-center p-24">
              <Link
                href="/account/signin"
                className="card bg-blue-500/75 hover:bg-blue-500 transition-all duration-500 rounded-lg cursor-pointer shadow-md shadow-blue-500/75 hover:shadow-lg hover:shadow-blue-500/75"
              >
                <div className="card-content text-center bg-neutral-800 p-24 transition-all duration-500">
                  <h1 className="text-3xl text-glow">Sign In</h1>
                </div>
              </Link>
              <Link
                href="/account/signup"
                className="card bg-blue-500/75 hover:bg-blue-500 transition-all duration-500 rounded-lg cursor-pointer shadow-md shadow-blue-500/75 hover:shadow-lg hover:shadow-blue-500/75"
              >
                <div className="card-content text-center bg-neutral-800 p-24 transition-all duration-500">
                  <h1 className="text-3xl text-glow">Sign Up</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </CardsContainer>
    );
  } else {
    return (
      <CardsContainer>
        <div className="md:p-24 sm:p-10 p-4 flex flex-col gap-10">
          <h1 className="text-6xl text-center">
            Welcome, {session.user.full_name}
          </h1>
          <div className="cards-container flex flex-col gap-1 h-64 overflow-auto">
            <LogList setOpen={setLogOpen} setLog={setLog} />
          </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              <div onClick={createMachine} className="card bg-gradient-to-tl from-green-500 via-blue-500 to-green-500 transition-all duration-1000 rounded-lg shadow-md shadow-blue-500 hover:shadow-lg hover:shadow-blue-500 cursor-pointer">
                <div className="card-content h-full text-center bg-neutral-800/95 p-12 flex flex-col justify-center gap-4 backdrop-blur-lg filter">
                  <FontAwesomeIcon icon={faCoins} className="text-6xl" />
                  <h1 className=" text-3xl">Canary Tokens</h1>
                </div>
              </div>
              {data?.map((value, index) => {
                return (
                  <div key={value._id} onClick={() => openModal(value._id)} className="card bg-gradient-to-tl from-green-500 via-blue-500 to-green-500 transition-all duration-1000 rounded-lg shadow-md shadow-blue-500 hover:shadow-lg hover:shadow-blue-500 cursor-pointer">
                    <div className="text-center card-content h-full bg-neutral-800/95 p-12 flex flex-col justify-center gap-4 backdrop-blur-lg filter">
                      <FontAwesomeIcon icon={faRobot} className="text-6xl" />
                      <h1 className="text-3xl">{value.name}</h1>
                      <small><b>Status:</b> {value.status}</small>
                      <small><b>Version:</b> {value.software_version}</small>
                      <small><b>Last Heartbeat: </b> <TimeAgo datetime={value.last_seen} /></small>
                      <small><b>Location:</b> {value.location}</small>
                      <small><b>IP Address:</b> {value.ip_address}</small>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
        <MachineSettingsModal
          machine={machineModalId}
          open={open}
          setOpen={setOpen}
        />
        <LogInfoModal
          log={log}
          open={logOpen}
          setOpen={setLogOpen}
        />
      </CardsContainer>
    );
  }
}
