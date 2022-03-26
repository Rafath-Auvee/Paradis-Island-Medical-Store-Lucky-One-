import React from 'react'
import './QA.css'
const QA = () => {
  return (
    <div className="ques-container">
      <div className="bank">
        <div className="question">
          <h1 className="ques-title">
            Question 1: How React Works?
          </h1>
          <p className="answer">
            React is a javascript library. React effectively re-construct DOM in JavaScript and push only those changes to the DOM which have actually occurred. React use JavaScript XML(JSX). JSX allows us to write HTML in React. React works in declarative code.
          </p>
        </div>
        <div className="question">
          <h1 className="ques-title">
            Question 2: How useState Works?
          </h1>
          <p className="answer">
            It declares state variable. useState is a hook that allows us to have a state variable in functional components. We pass the initial state to this function. It returns a variable with the current state value and another function to update this value. The useState hook allows us to declare only one state variable of any type at a time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default QA