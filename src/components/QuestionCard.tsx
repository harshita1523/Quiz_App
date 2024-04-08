import { Radio } from 'antd'
import React, { useState } from 'react'

// type proptype={
//     id:number,
//     question:string,
//     choices:string[],
//     answer:string,
//     onAnswer:(answer:string)=>void;

// }

const QuestionCard:React.FC<Props> = ({id,category,correct_answer,difficulty,incorrect_answers,question,type,onAnswer}) => {
  const choices=[correct_answer,...incorrect_answers];
 
  return (
    <div>
      <h2>Question no:{id+1}  {question}</h2>
      <div>
        {choices.map((ele)=>{
          return <div><button onClick={()=>onAnswer(ele)}>{ele}</button></div>
        })}
      </div>
    </div>
  )
}

export default QuestionCard;
