import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

class BusinessList extends React.Component {
    render(){
        return(
            <div className="BusinessList">
                {this.props.businesses.map( business =>{
                    return <Business business={business}/>
                })}
            </div>
        )
    }
}
export default BusinessList;
// in App, create a dynamic businesses list using array and, pass it as a property in businessList instance
// in BusinessList, map through array return Business component