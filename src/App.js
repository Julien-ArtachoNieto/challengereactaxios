import './App.css';
import axios from "axios";
import {useState} from "react";
import Quotecard from "./components/Quotecard";

function App() {
    const initQuote={quote:"Shut up, brain. I got friends now. I don't need you anymore.",
                    character:"Lisa Simpson",
                    image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
    }
  const [quote,setQuote]= useState(initQuote);
  const getQuote= () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
        .then((reponse) => reponse.data)
        .then((data)=> setQuote(data[0]))
  }
  return (
    <div className="App">

        <button type="button" onClick={getQuote}>Get a Quote</button>
        <Quotecard quote={quote.quote} character={quote.character} image={quote.image} />
    </div>
  );
}

export default App;
