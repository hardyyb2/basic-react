import React from 'react'

const person = props => {
  return (
    <div className='Person'>
      <h2 onClick={props.clicked}>
        Hi im a {props.name} and Im {props.age} years old
        {props.children}
      </h2>
      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  )
}

export default person
