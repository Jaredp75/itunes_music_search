/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with


let button = document.querySelector('form'); //Submit button


let searchMusic = 'https://itunes.apple.com/search?term='; //iTunes API

// 2. Create your `submit` event for getting the user's search term




	button.addEventListener('submit', function(event) {
	  event.preventDefault();
	  var searchBox = document.querySelector('.search-music').value;
	  let searchURL = searchMusic + searchBox;




// 3. Create your `fetch` request that is called after a submission

	  fetch(searchURL)


	  .then(
	    function(response) {
	      if (response.status !== 200) {
	        console.log('Looks like there was a problem. Status Code: ' + response.status);
	        return;

	      } console.log(searchURL);


// 4. Create a way to append the fetch results to your page

	      response.json().then(function(data) {
	        document.querySelector(".search-results").innerHTML = "";
	        for (let i = 0; i < data.results.length; i ++) {
	          let track = data.results[i].trackName;
	          let album = data.results[i].collectionName;
	          let art = data.results[i].artworkUrl100;
	          let artist = data.results[i].artistName;
	          let sample = data.results[i].previewUrl;
	          let musicBoxes = document.createElement('div');
	          musicBoxes.setAttribute("class", "box");


	          let display = `
	          <p><img src = ${art} class = "albumThumb"></p>
	          <p class = 'artistTrack'>${track}</p>
	          <p class = "artistTitle">${artist}</p>
	          `


            musicBoxes.innerHTML = display
            let box = document.querySelector(".search-results");
            box.appendChild(musicBoxes);
            let clickPic = musicBoxes.querySelector(".albumThumb");
            clickPic.addEventListener('click', function(event){
            	let getMusic = document.getElementById('music-player');
            	getMusic.innerHTML = `<audio controls autoplay><source src = "${sample}" type = "audio/wav"></audio>`
            })




          }


	      })


	    }
    )

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
