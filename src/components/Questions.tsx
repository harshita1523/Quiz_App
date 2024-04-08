import React, { useState } from 'react'
import QuestionCard from './QuestionCard';
import { useQuery } from '@tanstack/react-query';


type QuestionType={
    id:number,
    category:string,
    correct_answer:string,
    difficulty:string,
    incorrect_answers:string[],
    question:string,
    type:string
}

// const swal =[{
//         question: 'What is the capital of France?',
//         choices: ['Paris', 'London', 'New York'],
//         answer: 'Paris',
//     },
//     {
//         question: 'What is the largest planet in our solar system?',
//         choices: ['Mars', 'Jupiter', 'Venus'],
//         answer: 'Jupiter',
//     },
//     {
//         question: 'What is the boiling point of water?',
//         choices: ['100°C', '0°C', '50°C'],
//         answer: '100°C',
//     },
//     {
//         question: 'What is the largest planet in our solar system?',
//         choices: ['Mars', 'Jupiter', 'Venus'],
//         answer: 'Jupiter',
//     },
//     {
//         question: 'What is the boiling point of water?',
//         choices: ['100°C', '0°C', '50°C'],
//         answer: '100°C',
//     }];
const Question:React.Fc=()=>{


    const {data}=useQuery({
        queryKey:['questions'],
        queryFn:async()=>{
            const res=await fetch('https://opentdb.com/api.php?amount=10');  
            return res.json();
        }
    })
   
    const [currentQuestion,SetCurrentQuestion]=useState(0);
    const [score,setScore]=useState(0);
    const [swal,setSwal]=useState<QuestionType[]>([]);

    const handleAnswer=(answer:string)=>{
        if(answer===swal[currentQuestion].correct_answer){
            setScore(()=>score+1);
        }
        const nextQue=currentQuestion+1;
        if(nextQue<swal.length) SetCurrentQuestion(nextQue);
        else alert(`Quiz Finished. Your score is ${score}`);

    }
    React.useEffect(()=>{
        if(data){
            setSwal(data.results);
        }
    },[data]);
    

    return(
        <>
        <h1>
            Quiz
        </h1>
        {/* {
            // printarr(swal)
            console.log(swal[0])
        } */}
        {swal && currentQuestion <swal.length ? (
            // <h1>hello</h1>

            <QuestionCard
                id={currentQuestion}
                category={swal[currentQuestion].category}
                correct_answer={swal[currentQuestion].correct_answer}
                difficulty={swal[currentQuestion].difficulty}
                incorrect_answers={swal[currentQuestion].incorrect_answers}
                question={swal[currentQuestion].question}
                type={swal[currentQuestion].type}
                onAnswer={handleAnswer}
            />
        ):null
        }

        </>
    )
}
export default Question;