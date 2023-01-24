import { useState } from "react";
import quotesData from "./data";
import "./App.css";
import { QuoteBox } from "./components/QuoteBox";

const randomNumber = () =>
  Math.round(Math.random() * (quotesData.length - 1 - 0) + 0);

const hexSigns = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

const randomHexColor = () => {
  let hexNumb = "#";
  for (let i = 0; i < 6; i++) {
    hexNumb += hexSigns[Math.floor(Math.random() * 16)];
  }
  return hexNumb;
};

const App = () => {
  const [quote, setQuote] = useState(quotesData[randomNumber()]);
  const [style, setStyle] = useState({ backgroundColor: randomHexColor() });

  const handleNewQuote = () => {
    setQuote(quotesData[randomNumber()]);
    setStyle({ backgroundColor: randomHexColor() });
  };

  return (
    <div className="main" style={style}>
      <QuoteBox handleNewQuote={handleNewQuote} quote={quote} style={style} />
    </div>
  );
};

export default App;
