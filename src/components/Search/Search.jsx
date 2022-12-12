import React from 'react';
import './search.css';

export default function Search() {
  return (
    <>
      <div className="search-bar">
        <form className="search-form">
          <input type="text" placeholder="Search.." name="search2" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="search-title-container">
        <span className="title">Paracetamol </span>
        <span className="count">({128} products)</span>
        <div className="chip">
          Aceclofenac
          <span className="closebtn">&times;</span>
        </div>
        <div className="chip">
          500 mg
          <span className="closebtn">&times;</span>
        </div>
        <div className="remove">
          <button>Remove all</button>
        </div>
      </div>
    </>
  );
}
