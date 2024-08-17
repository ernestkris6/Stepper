/*import { useReducer } from "react";

const initialState = {count: 0, step: 1};


function reducer(state, action){
    console.log(state, action);

    // return {count: 0, step: 1}

    // return state + action
    // if(action.type === "inc") return state + 1;
    // if(action.type === "dec") return state - 1;
    // if(action.type === "setCount") return action.payload;

    switch(action.type){
        case "dec": 
        return {...state, count: state.count - state.step}
        case "inc": 
        return {...state, count: state.count + state.step}
        case "setCount": 
        return {...state, count: action.payload}
        case "setStep": 
        return {...state, step: action.payload}
        case "reset": return initialState;
        default:
          throw new Error("Unknown action")
    }
}

function DateCounter() {
  //dispatch is like a setState here 0 is the state 
  //while 1 and -1 are the actions.payload
  // const [count, dispatch] = useReducer(reducer, 0)
  
  //const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);
  
  
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const {count, step} = state;


  // This mutates the date object.
  const date = new Date("july 23 2024");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({type: "dec"})
    dispatch(-1)
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({type: "inc"})
    //dispatch(1)
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({type: "setCount", payload: Number(e.target.value)})
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    dispatch({type: "setStep", payload: Number(e.target.value)})
    // setCount(Numb(e.target.value))
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({type: "reset"})
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;*/

















import React, { useEffect, useReducer } from 'react';
import Header from './Components/Header';
import Main from './Main';
import Loader from './Components/Loader';
import Error from './Components/Error';
import StartScreen from './Components/StartScreen';
import Question from './Components/Question';
// import NextButton from './NextButton';
// import Progress from './Progress';
// import FinishedScreen from './FinishedScreen';
// import Footer from './Footer';
// import Timer from './Timer';

const SECS_PER_QUESTION = 20;

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finish'
  status: 'loading',
  index: 0,
  // answer: null,
  // points: 0,
  // highscore: 0,
  // secondsRemaining: null,

}

function reducer(state, action){

  switch(action.type){
    case 'dataReceived': 
    return{
      ...state,
      questions: action.payload,
      status: "ready",
    };
    case 'dataFailed':
      return{
        ...state,
        status: "error",

      };
    case 'start': 
    return{
      ...state, 
      status: "active",
      secondsRemaining: state.questions.length * SECS_PER_QUESTION,
    }
    // case 'newAnswer':
    //   const question = state.questions.at(state.index)
    // return{
    //   ...state,
    //   answer: action.payload,
    //   points: action.payload === question.correctOption ? state.points + question.points : state.points,
    // }

    // case "nextQuestion": 
    // return{
    //   ...state,
    //   index: state.index + 1, answer: null
    // }
    // case 'finish': 
    // return{
    //   ...state,
    //   status: "finish",
    //   highscore: state.points > state.highscore ? state.points : state.highscore
    // }
    // case 'restart': 
    // return {
    //   ...state,
    //   points: 0,
    //   highscore: 0,
    //   index: 0,
    //   answer: null,
    //   status: "ready",

    // }

    case "tick": 
    return{
      ...state,
      secondsRemaining: state.secondsRemaining - 1,
      status: state.secondsRemaining === 0 ? "finish" : state.status,
    }
    default: throw new Error('Unknown action')
  } 
}

function App() {

  const [{questions, status, index, answer, points, highscore, secondsRemaining}, dispatch] = useReducer(reducer, initialState);
  
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((prev, cur)=> prev + cur.points, 0)
 

  useEffect(function() {
    fetch('http://localhost:9000/questions')
    .then((res)=> res.json())
    .then((data)=> dispatch({type: "dataReceived", 
      payload: data}))
    .catch((err)=> dispatch({type: "dataFailed"}))
  }, [])
  
  
  return (
    <div className='app'>
      <Header />
      <Main>
        {/* <Progress 
        index={index} 
        numQuestions={numQuestions} 
        points={points}
        maxPossiblePoints={maxPossiblePoints}
        answer={answer}
        /> */}

          {status === 'loading' && <Loader />}
          {status === 'error' && <Error />}
          {status === 'ready' && 
          <StartScreen dispatch={dispatch} numQuestions={numQuestions}/>}
          {status === 'active' && ( 
          <>
          <Question 
          question={questions[index]} 
          dispatch={dispatch} 
          answer={answer} />

          </>)}

          {/* {status === 'finish' && (
          <FinishedScreen 
          maxPossiblePoints={maxPossiblePoints} 
          points={points}
          highscore={highscore}
          dispatch={dispatch} />)} */}
      </Main>
    </div>
  )
}

export default App;