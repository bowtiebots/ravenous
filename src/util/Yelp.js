const apiKey = 'cObNszp-1oc_cqf0JCEErVdJA5iwbemrPzX7Ug57Fi0RYlgs34MjzU6s2DN3XMe1tBL40GPFTo_lRt7ej7U-4EHHksglMtnybxe2x9jQkF5I8YRFZwkWmhnZBrhYW3Yx';

const Yelp = {
  search (term, location, sortBy){
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        }
      }).then(response => {
          return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
  }
};

export default Yelp;
