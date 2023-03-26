import React, { useState } from "react";

const PCballs = () => {


    const [ball1, setBall1] = useState({
        x1: 400,
        y1: 150,
      });
    
      const [ball2, setBall2] = useState({
        x2: 800,
        y2: 100,
      });
    
      const [ball3, setBall3] = useState({
        x3: 300,
        y3: 300,
      });
      const [ball4, setBall4] = useState({
        x4: 400,
        y4: 200,
      });
    
    
    
    
      const [a, seta] = useState(3);
      const [b, setb] = useState(2);
      const [c, setc] = useState(1);
      const [d, setd] = useState(2);
    
  
    
      const A = [
        { x: 400, y: 150 },
        { x: 400, y: 450 },
        { x: 800, y: 450 },
        { x: 800, y: 150 },
        { x: 580, y: 250 },
      ];
      const B = [
        { x: 800, y: 250 },
        { x: 400, y: 250 },
        { x: 600, y: 150 },
        { x: 600, y: 450 },
      ];
      const C = [
        { x: 500, y: 150 },
        { x: 500, y: 450 },
        { x: 700, y: 450 },
        { x: 700, y: 150 },
      ];
      const D = [
        { x: 400, y: 200 },
        { x: 800, y: 200 },
        { x: 400, y: 300 },
        { x: 800, y: 300 },
      ];






  return (

<>
<div
        className="circle h-[35px] w-[35px] bg-yellow-400 rounded-full circle1"
        onClick={() => {
          switch (a) {
            case 0:
              setBall1({
                x1: A[a].x,
                y1: A[a].y,
              });
              seta(1);
              break;
            case 1:
              setBall1({
                x1: A[a].x,
                y1: A[a].y,
              });
              seta(3);
              break;

            case 2:
              setBall1({
                x1: A[a].x,
                y1: A[a].y,
              });
              seta(1);

              break;
            case 3:
              setBall1({
                x1: A[a].x,
                y1: A[a].y,
              });
              seta(4);
              break;

            case 4:
              setBall1({
                x1: A[a].x,
                y1: A[a].y,
              });
              seta(2);
              break;
            default:
              break;
          }
      
        }}
        style={{ position: "absolute", left: ball1.x1, top: ball1.y1 }}
      ></div>

      {/*  ___________________________       B    ____________________________    */}

      <div
        className="circle h-[35px] w-[35px]  bg-yellow-400 rounded-full"
        onClick={() => {
          switch (b) {
            case 0:
              setBall2({
                x2: B[b].x,
                y2: B[b].y,
              });
              setb(1);
              break;
            case 1:
              setBall2({
                x2: B[b].x,
                y2: B[b].y,
              });
              setb(2);
              break;

            case 2:
              setBall2({
                x2: B[b].x,
                y2: B[b].y,
              });
              setb(3);
              break;

            case 3:
              setBall2({
                x2: B[b].x,
                y2: B[b].y,
              });
              setb(0);
              break;
            default:
              break;
          }

        }}
        style={{ position: "absolute", left: ball2.x2, top: ball2.y2 }}
      ></div>

      {/*  ___________________________        C   ____________________________    */}

      <div
        className="circle h-[35px] w-[35px]   bg-yellow-400 rounded-full"
        onClick={() => {
          switch (c) {
            case 0:
              setBall3({
                x3: C[c].x,
                y3: C[c].y,
              });
              setc(1);
              break;
            case 1:
              setBall3({
                x3: C[c].x,
                y3: C[c].y,
              });
              setc(2);
              break;

            case 2:
              setBall3({
                x3: C[c].x,
                y3: C[c].y,
              });
              setc(3);
              break;

            case 3:
              setBall3({
                x3: C[c].x,
                y3: C[c].y,
              });
              setc(0);
              break;
            default:
              break;
          }
        }}
        style={{ position: "absolute", left: ball3.x3, top: ball3.y3 }}
      ></div>

      {/*  ___________________________       D    ____________________________    */}

      <div
        className="circle h-[35px] w-[35px]  bg-yellow-400 rounded-full"
        onClick={() => {
          switch (d) {
            case 0:
              setBall4({
                x4: D[d].x,
                y4: D[d].y,
              });
              setd(1);
              break;
            case 1:
              setBall4({
                x4: D[d].x,
                y4: D[d].y,
              });
              setd(2);
              break;

            case 2:
              setBall4({
                x4: D[d].x,
                y4: D[d].y,
              });
              setd(3);
              break;

            case 3:
              setBall4({
                x4: D[d].x,
                y4: D[d].y,
              });
              setd(0);
              break;
            default:
              break;
          }
        }}
        style={{ position: "absolute", left: ball4.x4, top: ball4.y4 }}
      ></div>

  

</>
  )
}

export default PCballs