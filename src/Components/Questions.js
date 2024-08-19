import React from 'react'
import Option from './Option'

export default function Questions({question, dispatch, numQuestions}) {
  return (
    <div>
         
      <Option
      question={question}
      dispatch={dispatch} 
      />
    </div>
  )
}
