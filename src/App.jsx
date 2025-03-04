import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Creator from './Creator';
import Provider from './Provider';
import { Check } from './Checker';
import { Checking } from './system/Checking';

function App() {
  // const [data, setCount] = useState([{id:1,distance:50,child:[{id:2,distance:50,child:[{id:3,distance:50,child:[{id:4,distance:50,child:[]},{id:5,distance:50,child:[]}]},{id:6,distance:50,child:[{id:7,distance:50,child:[]},{id:8,distance:50,child:[]}]}]},{id:9,distance:50,child:[]}]}]);
  // console.log(data)
  const [loc, setLoc] = useState(6);
  const [data, setData] = useState([
    [1, 2],
    [3,4]
  ]);
  useEffect(()=>console.log( Checking(loc,data) )  )
  return (
    <>
      {/* <div style={{width:50}} className='line   '></div> */}
      {/* <Provider data={data} /> */}
      {data.map(el=><div style={{color:"white",display:"flex"}}>
        {el .map(el2=><div style={{color:"white",padding:"80px",border:"1px solid #ffd ",fontSize:"32px"}} >{el2}</div>)}
      </div>)}
    </>
  )
}

export default App
