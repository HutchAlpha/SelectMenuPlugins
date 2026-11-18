import { useState } from 'react'

function App() {

  const [Ouvert, setOuvert] = useState(0);
  const [count, setCount] = useState(0);
  return (
    <>
      <section id="App">
        <p>Vous avez cliqué {count} fois</p>
        <button onClick={() => setCount(count + 1)}>
          Cliquez ici
        </button>
      </section>
    </>
  )
}

export default App
