import './App.css';
import Card from "./Components/Card.js";

function App() {
  return (
    <div className="App">
      <div className="contenedorPrincipal"><h1>Simpson Cards</h1>
        <Card
        img="juan.webp"
        nombre="Juan topo"
        temporada="2"
        info='Es una persona de entre 31 y 45 años,
        pero que aparenta 80 por un problema con el alcohol,
        como afirma en "Duffless", por eso no está en el asilo de Springfield.
        Su altura estipulada es de 1.30m.'/>
        <Card
        img="marge.webp"
        nombre="Marge Simpson"
        temporada="1"
        info='Marjorie "Marge" Jaqueline Bouvier Simpson 
        es uno de los personajes principales de la serie animada Los Simpson. 
        Es la esposa de Homero Simpson, y madre de 3 hijos llamados: Bart Simpson de 10 años, 
        Lisa Simpson de 8 y Maggie Simpson.'/>
        <Card
        img="rafa.webp"
        nombre="Rafa Gorgory"
        temporada="1"
        info='Es compañero de clase de Lisa Simpson. 
        Es bien conocido por su comportamiento errático, 
        rozando incluso con la estupidez y la locura. 
        Se caracteriza por tener frases hilarantes y en ocaciones tontas y sin sentido,
        probablemente a que su padre es bastante paternalista y le consiente todo,
        esto se ve claramente en el episodio en el que Bart Simpson 
        le vende su alma a Milhouse Van Houten.'/>
      </div>
    </div>
  );
}

export default App;
