console.log("Let's get this party started!");

const APIkey = config.API_KEY; 

//handle form submit
const form = document.querySelector('form'); 

form.addEventListener('submit', async function(event){
    event.preventDefault(); 

    const userInput = document.querySelector('#search'); 
    const searchTerm = userInput.value;
    userInput.value = '';

    const url = await getGif(searchTerm);

    //create new elements 
    const newDiv = document.createElement('div'); 
    const newGif = document.createElement('img'); 

    //set attributes of new elements
    newDiv.classList.add('col-auto', 'mb-3'); 
    newGif.setAttribute('src', url);

    //append new elements to gifArea
    const gifArea = document.querySelector('#gif-area'); 
    newDiv.append(newGif);
    gifArea.append(newDiv); 
})

async function getGif(q) {
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {api_key: APIkey, q:q}})
    //res returns array of 50 gifs, randNum selects a random item from array
    const randNum = Math.floor(51 * Math.random());
    return res.data.data[randNum].images.original.url;
}

//handle remove button
const removeBtn = document.querySelector('#remove'); 

removeBtn.addEventListener('click', function(event){

    $('#gif-area').empty();
})

