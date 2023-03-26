import React, { useState } from "react";
import {BrowserView, MobileView} from 'react-device-detect';

const Balls = () => {



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

  //score data
 


  ///// value for co ordinates

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
////////////////////////////////////////////mob 




const [mball1, msetBall1] = useState({
  x1: 250,
  y1: 150,
});

const [mball2, msetBall2] = useState({
  x2: 250,
  y2: 100,
});

const [mball3, msetBall3] = useState({
  x3: 200,
  y3: 250,
});
const [mball4, msetBall4] = useState({
  x4: 250,
  y4: 200,
});



















  const Am = [
    { x: 50, y: 250 },
    { x: 50, y: 550 },
    { x: 300, y: 550 },
    { x: 300, y: 550 },
    { x: 180, y: 350 },
  ];
  const Bm = [
    { x: 300, y: 350 },
    { x: 50, y: 350 },
    { x: 200, y: 250 },
    { x: 200, y: 550 },
  ];
  const Cm = [
    { x: 150, y: 250 },
    { x: 150, y: 550 },
    { x: 250, y: 550 },
    { x: 250, y: 250 },
  ];
  const Dm = [
    { x: 50, y: 400 },
    { x: 300, y: 300 },
    { x: 250, y: 400 },
    { x: 300, y: 400 },
  ];




















  return (
    <>
      {/*  ___________________________        A    ____________________________    */}

      <BrowserView>
  
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

  
  </BrowserView>

  <MobileView>

  <div
        className="circle h-[30px] w-[30px] bg-yellow-400 rounded-full circle1"
        onClick={() => {
          switch (a) {
            case 0:
              msetBall1({
                x1: Am[a].x,
                y1: Am[a].y,
              });
              seta(1);
              break;
            case 1:
              msetBall1({
                x1: Am[a].x,
                y1: Am[a].y,
              });
              seta(3);
              break;

            case 2:
              msetBall1({
                x1: Am[a].x,
                y1: Am[a].y,
              });
              seta(1);

              break;
            case 3:
              msetBall1({
                x1: Am[a].x,
                y1: Am[a].y,
              });
              seta(4);
              break;

            case 4:
              msetBall1({
                x1: Am[a].x,
                y1: Am[a].y,
              });
              seta(2);
              break;
            default:
              break;
          }
      
        }}
        style={{ position: "absolute", left: mball1.x1, top: mball1.y1 }}
      ></div>

      {/*  ___________________________       B    ____________________________    */}

      <div
        className="circle h-[20px] w-[20px]  bg-yellow-400 rounded-full"
        onClick={() => {
          switch (b) {
            case 0:
              msetBall2({
                x2: Bm[b].x,
                y2: Bm[b].y,
              });
              setb(1);
              break;
            case 1:
              msetBall2({
                x2: Bm[b].x,
                y2: Bm[b].y,
              });
              setb(2);
              break;

            case 2:
              msetBall2({
                x2: Bm[b].x,
                y2: Bm[b].y,
              });
              setb(3);
              break;

            case 3:
              msetBall2({
                x2: Bm[b].x,
                y2: Bm[b].y,
              });
              setb(0);
              break;
            default:
              break;
          }

        }}
        style={{ position: "absolute", left: mball2.x2, top: mball2.y2 }}
      ></div>

      {/*  ___________________________        C   ____________________________    */}

      <div
        className="circle h-[20px] w-[20px]   bg-yellow-400 rounded-full"
        onClick={() => {
          switch (c) {
            case 0:
              msetBall3({
                x3: Cm[c].x,
                y3: Cm[c].y,
              });
              setc(1);
              break;
            case 1:
              msetBall3({
                x3: Cm[c].x,
                y3: Cm[c].y,
              });
              setc(2);
              break;

            case 2:
              msetBall3({
                x3: Cm[c].x,
                y3: Cm[c].y,
              });
              setc(3);
              break;

            case 3:
              msetBall3({
                x3: Cm[c].x,
                y3: Cm[c].y,
              });
              setc(0);
              break;
            default:
              break;
          }
        }}
        style={{ position: "absolute", left: mball3.x3, top: mball3.y3}}
      ></div>

      {/*  ___________________________       D    ____________________________    */}

      <div
        className="circle h-[20px] w-[20px]  bg-yellow-400 rounded-full"
        onClick={() => {
          switch (d) {
            case 0:
              msetBall4({
                x4: Dm[d].x,
                y4: Dm[d].y,
              });
              setd(1);
              break;
            case 1:
              msetBall4({
                x4: Dm[d].x,
                y4: Dm[d].y,
              });
              setd(2);
              break;

            case 2:
              msetBall4({
                x4: Dm[d].x,
                y4: Dm[d].y,
              });
              setd(3);
              break;

            case 3:
              msetBall4({
                x4: Dm[d].x,
                y4: Dm[d].y,
              });
              setd(0);
              break;
            default:
              break;
          }
        }}
        style={{ position: "absolute", left: mball4.x4, top: mball4.y4 }}
      ></div>





  </MobileView>
     

    </>
  );
};

export default Balls;
