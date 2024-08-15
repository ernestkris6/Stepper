import React, { useEffect, useReducer } from 'react';
import Header from './Components/Header';
import Main from './Main';
import Loader from './Components/Loader';
import Error from './Components/Error';
import StartScreen from './Components/StartScreen';
import Question from './Components/Question';


const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finish'
  status: 'loading',

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
      status: "active"
    }
    default: throw new Error('Unknown action')
  } 
}

function App() {

  const [{questions, status}, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;

  

  useEffect(function(){
     fetch("http://localhost:8000/question")
    .then((res)=> res.json())
    .then((data)=> dispatch({type: 'dataRecived',
      payload: data}))
    .catch((err)=> dispatch({type: "dataFailed"}));
  }, [])

  return (
    <div className='app'>
      <Header />
      <Main>
          {status === 'loading' && <Loader />}
          {status === 'error' && <Error />}
          {status === 'ready' && 
          <StartScreen dispatch={dispatch } 
          numQuestions={numQuestions}/>}
          {status === 'active' && <Question />}
         
      </Main>
    </div>
  )
}

export default App;