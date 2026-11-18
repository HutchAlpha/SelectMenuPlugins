import { useState } from 'react'
import "./style.scss";
function App() {
  const donneeSelecteur = ['ananas', 'pomme', 'fraise', 'poire'];

  const [ouvert, setOuvert] = useState(false);

  return (
    <>
      <section id="App">
        <button className="App__selecteur" id="selecteur" onClick={() => setOuvert(!ouvert)}>
          Sélectionner
        </button>

        {ouvert && (
          <ul className="App__selecteurUl">
            {donneeSelecteur.map((donneeS, index) => (
              <li key={index} className="App__selecteurLi">| {donneeS}</li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default App