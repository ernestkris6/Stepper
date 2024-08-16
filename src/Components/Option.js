import React from 'react'

export default function Option({question, dispatch}) {
  return (
    <div>
        {question.options.map((index, option)=> {
            <button>
                {option}
            </button>
        })}
    </div>
  )
}