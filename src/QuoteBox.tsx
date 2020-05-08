import React, { useState, useEffect } from 'react';

function QuoteBox() {
  const [quote, setQuote] = useState({
    content: 'Loading...',
    author: '',
  });

  useEffect(() => {
    fetchAndUseQuote();
  }, []);

  async function fetchAndUseQuote() {
    const res = await fetch('https://api.quotable.io/random');

    const json = await res.json();

    setQuote(json);
  }

  const { content, author } = quote;

  const encodedUriText = encodeURIComponent(`"${content}" - ${author}`);

  const tweetLink = `https://twitter.com/intent/tweet?text=${encodedUriText}`;

  return (
    <div id="quote-box">
      <div id="text">{content}</div>
      <div id="author">{author}</div>
      <button id="new-quote" onClick={fetchAndUseQuote}>
        New Quote
      </button>
      <a href={tweetLink} id="tweet-quote" target="_blank" rel="noopener noreferrer">
        Tweet
      </a>
    </div>
  );
}

export default QuoteBox;
