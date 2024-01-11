import './App.css';
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla'
import BotonClear from './componentes/botonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {
  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    }
    else {
      alert("Ingresa valor a calcular");
    }
  };

  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='contenedor-main'>
          <div className='contenedor-numeros'>
            <div className='fila'>
              <Boton manejarClic={agregarInput}>7</Boton>
              <Boton manejarClic={agregarInput}>8</Boton>
              <Boton manejarClic={agregarInput}>9</Boton>
            </div>
            <div className='fila'>
              <Boton manejarClic={agregarInput}>4</Boton>
              <Boton manejarClic={agregarInput}>5</Boton>
              <Boton manejarClic={agregarInput}>6</Boton>
            </div>
            <div className='fila'>
              <Boton manejarClic={agregarInput}>1</Boton>
              <Boton manejarClic={agregarInput}>2</Boton>
              <Boton manejarClic={agregarInput}>3</Boton>
            </div>
            <div className='fila'>
              <Boton manejarClic={agregarInput}>0</Boton>
              <Boton manejarClic={agregarInput}>.</Boton>
              <Boton manejarClic={calcularResultado}>=</Boton>
            </div>
          </div>
          <div className='contenedor-operadores'>
            <Boton manejarClic={agregarInput}>+</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>
            <BotonClear manejarClear={() => setInput('')}>AC</BotonClear>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
