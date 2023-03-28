import React, { useEffect, useState } from "react";
import Reload from '../assets/pic/reload.png'
import audioo from '../assets/audio/sword.wav'
import {BrowserView, MobileView} from 'react-device-detect';
import PCballs from "./PCballs";
import MoblieBalls from "./MoblieBalls";
import { Link } from "react-router-dom";

const Play = () => {
  const [gameCompleted, setGameCompleted] = useState(false);
  const  [score , setScore] = useState(0);
  let [counter, setCounter] = useState(60);

  const startCounter = () => {
    setCounter(--counter);
  };
const updateScore = ()=>{
setScore(score+100);
var audio = new Audio(audioo);
audio.play();
}

  useEffect(() => {
    const ok = setInterval(() => {
      if (counter > 0) startCounter();
      else clearInterval(setCounter() ,setGameCompleted(true));
    }, 1000);
    return () => {
      clearInterval(ok);
    };
  }, []);

  return (
    <>
      <div className="main">
        <video src='https://static.moewalls.com/videos/preview/2022/itachi-uchiha-blood-moon-naruto-shippuden-preview.mp4' autoPlay loop muted></video>
      </div>
    <BrowserView>
      

{gameCompleted ? (
        <div className=" text-white text-[50px] text-center  flex justify-center  flex-col mt-[100px]  ">
       <p className=""> Your score is : { score} </p>
<Link to ='/'> <img  src={Reload} className=' h-[200px] w-[200px] ml-[550px] mt-[50px] reload ' alt="" /></Link>
  
   
 

        </div>
      ) : (
<div>
  <div className="">
  <h1 className=" text-white text-center text-[50px] mr-5 select-none"> {score} <span className=" text-white  text-[50px] select-none ml-[500px]" > {counter} </span></h1>

     
  </div>

      <div onClick={updateScore}> <PCballs /></div>
</div>

      
     
      )}
    </BrowserView>

     <MobileView>

     {gameCompleted ? (
        <div className=" text-white text-[50px] text-center  flex justify-center  flex-col mt-[100px]  ">
       <p className=" text-black"> Your score is : { score} </p>
       <Link to ='/'>  <img  src={Reload} className=' h-[70px] w-[70px] ml-[170px] mt-[50px] reload ' alt="" /></Link>

        </div>
      ) : (
<div className="">
  <div className="flex flex-col">
  <h1 className=" text-black text-[50px] mr-5 select-none"> {score} <span className=" text-black text-left text-[50px] justify-end select-none ml-[100px]">{counter} </span></h1>
  </div>

      <div onClick={updateScore}> <MoblieBalls /></div>
</div>
      
     
      )}
     </MobileView>


    
    </>
  );
};

export default Play;
