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
  const [list, setList] = useState([]);
  const [data, setData] = useState([
    [1, 2],
    [3, 4]
  ]);
  useEffect(() => setList(Checking(2, 4, [1, 2, 3, 4  ])),[])
  return (
    <div >
      {/* <div style={{width:50}} className='line   '></div> */}
      {/* {console.log(list)} */}
      {list && list.map(el_color => {
        console.log(el_color)
       return data.map(el => <div style={{ color: "white", display: "flex",gap:"20px", margin:"20px"}}>
          {el.map(el2 => <div style={{ color: "white", padding: "80px", border: "1px solid #ffd ", fontSize: "32px" ,background:el_color.find(col=>col==el2) ? "blue":"red" }} >{el2}</div>)}
        </div>)
      })}
    </div>
  )
}

export default App
