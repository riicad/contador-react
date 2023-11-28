import './App.css';
import { useState } from 'react';

function App() {
  //define uma constante
    const [numero, setNumero] = useState(0)
  
    //funções do contador
    function aumentar() {
        setNumero(numero + 1)
    }
    function diminuir() {
        setNumero(numero - 1)
    }

    return (
        <section>
            <div className="container">

              <h1>CONTADOR</h1>
              <p id="result">{numero}</p>

                <button onClick={diminuir}>-</button>
                <button onClick={aumentar}>+</button>


            </div>
        </section>
    );
}

export default App;
