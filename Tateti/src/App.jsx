import { useState } from 'react'

import './App.css'

function App() {
  const tablero =[null, null, null, null, null, null, null, null, null]
  const prueba = () => {
    if (tablero[0] == null) {
      tablero[0] = 'X';  // Asigna 'equis' si está vacío
      console.log(tablero[0])
    } else {
      console.log('Ya hay valor');  // Muestra el mensaje si ya tiene un valor
    }
  } 
  return (
    <>
        <h1>Tateti del Negro</h1>
        <div className="tablero">
          <div className="celda" onClick={prueba}>
            <h1>{tablero[0]}</h1>
          </div>
          <div className="celda">
            <h1>{tablero[1]}</h1>
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
