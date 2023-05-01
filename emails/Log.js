import { Tailwind } from '@react-email/tailwind';
import { Img } from '@react-email/img';
export default function EmailLog(props) {
  return (
    <Tailwind>
      <div className="p-2">
        <div className="flex flex-row gap-4 items-center">
          <Img src="https://www.beetriggered.com/logo.png" alt="Bee Triggered Logo" className='w-16 rounded-full' />
          <h1 className="font-bold text-3xl">Bee Triggered</h1>
        </div>
        <div className="bg-slate-800 text-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl">{props.title}</h1>
          <div className="py-4">
            <div className='my-2 bg-slate-700 rounded-lg p-4 shadow-lg'>
              <b>Timestamp:</b><br />
              {props.timestamp}
            </div>
            <div className='my-2 bg-slate-700 rounded-lg p-4 shadow-lg'>
              <b>Location:</b><br />
              {props.location}
            </div>
            <div className='my-2 bg-slate-700 rounded-lg p-4 shadow-lg'>
              <b>Source IP:</b><br />
              {props.sourceip}
            </div>
            <div className='my-2 bg-slate-700 rounded-lg p-4 shadow-lg'>
              <b>Device IP:</b><br />
              {props.deviceip}
            </div>
            <div className='my-2 bg-slate-700 rounded-lg p-4 shadow-lg'>
              <b>Device:</b><br />
              {props.device}
            </div>
          </div>
          <div className='bg-slate-700 rounded-lg p-4 shadow-lg'>
            <b>Log Data</b><br /><br />
            {Object.keys(props.logdata).map((key, index) => {
              if (typeof (props.logdata[key]) === 'object' && props.logdata[key] !== null) {
                let dataOBJ = props.logdata[key];
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
                <div key={index} className='grid grid-cols-1 w-full border-b border-neutral-700 hover:bg-neutral-700 py-2 overflow-auto'>
                  <span className='font-bold col-span-1'>{key}</span>
                  <span className='col-span-3'>{props.logdata[key]}</span>
                </div>
              )

            })}
          </div>
        </div>
      </div>
    </Tailwind>
  );
}
