const { Song } = require('../models');
const mongoose = require('mongoose');


const getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find({});
        res.json(songs)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getSongById = async (req, res) => {
    const { id } = req.params;
    try {
        const song = await Song.findById(id)
        if (!song) {
            return res.status(404).json({ message: 'Song not found' })
        }
        res.status(200).json(song);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getSongByWord = async (req, res) => {
    try {
        const searchTerm = req.params.searchTerm;
        const regexTerm = new RegExp(searchTerm, 'i')
        let releaseYear

        if (!isNaN(searchTerm)) {
            releaseYear = parseInt(searchTerm)
        }

        const songs = await Song.find({
            $or: [
                { name: { $regex: regexTerm } },
                { description: { $regex: regexTerm } },
                { releaseYear: releaseYear } 
            ]
        })
        res.json(songs)
    } catch (error) {
        console.error("Error retriving song by search term:", error)
        res.status(500).json({ error: error.message })
    }
}

const getSongByArtist = async (req, res) => {
    const { artistId } = req.params;
    try {
        const songs = await Song.find({artistId: artistId})
        if (!songs) {
            return res.status(404).json({ message: 'Song not found' })
        }
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


const deleteSong = async (req, res) => {
    try {
        const { id } = req.params
        const song = await Song.findByIdAndDelete(id)
        if (song) {
            return res.status(200).send({ message: 'Song deleted' });
        }
        throw new Error("Song not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateSong = async (req, res) => {
    try {
        let { id } = req.params;
        let song = await Artist.findByIdAndUpdate(id, req.body, { new: true })
        if (!song) {
            return res.status(200).json(song)
        }
        throw new Error("Song not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createSong = async (req, res) => {
    try {
        const newSong = await new Song(req.body)
        await newSong.save()
        return res.status(201).json({
            newSong
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    getAllSongs,
    getSongById,
    getSongByWord,
    getSongByArtist,
    deleteSong,
    updateSong,
    createSong
};