import React, { useState } from 'react'

export function Calculator() {
  const [display, setDisplay] = useState(42)

  function clearDisplay(event) {
    setDisplay(0)
  }

  function clickedDigit(digit) {
    setDisplay(digit)
  }

  return (
    <main>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button className="button fn" onClick={clearDisplay}>
            AC
          </button>
          <button className="button fn">&#177;</button>
          <button className="button fn">&#37;</button>
          <button className="button op">&#247;</button>
          <button className="button" onClick={() => clickedDigit(7)}>
            7
          </button>
          <button className="button" onClick={() => clickedDigit(8)}>
            8
          </button>
          <button className="button" onClick={() => clickedDigit(9)}>
            9
          </button>
          <button className="button op">&#215;</button>
          <button className="button" onClick={() => clickedDigit(4)}>
            4
          </button>
          <button className="button" onClick={() => clickedDigit(5)}>
            5
          </button>
          <button className="button" onClick={() => clickedDigit(6)}>
            6
          </button>

          <button className="button op">&#8722;</button>
          <button className="button" onClick={() => clickedDigit(1)}>
            1
          </button>
          <button className="button" onClick={() => clickedDigit(2)}>
            2
          </button>
          <button className="button" onClick={() => clickedDigit(3)}>
            3
          </button>
          <button className="button op">&#43;</button>
          <button className="button x2" onClick={() => clickedDigit(0)}>
            0
          </button>
          <button className="button">.</button>
          <button className="button op">&#61;</button>
        </div>
      </div>
    </main>
  )
}
