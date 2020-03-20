const apiKey =  "ZW4pbOYJiwK9NZNkeFK_HmzLqbvkmjE7rg1Zej0cWI1A6TqfdngiARHzSrmOzoNEiYH3Mp_yDss5kSjTXwrjXQEqpjWDNw4I28VaGj2YrjNVFMEGyEElIRqQaiJxXnYx";
let Yelp = {};

function search (term, location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
        headers:  {
            Authorization: `Bearer ${apiKey}`
        }
    }
    ).then(response => {
        return response.json().then(jsonResponse => {
            if (jsonResponse.businesses){
                return jsonResponse.businesses.map(business =>{
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        url: business.url,
                        address: business.location.address1,
                        location: business.location,
                        city: business.city,
                        state: business.state,
                        zipCode: business.zipCode,
                        coordinates: business.coordinates,
                        category: business.categories,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        displayPhone: business.display_phone
                    }
                })
            }
        })
    })
}

Yelp.search = search; 

export default Yelp;