import React from "react";
import PlayButton from "../assets/pic/play.png";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="main">
        <video src='https://static.wallpaperwaifu.com/videos/preview/2021/itachi-uchiha-moonlight-preview.mp4' autoPlay loop muted></video>
      </div>

      <div className="  justify-center  flex  items-center ">
        <button className=" flex">

          <Link to='/play'>      <img
            src={PlayButton}
            className=" playbtn select-none  hover:-translate-y-1 hover:scale-110  transition ease-in-out delay-150 flex-2  mt-[90px]"
            alt=""
            height='200px'
            width='200px'
          /></Link>
     
        </button>
      </div>
      <div className="  justify-center  flex  items-end  arjun">
        <h1 className="  select-none  text-white text-[60px] flex"> Aim's Lab</h1>
      </div>
    </>
  );
};

export default Menu;

{
  /* <button
          className=" text-white  bg-black  border-white border-2  rounded-md  text-[40px]  px-4 hover:text-orange-400 hover:border-orange-400  
      hover:-translate-y-1 hover:scale-110  transition ease-in-out delay-150 flex-2"
        >
          Start
        </button> */
}
