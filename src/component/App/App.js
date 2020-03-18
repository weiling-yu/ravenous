import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import BusinessList from "../BusinessList/BusinessList"
import './App.css';


function App() {
  return (
    <div className="App">
      <h1 className="h1">ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
