import { useEffect, useState } from "react";
import { Dialog, Switch, Listbox } from "@headlessui/react";

import useDataFetcher from "./DataFetcher";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function MachineModal(props) {
  const [machineConfig, setMachineConfig] = useState({
    name: '',
    location: '',
    status: '',
    config: {},
  });
  const { data, loading, error, refetch } = useDataFetcher('/api/machines/' + props.machine);

  useEffect(() => {
    if (data) {
      console.log('updating object')
      let newMachineConfig = {
        name: data.name,
        location: data.location,
        status: data.status,
        config: data.config,
      }
      setMachineConfig(newMachineConfig);
    }
  }, [data]);


  const handleMachineChange = (index, event) => {
    let newMachineConfig = {...machineConfig};
    newMachineConfig[index] = event.target.value;
    setMachineConfig(newMachineConfig);
  }

  const handleConfigChange = (index, event) => {
    let newMachineConfig = {...machineConfig};
    if (event.target !== undefined) {
      newMachineConfig['config'][index] = event.target.value;
      console.log(event.target.value);
    } else {
      newMachineConfig['config'][index] = event;
    }
    setMachineConfig(newMachineConfig);
    console.log(machineConfig);
  }

  const updateMachine = () => {
    axios.put('/api/machines/' + props.machine, {
      'status': 'need update'
    }).then(() => refetch());
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Submitting changes!')

    axios.put('/api/machines/' + props.machine, machineConfig).then(() => props.setOpen(false));
  }

  

  return (
    <Dialog
      open={props.open}
      onClose={() => props.setOpen(false)}
      as="div"
      className="cards-container fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center p-4 bg-neutral-900/25"
    >
      <Dialog.Panel className="relative card bg-green-500 shadow-xl shadow-blue-500/25 rounded-lg md:w-7/12 w-full h-3/4">
        <div className="card-content static sm:p-8 p-4 bg-neutral-900 flex flex-col sm:gap-4 gap-1 h-full">
          <div className="static flex flex-col gap-1 h-full overflow-hidden">
            <Dialog.Title className="text-3xl">{data?.name} Settings</Dialog.Title>
            <Dialog.Description className="text-sm mb-4">
              Manage the settings of your {data?._id} | {data?.ip_address}
              <br />
              <button onClick={() => updateMachine()} className='px-4 py-2 rounded-lg bg-green-700 border border-green-600 hover:bg-green-600'>Update</button>
            </Dialog.Description>
            <form className="static pb-44 flex flex-col gap-4 py-10 text-sm min-h-full w-full overflow-auto" onSubmit={handleSubmit}>
              <div className="flex flex-col border-b border-neutral-800 py-4 gap-4">
                <p className="font-bold">Identification</p>
                <div className="flex flex-row gap-10 items-center justify-between">
                  <label htmlFor="device.node_id">
                    Hostname:
                  </label>
                  <input
                    type="text"
                    name="device-node_id"
                    placeholder={data?.name}
                    value={machineConfig.name}
                    onChange={(e) => handleMachineChange('name', e)}
                    className="grow rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
                <div className="flex flex-row gap-10 items-center justify-between">
                  <label htmlFor="device.node_id" className="shrink">
                    Location:
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder={data?.location}
                    value={machineConfig.location}
                    onChange={(e) => handleMachineChange('location', e)}
                    className="grow rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
                <div className="flex flex-row gap-10 items-center justify-between">
                  <label htmlFor="device.node_id" className="shrink">
                    Mac Address:
                  </label>
                  <input
                    type="text"
                    name="mac_prefix"
                    placeholder={data?.mac_prefix}
                    value={machineConfig.mac_prefix}
                    onChange={(e) => handleMachineChange('mac_prefix', e)}
                    className="grow rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                  <input
                    type="text"
                    name="mac_suffix"
                    placeholder={data?.mac_suffix}
                    value={machineConfig.mac_suffix}
                    onChange={(e) => handleMachineChange('mac_suffix', e)}
                    className="grow rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="flex flex-col border-b border-neutral-800 py-4 gap-4">
                <p className="font-bold">Git Settings</p>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="git.enabled">Git Enabled:</label>
                  <Switch
                    name="git.enabled"
                    checked={machineConfig.config['git-enabled']}
                    onChange={(e) => handleConfigChange('git-enabled', e)}
                    className="transition-all duration-500 flex flex-row ui-not-checked:justify-start ui-checked:justify-end p-1 h-6 w-11 items-center rounded-full ui-checked:bg-blue-500 ui-not-checked:bg-neutral-600"
                  >
                    <span className="sr-only">Enable Git</span>
                    <span className="inline-block h-4 w-4 transform rounded-full bg-neutral-200 transition ui-checked:float-right ui-not-checked:float-left" />
                  </Switch>
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="git-port">Git Port:</label>
                  <input
                    type="number"
                    name="git-port"
                    placeholder="9418"
                    value={machineConfig.config['git-port']}
                    onChange={(e) => handleConfigChange('git-port', e)}
                    className="rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="flex flex-col border-b border-neutral-800 py-4 gap-4">
                <p className="font-bold">FTP Settings</p>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="ftp-enabled">FTP Enabled:</label>
                  <Switch
                    name="ftp-enabled"
                    checked={machineConfig.config['ftp-enabled']}
                    onChange={(e) => handleConfigChange('ftp-enabled', e)}
                    className="flex flex-row ui-not-checked:justify-start ui-checked:justify-end p-1 h-6 w-11 items-center rounded-full ui-checked:bg-blue-500 ui-not-checked:bg-neutral-600"
                  >
                    <span className="sr-only">Enable FTP</span>
                    <span className="inline-block h-4 w-4 transform rounded-full bg-neutral-200 transition ui-checked:float-right ui-not-checked:float-left" />
                  </Switch>
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="ftp-port">FTP Port:</label>
                  <input
                    type="number"
                    name="ftp-port"
                    placeholder="21"
                    value={machineConfig.config['ftp-port']}
                    onChange={(e) => handleConfigChange('ftp-port', e)}
                    className="rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="ftp-banner">FTP Banner:</label>
                  <input
                    type="text"
                    name="ftp-banner"
                    placeholder="FTP server ready"
                    value={machineConfig.config['ftp-banner']}
                    onChange={(e) => handleConfigChange('ftp-banner', e)}
                    className="grow rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="flex flex-col border-b border-neutral-800 py-4 gap-4">
                <p className="font-bold">HTTP Settings</p>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="http.enabled">HTTP Enabled:</label>
                  <Switch
                    name="http.enabled"
                    checked={machineConfig.config['http-enabled']}
                    onChange={(e) => handleConfigChange('http-enabled', e)}
                    className="flex flex-row ui-not-checked:justify-start ui-checked:justify-end p-1 h-6 w-11 items-center rounded-full ui-checked:bg-blue-500 ui-not-checked:bg-neutral-600"
                  >
                    <span className="sr-only">Enable HTTP</span>
                    <span className="inline-block h-4 w-4 transform rounded-full bg-neutral-200 transition ui-checked:float-right ui-not-checked:float-left" />
                  </Switch>
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="http-port">HTTP Port:</label>
                  <input
                    type="number"
                    name="http-port"
                    placeholder="80"
                    value={machineConfig.config['http-port']}
                    onChange={(e) => handleConfigChange('http-port', e)}
                    className="rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="http-banner">
                    HTTP Banner:
                  </label>
                  <input
                    type="text"
                    name="http-banner"
                    placeholder="Apache/2.2.22 (Ubuntu)"
                    value={machineConfig.config['http-banner']}
                    onChange={(e) => handleConfigChange('http-banner', e)}
                    className="grow rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="http.skin">
                    HTTP Skin:
                  </label>
                  <Listbox value={machineConfig.config['http-skin']} onChange={(e) => handleConfigChange('http-skin', e)}>
                    <div className="relative grow">
                      <Listbox.Button className="relative w-full rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500 text-left">
                        <span>{machineConfig.config['http-skin']}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                      </Listbox.Button>
                      <Listbox.Options className="absolute mt-1 w-full max-h-60 z-10 overflow-auto rounded-lg bg-neutral-800 border border-neutral-700 shadow-lg shadow-blue-500/25">
                      {machineConfig?.config['http-skin-list']?.map((value, index) => {
                        return (
                          <Listbox.Option key={value._id} value={value.name} className="py-2 px-4 hover:bg-neutral-700">{value.desc}</Listbox.Option>
                        )
                      })}
                      </Listbox.Options>
                    </div>
                  </Listbox>
                </div>
              </div>
              <div className="flex flex-col border-b border-neutral-800 py-4 gap-4">
                <p className="font-bold">HTTP Proxy Settings</p>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="httpproxy.enabled">HTTP Proxy Enabled:</label>
                  <Switch
                    name="httpproxy.enabled"
                    checked={machineConfig.config['httpproxy-enabled']}
                    onChange={(e) => handleConfigChange('httpproxy-enabled', e)}
                    className="flex flex-row ui-not-checked:justify-start ui-checked:justify-end p-1 h-6 w-11 items-center rounded-full ui-checked:bg-blue-500 ui-not-checked:bg-neutral-600"
                  >
                    <span className="sr-only">Enable HTTP Proxy</span>
                    <span className="inline-block h-4 w-4 transform rounded-full bg-neutral-200 transition ui-checked:float-right ui-not-checked:float-left" />
                  </Switch>
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="httpproxy.port">HTTP Proxy Port:</label>
                  <input
                    type="number"
                    name="httpproxy.port"
                    placeholder="8080"
                    value={machineConfig.config['httpproxy-port']}
                    onChange={(e) => handleConfigChange('httpproxy-port', e)}
                    className="rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="httpproxy.skin">
                    HTTP Proxy Skin:
                  </label>
                  <Listbox value={machineConfig.config['httpproxy-skin']} onChange={(e) => handleConfigChange('httpproxy-skin', e)} className='w-full'>
                    <div className="relative grow">
                      <Listbox.Button className="relative w-full rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500 text-left">
                        <span>{machineConfig.config['httpproxy-skin']}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                      </Listbox.Button>
                      <Listbox.Options className="absolute mt-1 w-full max-h-60 z-10 overflow-auto rounded-lg bg-neutral-800 border border-neutral-700 shadow-lg shadow-blue-500/25">
                      {machineConfig?.config['httpproxy-skin-list']?.map((value, index) => {
                        return (
                          <Listbox.Option key={value._id} value={value.name} className="py-2 px-4 hover:bg-neutral-700">{value.desc}</Listbox.Option>
                        )
                      })}
                        <Listbox.Option className="py-2 px-4 hover:bg-neutral-700">Test OPtion</Listbox.Option>
                      </Listbox.Options>
                    </div>
                  </Listbox>
                </div>
              </div>
              <div className="flex flex-col border-b border-neutral-800 py-4 gap-4">
                <p className="font-bold">Portscan Settings</p>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="git.enabled">Portscan Enabled:</label>
                  <Switch
                    name="portscan.enabled"
                    checked={machineConfig.config['portscan-enabled']}
                    onChange={(e) => handleConfigChange('portscan-enabled', e)}
                    className="transition-all duration-500 flex flex-row ui-not-checked:justify-start ui-checked:justify-end p-1 h-6 w-11 items-center rounded-full ui-checked:bg-blue-500 ui-not-checked:bg-neutral-600"
                  >
                    <span className="sr-only">Enable Portscan</span>
                    <span className="inline-block h-4 w-4 transform rounded-full bg-neutral-200 transition ui-checked:float-right ui-not-checked:float-left" />
                  </Switch>
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="portscan.logfile" className="w-full">
                    Portscan Log File:
                  </label>
                  <input
                    type="text"
                    name="portscan.logfile"
                    placeholder="/var/log/kern.log"
                    value={machineConfig.config['portscan-logfile']}
                    onChange={(e) => handleConfigChange('portscan-logfile', e)}
                    className="w-full rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="portscan.synrate">Portscan Synrate:</label>
                  <input
                    type="number"
                    name="portscan.synrate"
                    placeholder="5"
                    value={machineConfig.config['portscan-synrate']}
                    onChange={(e) => handleConfigChange('portscan-synrate', e)}
                    className="rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="portscan.nmaposrate">
                    Portscan NmapOS Rate:
                  </label>
                  <input
                    type="number"
                    name="portscan.nmaposrate"
                    placeholder="5"
                    value={machineConfig.config['portscan-nmaposrate']}
                    onChange={(e) => handleConfigChange('portscan-nmaposrate', e)}
                    className="rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="portscan.synrate">Portscan Lo Rate:</label>
                  <input
                    type="number"
                    name="portscan.lorate"
                    placeholder="3"
                    value={machineConfig.config['portscan-lorate']}
                    onChange={(e) => handleConfigChange('portscan-lorate', e)}
                    className="rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="flex flex-col border-b border-neutral-800 py-4 gap-4">
                <p className="font-bold">SMB Settings</p>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="smb.enabled">SMB Enabled:</label>
                  <Switch
                    name="smb.enabled"
                    checked={machineConfig.config['smb-enabled']}
                    onChange={(e) => handleConfigChange('smb-enabled', e)}
                    className="transition-all duration-500 flex flex-row ui-not-checked:justify-start ui-checked:justify-end p-1 h-6 w-11 items-center rounded-full ui-checked:bg-blue-500 ui-not-checked:bg-neutral-600"
                  >
                    <span className="sr-only">Enable SMB</span>
                    <span className="inline-block h-4 w-4 transform rounded-full bg-neutral-200 transition ui-checked:float-right ui-not-checked:float-left" />
                  </Switch>
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="smb-auditfile" className="w-full">
                    SMB Audit File:
                  </label>
                  <input
                    type="text"
                    name="smb-auditfile"
                    placeholder="/var/log/samba-audit.log"
                    value={machineConfig.config['smb-auditfile']}
                    onChange={(e) => handleConfigChange('smb-auditfile', e)}
                    className="w-full rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="smb-configfile" className="w-full">
                    SMB Config File:
                  </label>
                  <input
                    type="text"
                    name="smb-configfile"
                    placeholder="/etc/samba/smb.conf"
                    value={machineConfig.config['smb-configfile']}
                    onChange={(e) => handleConfigChange('smb-configfile', e)}
                    className="w-full rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="smb-configfile" className="w-full">
                    SMB Sharename:
                  </label>
                  <input
                    type="text"
                    name="smb-sharename"
                    placeholder="My Documents"
                    value={machineConfig.config['smb-sharename']}
                    onChange={(e) => handleConfigChange('smb-sharename', e)}
                    className="w-full rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="smb-workgroup" className="w-full">
                    SMB Workgroup:
                  </label>
                  <input
                    type="text"
                    name="smb-workgroup"
                    placeholder="WORKGROUP"
                    value={machineConfig.config['smb-workgroup']}
                    onChange={(e) => handleConfigChange('smb-workgroup', e)}
                    className="w-full rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="flex flex-col border-b border-neutral-800 py-4 gap-4">
                <p className="font-bold">MySQL Settings</p>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="mysql.enabled">MySQL Enabled:</label>
                  <Switch
                    name="mysql.enabled"
                    checked={machineConfig.config['mysql-enabled']}
                    onChange={(e) => handleConfigChange('mysql-enabled', e)}
                    className="transition-all duration-500 flex flex-row ui-not-checked:justify-start ui-checked:justify-end p-1 h-6 w-11 items-center rounded-full ui-checked:bg-blue-500 ui-not-checked:bg-neutral-600"
                  >
                    <span className="sr-only">Enable MySQL</span>
                    <span className="inline-block h-4 w-4 transform rounded-full bg-neutral-200 transition ui-checked:float-right ui-not-checked:float-left" />
                  </Switch>
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="mysql.port" className="w-full">
                    MySQL Port:
                  </label>
                  <input
                    type="number"
                    name="mysql.port"
                    placeholder="3306"
                    value={machineConfig.config['mysql-port']}
                    onChange={(e) => handleConfigChange('mysql-port', e)}
                    className="rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="mysql.banner" className="">
                    MySQL Banner:
                  </label>
                  <input
                    type="text"
                    name="mysql.banner"
                    placeholder="5.5.43-0ubuntu0.14.04.1"
                    value={machineConfig.config['mysql-banner']}
                    onChange={(e) => handleConfigChange('mysql-banner', e)}
                    className="w-full rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="flex flex-col border-b border-neutral-800 py-4 gap-4">
                <p className="font-bold">SSH Settings</p>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="ssh.enabled">SSH Enabled:</label>
                  <Switch
                    name="ssh.enabled"
                    checked={machineConfig.config['ssh-enabled']}
                    onChange={(e) => handleConfigChange('ssh-enabled', e)}
                    className="transition-all duration-500 flex flex-row ui-not-checked:justify-start ui-checked:justify-end p-1 h-6 w-11 items-center rounded-full ui-checked:bg-blue-500 ui-not-checked:bg-neutral-600"
                  >
                    <span className="sr-only">Enable SSH</span>
                    <span className="inline-block h-4 w-4 transform rounded-full bg-neutral-200 transition ui-checked:float-right ui-not-checked:float-left" />
                  </Switch>
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="ssh.port" className="w-full">
                    SSH Port:
                  </label>
                  <input
                    type="number"
                    name="ssh.port"
                    placeholder="22"
                    value={machineConfig.config['ssh-port']}
                    onChange={(e) => handleConfigChange('ssh-port', e)}
                    className="rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="ssh.banner" className="">
                    SSH Banner:
                  </label>
                  <input
                    type="text"
                    name="ssh-banner"
                    value={machineConfig.config['ssh-banner']}
                    onChange={(e) => handleConfigChange('ssh-banner', e)}
                    placeholder="SSH-2.0-OpenSSH_5.1p1 Debian-4"
                    className="w-full rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="flex flex-col border-b border-neutral-800 py-4 gap-4">
                <p className="font-bold">Redis Settings</p>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="ssh.enabled">Redis Enabled:</label>
                  <Switch
                    name="redis.enabled"
                    checked={machineConfig.config['redis-enabled']}
                    onChange={(e) => handleConfigChange('redis-enabled', e)}
                    className="transition-all duration-500 flex flex-row ui-not-checked:justify-start ui-checked:justify-end p-1 h-6 w-11 items-center rounded-full ui-checked:bg-blue-500 ui-not-checked:bg-neutral-600"
                  >
                    <span className="sr-only">Enable Redis</span>
                    <span className="inline-block h-4 w-4 transform rounded-full bg-neutral-200 transition ui-checked:float-right ui-not-checked:float-left" />
                  </Switch>
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="redis.port" className="w-full">
                    Redis Port:
                  </label>
                  <input
                    type="number"
                    name="redis.port"
                    placeholder="6379"
                    value={machineConfig.config['redis-port']}
                    onChange={(e) => handleConfigChange('redis-port', e)}
                    className="rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="flex flex-col border-b border-neutral-800 py-4 gap-4">
                <p className="font-bold">RDP Settings</p>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="rdp.enabled">RDP Enabled:</label>
                  <Switch
                    name="rdp.enabled"
                    checked={machineConfig.config['rdp-enabled']}
                    onChange={(e) => handleConfigChange('rdp-enabled', e)}
                    className="transition-all duration-500 flex flex-row ui-not-checked:justify-start ui-checked:justify-end p-1 h-6 w-11 items-center rounded-full ui-checked:bg-blue-500 ui-not-checked:bg-neutral-600"
                  >
                    <span className="sr-only">Enable RDP</span>
                    <span className="inline-block h-4 w-4 transform rounded-full bg-neutral-200 transition ui-checked:float-right ui-not-checked:float-left" />
                  </Switch>
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="rdp.port" className="w-full">
                    RDP Port:
                  </label>
                  <input
                    type="number"
                    name="rdp.port"
                    placeholder="3389"
                    value={machineConfig.config['rdp-port']}
                    onChange={(e) => handleConfigChange('rdp-port', e)}
                    className="rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="flex flex-col border-b border-neutral-800 py-4 gap-4">
                <p className="font-bold">SIP Settings</p>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="sip.enabled">SIP Enabled:</label>
                  <Switch
                    name="sip.enabled"
                    checked={machineConfig.config['sip-enabled']}
                    onChange={(e) => handleConfigChange('sip-enabled', e)}
                    className="transition-all duration-500 flex flex-row ui-not-checked:justify-start ui-checked:justify-end p-1 h-6 w-11 items-center rounded-full ui-checked:bg-blue-500 ui-not-checked:bg-neutral-600"
                  >
                    <span className="sr-only">Enable SIP</span>
                    <span className="inline-block h-4 w-4 transform rounded-full bg-neutral-200 transition ui-checked:float-right ui-not-checked:float-left" />
                  </Switch>
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="sip.port" className="w-full">
                    SIP Port:
                  </label>
                  <input
                    type="number"
                    name="sip.port"
                    placeholder="5060"
                    value={machineConfig.config['sip-port']}
                    onChange={(e) => handleConfigChange('sip-port', e)}
                    className="rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="flex flex-col border-b border-neutral-800 py-4 gap-4">
                <p className="font-bold">SNMP Settings</p>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="rdp.enabled">SNMP Enabled:</label>
                  <Switch
                    name="snmp.enabled"
                    checked={machineConfig.config['snmp-enabled']}
                    onChange={(e) => handleConfigChange('snmp-enabled', e)}
                    className="transition-all duration-500 flex flex-row ui-not-checked:justify-start ui-checked:justify-end p-1 h-6 w-11 items-center rounded-full ui-checked:bg-blue-500 ui-not-checked:bg-neutral-600"
                  >
                    <span className="sr-only">Enable SNMP</span>
                    <span className="inline-block h-4 w-4 transform rounded-full bg-neutral-200 transition ui-checked:float-right ui-not-checked:float-left" />
                  </Switch>
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="snmp.port" className="w-full">
                    SNMP Port:
                  </label>
                  <input
                    type="number"
                    name="snmp.port"
                    placeholder="161"
                    value={machineConfig.config['snmp-port']}
                    onChange={(e) => handleConfigChange('snmp-port', e)}
                    className="rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="flex flex-col border-b border-neutral-800 py-4 gap-4">
                <p className="font-bold">NTP Settings</p>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="ntp.enabled">NTP Enabled:</label>
                  <Switch
                    name="ntp.enabled"
                    checked={machineConfig.config['ntp-enabled']}
                    onChange={(e) => handleConfigChange('ntp-enabled', e)}
                    className="transition-all duration-500 flex flex-row ui-not-checked:justify-start ui-checked:justify-end p-1 h-6 w-11 items-center rounded-full ui-checked:bg-blue-500 ui-not-checked:bg-neutral-600"
                  >
                    <span className="sr-only">Enable NTP</span>
                    <span className="inline-block h-4 w-4 transform rounded-full bg-neutral-200 transition ui-checked:float-right ui-not-checked:float-left" />
                  </Switch>
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="ntp.port" className="w-full">
                    NTP Port:
                  </label>
                  <input
                    type="number"
                    name="ntp.port"
                    placeholder="123"
                    value={machineConfig.config['ntp-port']}
                    onChange={(e) => handleConfigChange('ntp-port', e)}
                    className="rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="flex flex-col border-b border-neutral-800 py-4 gap-4">
                <p className="font-bold">TFTP Settings</p>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="tftp.enabled">TFTP Enabled:</label>
                  <Switch
                    name="tftp.enabled"
                    checked={machineConfig.config['tftp-enabled']}
                    onChange={(e) => handleConfigChange('tftp-enabled', e)}
                    className="transition-all duration-500 flex flex-row ui-not-checked:justify-start ui-checked:justify-end p-1 h-6 w-11 items-center rounded-full ui-checked:bg-blue-500 ui-not-checked:bg-neutral-600"
                  >
                    <span className="sr-only">Enable TFTP</span>
                    <span className="inline-block h-4 w-4 transform rounded-full bg-neutral-200 transition ui-checked:float-right ui-not-checked:float-left" />
                  </Switch>
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="tftp.port" className="w-full">
                    TFTP Port:
                  </label>
                  <input
                    type="number"
                    name="tftp.port"
                    placeholder="69"
                    value={machineConfig.config['tftp-port']}
                    onChange={(e) => handleConfigChange('tftp-port', e)}
                    className="rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="flex flex-col border-b border-neutral-800 py-4 gap-4">
                <p className="font-bold">VNC Settings</p>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="vnc.enabled">VNC Enabled:</label>
                  <Switch
                    name="vnc.enabled"
                    checked={machineConfig.config['vnc-enabled']}
                    onChange={(e) => handleConfigChange('vnc-enabled', e)}
                    className="transition-all duration-500 flex flex-row ui-not-checked:justify-start ui-checked:justify-end p-1 h-6 w-11 items-center rounded-full ui-checked:bg-blue-500 ui-not-checked:bg-neutral-600"
                  >
                    <span className="sr-only">Enable VNC</span>
                    <span className="inline-block h-4 w-4 transform rounded-full bg-neutral-200 transition ui-checked:float-right ui-not-checked:float-left" />
                  </Switch>
                </div>
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center sm:justify-between">
                  <label htmlFor="vnc.port" className="w-full">
                    VNC Port:
                  </label>
                  <input
                    type="number"
                    name="vnc.port"
                    placeholder="5000"
                    value={machineConfig.config['vnc-port']}
                    onChange={(e) => handleConfigChange('vnc-port', e)}
                    className="rounded-lg py-2 px-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 transition-all duration-500"
                  />
                </div>
              </div>
              <input type='submit' name='submit' value='Save Changes' className="absolute w-full bottom-0 left-0 bg-green-600 hover:bg-green-500 py-2 px-4 rounded-b-lg float-right cursor-pointer" />
            </form>
          </div>
          
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
