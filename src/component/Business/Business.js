import React from "react";
import "./Business.css";

const googleGeo = "https://www.google.com/maps/search/?api=1&query=";

class Business extends React.Component {
    constructor(){
        super();
    }

    render(){
        let bizLatitude = this.props.business.coordinates.latitude;
        let bizLongitude = this.props.business.coordinates.longitude;
        let googleMapUrl = `${googleGeo}${bizLatitude},${bizLongitude}`;

        return (
        <div className="Business">
            <div className="image-container">
                <a href={this.props.business.url} target="_blank">
                  <img src={this.props.business.imageSrc} alt=''/>
                </a>
            </div>
            <a href={this.props.business.url} target="_blank">
                <h2 className="">{this.props.business.name}</h2>
            </a>
            <div className="phone">
                    <h5>{this.props.business.displayPhone}</h5>
                </div>
            <div className="Business-information">
                <div className="Business-address" >
                    <a href={googleMapUrl} target="_blank">
                        <p>{this.props.business.location.address1}</p>
                        <p>{this.props.business.location.address2}</p>
                        <p>{this.props.business.location.city}</p>
                        <p>{this.props.business.location.zipCode}</p>     
                    </a>            
                </div>
                <div className="Business-reviews">
                    <h3>{this.props.business.category[0].alias}</h3>
                    <h3 className="rating">{this.props.business.rating} stars</h3>
                    <p>{this.props.business.reviewCount} reviews</p>
                </div>

            </div>
        </div>
        )
    }
}

export default Business;