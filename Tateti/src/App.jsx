import { useState, useRef } from 'react'

import './App.css'

function App() {
  let player = useRef(true)
  const [tablero, setTablero] = useState([null, null, null, null, null, null, null, null, null])
  const prueba = (i) => {
    if (tablero[i] == null) {
      if (player.current) {
        tablero[i] = setTablero('X');
        player.current = false;
      } else {
        tablero[i] = setTablero('O')
        player.current = true;
      }
    } else {
      console.log('Ya hay valor');
    }
  }
  return (
    <>
      <h1>Tateti del Negro</h1>
      <div className="tablero">
        <div className="celda" onClick={()=>prueba(0)}>
          <h1>{tablero[0]}</h1>
        </div>
        <div className="celda" onClick={()=>prueba(1)}>
          <h1>{tablero[1] }</h1>
        </div>
        <div className="celda">
          <h1>{tablero[2]}</h1>
        </div>
        <div className="celda">
          <h1>{tablero[3]}</h1>
        </div>
        <div className="celda">
          <h1>{tablero[4]}</h1>
        </div>
        <div className="celda">
          <h1>{tablero[5]}</h1>
        </div>
        <div className="celda">
          <h1>{tablero[6]}</h1>
        </div>
        <div className="celda">
          <h1>{tablero[6]}</h1>
        </div>
        <div className="celda">
          <h1>{tablero[6]}</h1>
        </div>
      </div>
    </>
  )
}

export default App
