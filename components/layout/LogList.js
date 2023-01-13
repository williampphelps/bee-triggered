import { useState, useEffect } from "react";
import useDataFetcher from "/components/layout/DataFetcher";
import LogTypes from "../../utility/LogTypes";
import TimeAgo from "timeago-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from '@fortawesome/free-solid-svg-icons'
export default function LogList(props) {
  const { data, loading, error, refetch } = useDataFetcher("/api/log");

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const openModal = (id) => {
    props.setLog(id);
    props.setOpen(true);
  }

  if (data) {
    return (
      <>
        {data.map((value, index) => {
          const local_time = new Date(value.local_time_adjusted).toLocaleString(
            "en-US",
            {
              hour: "2-digit",
              minute: "2-digit",
            }
          );
          if (value.logtype >= 2000 && value.status == "unread") {
            return (
              <div
                key={index}
                onClick={() => openModal(value._id)}

                className="card bg-neutral-400/50 hover:bg-neutral-400 transition-all duration-1000 rounded-lg cursor-pointer hover:shadow-2xl hover:shadow-blue-500/50"
              >
                <div className="card-content bg-neutral-800/95 py-3 px-4 flex flex-row items-center gap-4">
                  <div className='h-12 w-12 text-center rounded-full bg-red-500 flex items-center justify-center'>
                    <FontAwesomeIcon icon={faBell} />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <span className="text-lg">
                      {LogTypes[value.logtype].title} - <TimeAgo datetime={value.local_time} />
                    </span>
                    <small>from {value.dst_host}</small>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </>
    );
  }
}
