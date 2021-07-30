import React from 'react';
import { useState } from 'react';
//import './index.css';
import './clc.css';

const App =()=> {
  let purple = "#cecece";
  let Name = 'Light'
  let Time = new Date().toLocaleTimeString();
  let Tcolor = "#2c2b2b";
  const [Bg,nBg] = useState(purple);
  const [Nm, nNm] = useState(Name);
  const [Ctime,Ntime]= useState(Time);
  const [Ctc, Ntc] = useState(Tcolor);
    const ubg = ()=> {
      let rEd = "#2c2b2b";
      let Name = 'Dark';
      let Tcolor = "#cecece";
      nBg(rEd);
      nNm(Name);
      Ntc(Tcolor);
      
    }
    const Uptime=()=>{
       let Time = new Date().toLocaleTimeString();
       Ntime(Time);
    }

    const ubgD=()=>{
       let purple = "#cecece";
       let Name = 'Light'
       let Tcolor = "#2c2b2b";
       nBg(purple);
       nNm(Name);
       Ntc(Tcolor);
    }
    setInterval(Uptime,1000);
    return (
      <>
        <div className="back" style={{ backgroundColor: Bg }}>
          <div className="card">
            <h1 style={{ color: Ctc }}>{Ctime}</h1>
            <button className="mode" onClick={ubg} onDoubleClick={ubgD}>
              {Nm}
            </button>
          </div>
        </div>
      </>
    );
};
export default App;


