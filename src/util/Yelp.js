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
                        address: business.address,
                        city: business.city,
                        state: business.state,
                        zipCode: business.zipCode,
                        category: business.category,
                        rating: business.rating,
                        reviewCount: business.reviewCount
                    }
                })
            }
        })
    })
}

Yelp.search = search; 

export default Yelp;