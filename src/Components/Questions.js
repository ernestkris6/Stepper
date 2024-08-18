import React from 'react'
import Option from './Option'

export default function Questions({question, dispatch, numQuestions}) {
  return (
    <div>
      <h4>Questions</h4>
      <progress max={numQuestions} />
      <Option
      question={question}
      dispatch={dispatch} 
      />
    </div>
  )
}
