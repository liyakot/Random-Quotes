export const QuoteBox = ({ quote, handleNewQuote, style }) => {
  return (
    <div id="quote-box" className="container">
      <p id="text" className="text">
        <i className="fa-solid fa-quote-left"></i>
        {quote.text}
      </p>
      <p id="author" className="author">
        {quote.author}
      </p>

      <button
        className="button"
        id="new-quote"
        onClick={handleNewQuote}
        style={style}
      >
        New Quote
      </button>
    </div>
  );
};
