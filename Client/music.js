const fetchSongById = async (artistId) => {
    try {
        const response = await axios.get(`http://localhost:3003/song/artist/${artistId}`);
        return response.data[0];
    } catch (error) {
        console.error('Error fetching song:', error.message);
        return null;
    }
};

const displaySongById = async () => {
    try {
        const urlParams = new URLSearchParams(window.location.search)
        const artistId = urlParams.get('id')
        console.log(artistId)

        if (artistId) {
            const song = await fetchSongById(artistId)
            console.log(song)
            if (song) {
                const songElement = document.createElement('div')
                songElement.classList.add('song')
                // songElement.innerHTML = `
                //     <img src="${song.image}" alt="${song.title}" class="songImage">
                // `;
                
                const songText = document.createElement('div')
                songText.classList.add('songText')
                songText.innerHTML = `
                
                    <h2>${song.title}</h2>
                    <p>Album: ${song.album}</p>
                    <p>Release Year: ${song.releaseDate}</p>
                    <p>Description: ${song.description}</p>
                    <a href="${song.url}">Click To Play Track!</a>
                `;

                songElement.appendChild(songText)
                
                const songsContainer = document.querySelector('#song-details')
                if (songsContainer) {
                    songsContainer.innerHTML = ''
                    songsContainer.appendChild(songElement)
                } else {
                    console.error('Songs container not found')
                }
            } else {
                console.error('Song not found')
            }
        } else {
            console.log('URL:', window.location.href)
            console.log('URL Params:', urlParams)
            console.log('Song ID:', artistId)
            console.error('Song ID not provided in URL')
        }
    } catch (error) {
        console.error('Error fetching/displaying product:', error.message)
    }
}

window.onload = async (event) => {
    await console.log("page is fully loaded");

    displaySongById()
}