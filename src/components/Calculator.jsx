import React, { useState } from 'react'

export function Calculator() {
  const [display, setDisplay] = useState(0)

  // initiate as an empty property that demands input
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [operator, setOperator] = useState(null)

  function clickedClearButton(event) {
    setFirstNumber('')
    setSecondNumber('')
    setOperator(null)
    setDisplay(0)
  }

  function clickedDigit(digit) {
    if (operator === null) {
      if (firstNumber.includes('.') && digit === '.') {
        alert('nope')
      } else {
        setFirstNumber(`${firstNumber}${digit}`)
        setDisplay(`${firstNumber}${digit}`)
      }
    } else {
      if (secondNumber.includes('.') && digit === '.') {
        alert('nope')
      } else {
        setSecondNumber(`${secondNumber}${digit}`)
        setDisplay(`${secondNumber}${digit}`)
      }
    }
  }

  function clickedOperator(selectedOperator) {
    setOperator(selectedOperator)
  }

  function clickedEquals() {
    let result

    if (operator === '+') {
      result = Number(firstNumber) + Number(secondNumber)
    }
    if (operator === '-') {
      result = Number(firstNumber) - Number(secondNumber)
    }
    if (operator === '*') {
      result = Number(firstNumber) * Number(secondNumber)
    }
    if (operator === '/') {
      result = Number(firstNumber) / Number(secondNumber)
    }

    setDisplay(result)
  }

  return (
    <main>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button className="button fn" onClick={clickedClearButton}>
            AC
          </button>
          <button className="button fn">&#177;</button>
          <button className="button fn">&#37;</button>
          <button
            className="button op"
            onClick={function () {
              clickedOperator('/')
            }}
          >
            &#247;
          </button>
          <button
            className="button"
            onClick={function () {
              clickedDigit(7)
            }}
          >
            7
          </button>
          <button className="button" onClick={() => clickedDigit(8)}>
            8
          </button>
          <button className="button" onClick={() => clickedDigit(9)}>
            9
          </button>
          <button
            className="button op"
            onClick={function () {
              clickedOperator('*')
            }}
          >
            &#215;
          </button>
          <button className="button" onClick={() => clickedDigit(4)}>
            4
          </button>
          <button className="button" onClick={() => clickedDigit(5)}>
            5
          </button>
          <button className="button" onClick={() => clickedDigit(6)}>
            6
          </button>

          <button
            className="button op"
            onClick={function () {
              clickedOperator('-')
            }}
          >
            &#8722;
          </button>
          <button className="button" onClick={() => clickedDigit(1)}>
            1
          </button>
          <button className="button" onClick={() => clickedDigit(2)}>
            2
          </button>
          <button className="button" onClick={() => clickedDigit(3)}>
            3
          </button>
          <button
            className="button op"
            onClick={function () {
              clickedOperator('+')
            }}
          >
            &#43;
          </button>
          <button className="button x2" onClick={() => clickedDigit(0)}>
            0
          </button>
          <button className="button" onClick={() => clickedDigit('.')}>
            .
          </button>
          <button
            className="button op"
            onClick={() => {
              clickedEquals()
            }}
          >
            &#61;
          </button>
        </div>
      </div>
    </main>
  )
}
