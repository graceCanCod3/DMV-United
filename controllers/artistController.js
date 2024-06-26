const { Artist } = require('../models');
const mongoose = require('mongoose');


const getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.find({});
        console.log(artists)
        return res.json(artists)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getArtistById = async (req, res) => {
    const { id } = req.params;
    try {
        const artists = await Artist.findById(id)
        if (!artists) {
            return res.status(404).json({ message: 'Artist not found' })
        }
        res.status(200).json(artists);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}




const deleteArtist = async (req, res) => {
    try {
        const { id } = req.params
        const artist = await Artist.findByIdAndDelete(id)
        if (artist) {
            return res.status(200).send({ message: 'Artist deleted successfully' });
        }
        throw new Error("Artist not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateArtist = async (req, res) => {
    try {
        let { id } = req.params;
        let artist = await Artist.findByIdAndUpdate(id, req.body, { new: true })
        if (artist) {
            return res.status(200).json(artist)
        }
        throw new Error("Artist not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createArtist = async (req, res) => {
    try {
        const newArtist = await new Artist(req.body)
        await newArtist.save()
        return res.status(201).json({
            newArtist
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    getAllArtists,
    getArtistById,
    deleteArtist,
    updateArtist,
    createArtist
};