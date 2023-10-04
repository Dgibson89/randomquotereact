import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

function App() {
  const [quote, setQuote] = useState({ content: "", author: "" });

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote({
          content: data.content,
          author: data.author,
        });
      })
      .catch((error) => console.error("Error fetching quote:", error));
  }, []);

  return (
    <div
      className={`container ${
        darkMode ? "text-white bg-dark" : "text-dark bg-light"
      }`}
    >
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <FaQuoteLeft size={50} />
        <p className="mt-3">{quote.content}</p>
        <p className="font-italic">- {quote.author}</p>{" "}
        {/* Displaying the author here */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`btn mt-3 ${darkMode ? "btn-light" : "btn-dark"}`}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default App;
