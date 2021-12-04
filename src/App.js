import { useState } from 'react';
import './App.css';
import Mood from './mood_comps/Mood'

function App() {

  const [state, setstate] = useState(0)
  const [mVal,setMVal] = useState()
    let printVal = (event)=>{
        console.log(event.target.value)
        setstate(event.target.value)
        if(event.target.value >65){
          setMVal(false)
          // console.log(mVal)
        }
        else 
          setMVal(true)
        // else if(event.target.value>=30 && event.target.value<65)
        //   setMVal(1)
        // else 
        //   setMVal(2)
    }
  return (
    <div className="App" style={{width:"100vw",height:"100vh",backgroundColor:(state<30 ?"#ec1c24":((state>=30 && state<65) ?"#fdbd10":"#7fbb00"))}}>
    <div style={{display:"flex",width:"100vw",height:"70vh",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <div style={{display:"flex"}}>
        <div style={{height:"100px"}}>
          <div className="Eyes" style={{width:"100px",height:`${state*0.8}px`, borderStyle:"solid", borderRadius:"0 0 240px 240px", backgroundColor:"#d7d7d8"}}>
            <div style={{display:mVal && "none",width:"10px", height:"45px", borderStyle:"solid", borderRadius:"50%", marginTop:"5px",marginLeft:"40px", backgroundColor:"black"}}></div>
          </div>
        </div>
        <div style={{height:"100px", marginLeft:"50px"}}>
          <div className="Eyes" style={{width:"100px",height:`${state*0.8}px`, borderStyle:"solid", borderRadius:"0 0 240px 240px", backgroundColor:"#d7d7d8"}}>
          <div style={{display:mVal && "none",width:"10px", height:"45px", borderStyle:"solid", borderRadius:"50%",marginTop:"5px",marginLeft:"40px", backgroundColor:"black"}}></div>
          </div>
        </div>
      </div>
      <div style={{borderStyle:"solid",width:"50vw",height:"10vh",marginTop:"80px",borderRadius:`0 0 ${state*2}px ${state*2}px`,borderColor:"transparent transparent #000 transparent",borderWidth:"5px"}}></div>
      <h1 style={{borderStyle:"dotted"}}>How Are You Today?</h1>
    </div>
      <div style={{width:"70vw",paddingLeft:"20%"}}>
        <h1 style={{paddingLeft:"15%",position:"absolute",zIndex:"0",display:(state<30) ? "" : "none"}}>ANGRY</h1>
        <h1 style={{paddingLeft:"15%",position:"absolute",zIndex:"1",display:(state>=30 && state<65) ? "" : "none"}}>NEUTRAL</h1>
        <h1 style={{paddingLeft:"15%",position:"absolute",zIndex:"2",display:(state>65) ? "" : "none"}}>HAPPY</h1>
      <Mood printVal={printVal}/>
      </div>
    </div>
  );
}

export default App;
