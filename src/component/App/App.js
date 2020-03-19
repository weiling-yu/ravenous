import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import BusinessList from "../BusinessList/BusinessList"
import './App.css';


let business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

let businesses = [business, business, business, business, business, business];

class App extends React.Component {
  searchYelp(term, location, sortBy){
      console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    }

  render(){
  return (
    <div className="App">
      <h1 className="h1">ravenous</h1>
      <SearchBar searchYelp={this.searchYelp} />
      <BusinessList businesses={businesses}/>
    </div>
    );
  }
}

export default App;
