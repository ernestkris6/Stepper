import React from 'react'
import Option from './Option'

export default function Questions({question, dispatch}) {
  return (
    <div>
      <h4>Questions</h4>
      <Option
      question={question[index + 1]}
      dispatch={dispatch} />
    </div>
  )
}
