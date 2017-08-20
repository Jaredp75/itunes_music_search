/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
let searchMusic = 'https://itunes.apple.com/search?term=';










// 2. Create your `submit` event for getting the user's search term
let button = document.querySelector('form');

button.addEventListener('submit', function(event) {
  event.preventDefault();
  let searchBox = document.querySelector('search-tracks').value;
  let searchURL = searchMusic + searchBox;
// 3. Create your `fetch` request that is called after a submission
  fetch()

  .then(
    funtion(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      } //console.log(searchURL);

      response.json().then(function(data) {
        document.querySelector(".search-results").innerHTML = "";
        for (let i = 0; i < data.results.length; i++) {
          let track = data.results[i].trackName;
          let album = data.reults[i].collectionName;
          let art= data.results[i].artworkUrl100;
          let artist = data.results[i].artistName;
          let sample = data.results[i].previewUrl;
          let musicBoxes = document.createElement('div');
          musicBoxes.setAttribute("class", "box");
        }
      })

      //response.json().then(function(data) {
      //					let results = document.getElementById("results");
      //					results.innerHTML ='';
      //					if (data.results.length===0) {
      //						results.innerHTML += `<p>Sorry, your search did not return any results. Try again!</p>`
      //					}
      //					else {
      //						data.results.map((recipe)=>{
      //							results.innerHTML += `
      //							<div class="recipeBox"><img class="foodThumb" src="${recipe.thumbnail}">
      //							<h2>${recipe.title}</h2>
      //							<a href="${results.href}">View Recipe</a></div>
      //							`

    }



  )


})






















// 4. Create a way to append the fetch results to your page













// 5. Create a way to listen for a click that will play the song in the audio play
