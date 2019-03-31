
const search = document.querySelector('.search input')
const searchButton = document.querySelector('.search button')
const testDisplay = document.querySelector('.songTestDisplay div')
const songParent = document.querySelector('.songTestDisplay')
const apiUrl = 'https://itunes-api-proxy.glitch.me/search?term='


// This is working to format the url based on user text and fetch and return song data
function userSearch () {
    searchButton.addEventListener('click', function() {
        let url = (apiUrl.concat(encodeURIComponent(search.value)))
        fetch(url).then(promise => promise.json())
        .then(data => { for (let song of Object.values(data)[1]){
        
        console.log(song)
        console.log("hello")
        var songChild = `
        <div class="songChild">
        <h3> ${song.artistName} </h3>
        <h5> ${song.trackName} </h5>
        <h4> ${song.collectionName} </h4>
        <img src="${song.artworkUrl100}" class="albumImage">
        <audio controls>
            <source src="${song.previewUrl}" type="audio/mpeg">
        </audio>
        </div>
        `;
        songParent.insertAdjacentHTML('beforeend', songChild)
            }})
    })
}


userSearch()
