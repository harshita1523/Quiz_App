import QuestionCard from "./components/QuestionCard";
import Question from "./components/Questions";


function App(){
  return (
    <>

      <Question/>
    
    </>
  )
}
export default App;












// import React, { useEffect, useState } from "react";
// import QuestionCard from "./components/QuestionCard";
// import {fetchQuestion} from './Api';

// type Question={
  
//   category: string,
//   correct_answer:string, 
//   difficulty:"easy"|"medium"|"hard",
//   incorrect_answers:string[],
//   question:string,
//   type: string,
// }

// // const getData=async()=>{
// //   const data=await fetchQuestion();
// //   console.log("Inside function");
// //   return data;
// //   // console.log("inside App.tsx"+data.results[0].type);
// // }
// // const questions=getData();



// function App(){
//   const [que,setQue]=useState([]);
//   useEffect(()=>{
//     const getData=async()=>{
//       const data=await fetchQuestion();
//       setQue(data.results);
//       console.log("data "+data.results);
//       // setQue(data.results);
//       // console.log("Inside function"+que);
//       return data;
//       // console.log("inside App.tsx"+data.results[0].type);
//     }
//     getData();

//   },[])

  
  
//   return(
//     <>
//     <div>
//       <h1>
//         REACT QUIZ
//       </h1>
//       <button> start</button>
//       <p className="score">SCORE:</p>
//       {
//         que==null ? `loading question`:
//           que.map((e:Question)=>{
//           return  <div>{e.question}</div>;
//         })
//       }
//       {/* <p>Loding Question...</p>
//       {que.map((e:Question)=>{
//           return  <div>{e.question}</div>;
//       })} */}
//       <QuestionCard/>
//       <button className="next" >Next question</button>
//     </div>
    
      

//     </>
//   )
// }
// export default App;

// // https://opentdb.com/api.php?amount=45&category=9&difficulty=easy&type=multiple