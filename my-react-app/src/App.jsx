import { useState } from 'react'
import "./style.scss";
function App() {
  const donneeFictifFruit = ['ananas', 'pomme', 'fraise', 'poire'];

  const [ouvert, setOuvert] = useState(false);

  return (
    <>
      <section id="App">
        <button className="App__selecteur" id="selecteur" onClick={() => setOuvert(!ouvert)}>
          Sélectionner
        </button>

        {ouvert && (
          <ul>
            {donneeFictifFruit.map((fruit, index) => (
              <li key={index}>{fruit}</li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default App