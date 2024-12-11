import { useState, useRef } from "react";

import "./App.css";

function App() {
  let player = useRef(true);
  const [tablero, setTablero] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  // Se llena en tablero de juego
  const prueba = (i) => {
    if (tablero[i] == null) {
      const nuevoTablero = [...tablero];
      if (winX() != true && winO() != true) {
        if (player.current) {
          nuevoTablero[i] = "X";
          player.current = false;
        } else {
          nuevoTablero[i] = "O";
          player.current = true;
        }
        setTablero(nuevoTablero);
      }
    } else {
      window.alert("Ya se a jugado en esta casilla elija otra");
    }
  };

  const winX = () => {
    if ((tablero[0] == "X" && tablero[1] == "X" && tablero[2] == "X") ||
      (tablero[3] == "X" && tablero[4] == "X" && tablero[5] == "X") ||
      (tablero[6] == "X" && tablero[7] == "X" && tablero[8] == "X") ||
      (tablero[0] == "X" && tablero[3] == "X" && tablero[6] == "X") ||
      (tablero[1] == "X" && tablero[4] == "X" && tablero[7] == "X") ||
      (tablero[2] == "X" && tablero[5] == "X" && tablero[8] == "X") ||
      (tablero[0] == "X" && tablero[4] == "X" && tablero[8] == "X") ||
      (tablero[2] == "X" && tablero[4] == "X" && tablero[6] == "X")) {
      window.alert("El jugador X a ganado");
      return true;
    }
  };
  const winO = () => {
    if ((tablero[0] == "O" && tablero[1] == "O" && tablero[2] == "O") ||
      (tablero[3] == "O" && tablero[4] == "O" && tablero[5] == "O") ||
      (tablero[6] == "O" && tablero[7] == "O" && tablero[8] == "O") ||
      (tablero[0] == "O" && tablero[3] == "O" && tablero[6] == "O") ||
      (tablero[1] == "O" && tablero[4] == "O" && tablero[7] == "O") ||
      (tablero[2] == "O" && tablero[5] == "O" && tablero[8] == "O") ||
      (tablero[0] == "O" && tablero[4] == "O" && tablero[8] == "O") ||
      (tablero[2] == "O" && tablero[4] == "O" && tablero[6] == "O")) {
      window.alert("El jugador O ha ganado");
      return true;
    }
  };
  const reStart = () => {
    window.location.reload();
  };
  return (
    <>
      <h1 className="title">Tateti del Negro</h1>
      <div className="tablero">
        <div className="celda" onClick={()=>prueba(0)}>
          <h1>{tablero[0]}</h1>
        </div>
        <div className="celda" onClick={()=>prueba(1)}>
          <h1>{tablero[1] }</h1>
        </div>
        <div className="celda" onClick={()=>prueba(2)}>
          <h1>{tablero[2]}</h1>
        </div>
        <div className="celda" onClick={()=>prueba(3)}>
          <h1>{tablero[3]}</h1>
        </div>
        <div className="celda" onClick={()=>prueba(4)}>
          <h1>{tablero[4]}</h1>
        </div>
        <div className="celda" onClick={()=>prueba(5)}>
          <h1>{tablero[5]}</h1>
        </div>
        <div className="celda" onClick={()=>prueba(6)}>
          <h1>{tablero[6]}</h1>
        </div>
        <div className="celda" onClick={()=>prueba(7)}>
          <h1>{tablero[7]}</h1>
        </div>
        <div className="celda" onClick={()=>prueba(8)}>
          <h1>{tablero[8]}</h1>
        </div>
      </div>
      <button onClick={reStart} className="boton">Reiniciar</button>
    </>
  )
}

export default App;
