import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const circle = 'https://cdn-icons-png.flaticon.com/512/32/32463.png'
  const triangle = 'https://w7.pngwing.com/pngs/716/765/png-transparent-equilateral-triangle-isosceles-triangle-penrose-triangle-right-triangle-color-tools-angle-rectangle-photography-thumbnail.png'
  const star = 'https://st.depositphotos.com/2101611/4496/v/450/depositphotos_44961605-stock-illustration-star-vector-icon.jpg'
  const esplada = 'https://tcgcoleccionistas.cl/wp-content/uploads/2023/07/carta-pokemon-detras-1.png'
  const [clicks, setClicks] = useState[{click1 : false, click2 : false}] 
  const [cards, setCards] = useState([esplada,esplada,esplada,esplada,esplada,esplada])
  const [values, setValues] = useState([star,triangle,star,circle,triangle,circle])

  const Revelar = (i) => {
    if (clicks.click1 == false){
      setClicks.click1(true)
    }else{
      setClicks.click2(true)
    }
    if(clicks.click1 == true && clicks.click2 == true){
      const newCards = [...cards]
      newCards[i] = values[i]
      setCards(newCards)
    }
  }
  return (
    <>
      <div className='tablero'>
        <div className='card' onClick = {() =>Revelar(0)}>
          <img src = {cards[0]} className='img'></img>
        </div>
        <div className='card' onClick = {() =>Revelar(1)}>
          <img src = {cards[1]} className='img'></img>
        </div>
        <div className='card' onClick = {() =>Revelar(2)}>
          <img src = {cards[2]} className='img'></img>
        </div>
        <div className='card' onClick = {() =>Revelar(3)}>
          <img src = {cards[3]} className='img'></img>
        </div>
        <div className='card' onClick = {() =>Revelar(4)}>
          <img src = {cards[4]} className='img'></img>
        </div>
        <div className='card' onClick = {() =>Revelar(5)}>
          <img src = {cards[5]} className='img'></img>
        </div>
      </div>
    </>
  )
}

export default App
