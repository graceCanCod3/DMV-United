const artistEndpoint = `http://localhost:3003/artist`
// const genXartistButton = document.getElementById('')
// const genXartist = document.querySelector("")
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

    // Filter movies by target year
    // const gogoArtist = artistInfo.filter(artist => artist.genreId === targetId);
    const artistContainer = document.getElementById('artist-container');
            artistInfo.forEach(artist => {
                const artistElement = document.createElement('div');
                artistElement.innerHTML = `
                    <img src="${artist.image}" alt="artist image" width='250' height='250'>
                    <h2>Artist: ${artist.name}</h2>
                    <p>DOB: ${artist.dateOfBirth}</p>
                    <p>Genre: ${artist.genre}</p>
                    <p>Bio: ${artist.bio}</p>
                    <a href="${artist.url}" target="_blank">Arist Website</a>
                    <p></p>
                `;
                artistContainer.appendChild(artistElement);
            });
    console.log(artistInfo);
} catch (error) {
    console.error('Error fetching songs:', error);
}
};