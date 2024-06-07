const artistEndpoint = `http://localhost:3003/artist`
const artists = `http://localhost:3003/artist`

window.onload = async (event) => {
    await console.log("page is fully loaded");

// let targetId = "Washington, DC";
try {
    const response = await fetch(artistEndpoint);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const artistInfo = await response.json();
    console.log(artistInfo)

    
    // linkElement.href = `display-products.html?id=${product._id}`;

    // const gogoArtist = artistInfo.filter(artist => artist.genreId === targetId);
    const artistContainer = document.getElementById('artist-container');
            artistInfo.forEach(artist => {
                const artistElement = document.createElement('div');
                artistElement.innerHTML = `
                    <img class="nextPage" src="${artist.image}" alt="artist image" width='250' height='250'>
                    <h2 class="nextPage"><a href="song.html?id=${artist._id}">Artist: ${artist.name}</a></h2>
                    <p>DOB: ${artist.dateOfBirth}</p>
                    <p>Genre: ${artist.genre}</p>
                    <p>Bio: ${artist.bio}</p>
                    <a href="${artist.url}" target="_blank">Artist Website</a>
                    <p></p>
                `;
                artistContainer.appendChild(artistElement);
            });
    console.log(artistInfo);
} catch (error) {
    console.error('Error fetching songs:', error);
}
};