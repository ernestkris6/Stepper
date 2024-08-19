import React from 'react';

export default function Progress({numQuestion}) {
  return (
    <header className='progress'>
      <progess max={numQuestion}/>
      <p>Question</p>
    </header>
  )
}


