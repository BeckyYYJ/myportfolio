const options = {
    method: 'POST',
    headers: {
        'X-RapidAPI-Key': 'e62d0fc3abmsh929321dd11b9e99p1d531djsn1ac511b56800',
        'X-RapidAPI-Host': 'travel-places.p.rapidapi.com'
    }
};

const TRAVEL_URL = 'https://travel-places.p.rapidapi.com/';
fetch('https://travel-places.p.rapidapi.com/', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));