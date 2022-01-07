import './App.css';
import axios from "axios";
import {useState} from "react";
import Quotecard from "./components/Quotecard";

function App() {
  const [quote,setQuote]= useState('');
  const getQuote= () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
        .then((reponse) => reponse.data)
        .then((data)=> {console.log('dans le then : ',data[0]);setQuote(data[0])})
  }
  return (
    <div className="App">
        {console.log('dans le RENDU', quote.quote)}
        <button type="button" onClick={getQuote}>Get a Quote</button>
        <Quotecard quote={quote.quote} character={quote.character} image={quote.image} />
    </div>
  );
}

export default App;
