import './App.css';
import axios from "axios";
import {useState} from "react";
import Quotecard from "./components/Quotecard";

function App() {
  const [quote,setQuote]= useState('');
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
