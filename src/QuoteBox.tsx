import React, { useState, useEffect } from 'react';

export function QuoteBox() {
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
    <div id="quote-box" className="container">
      <blockquote>
        <div id="text" className="content">
          {content}
        </div>
        <div id="author">{author}</div>
      </blockquote>
      <div className="buttons">
        <button id="new-quote" onClick={fetchAndUseQuote} className="button">
          New Quote
        </button>
        <a href={tweetLink} id="tweet-quote" target="_blank" rel="noopener noreferrer" className="button">
          Tweet
        </a>
      </div>
    </div>
  );
}
