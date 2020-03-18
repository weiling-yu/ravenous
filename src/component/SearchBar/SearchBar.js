import React from "react";
import "./SearchBar.css";

let sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
}

export class SearchBar extends React.Component {
    renderSortByOptions(){
        let keys = Object.keys(sortByOptions);

        return keys.map(key =>{
            let value = sortByOptions[key];
            return (
                <li key={value}>{key}</li>
            );
        });
    }
    render(){
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
{/*
                        <li key="best_match">Best Match</li>
                        <li key="rating">Highest Rated</li>
                        <li key="review_count">Most Reviewed</li>
*/}
                    </ul>
                </div>
                <div class="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div class="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}