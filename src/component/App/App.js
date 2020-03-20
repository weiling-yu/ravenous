import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import BusinessList from "../BusinessList/BusinessList"
import './App.css';
import Yelp from "../../util/Yelp";


let business = {
  imageSrc: '',
  name: '',
  location: {},
  address: '',
  city: '',
  state: '',
  zipCode: '',
  category: '',
  rating: '',
  reviewCount: '',
  displayPhone: ""
}

let businesses = [];

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy){
      Yelp.search(term, location, sortBy).then(businesses =>{
        this.setState({
          businesses: businesses
        })
      })
    }

  render(){
  return (
    <div className="App">
      <h1 className="h1">ravenous</h1>
      <SearchBar searchYelp={this.searchYelp} />
      <BusinessList businesses={this.state.businesses}/>
    </div>
    );
  }
}

export default App;
