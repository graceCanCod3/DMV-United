const { LocalArtist } = require('../models');
const mongoose = require('mongoose');



const getAllLocalArtists = async (req, res) => {
    try {
        const localArtists = await LocalArtist.find({})
        res.json(localArtists)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}

const deleteLocalArtist = async (req, res) => {
    const { id } = req.params;
    try {
        const localArtist = await LocalArtist.findByIdAndDelete(id);
        if (!localArtist) {
            return res.status(404).json({ message: 'Artist not found' });
        }
        res.status(200).json({ message: 'Artist deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const updateLocalArtist = async (req, res) => {
    try {
        let { id } = req.params;
        let localArtist = await LocalArtist.findByIdAndUpdate(id, req.body, { new: true })
        if (localArtist) {
            return res.status(200).json(localArtist)
        }
        throw new Error("Local Artist not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createLocalArtist = async (req, res) => {
    try {
        const newLocalArtist = await new LocalArtist(req.body)
        await newLocalArtist.save()
        return res.status(201).json({
            newLocalArtist
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


module.exports = {
    getAllLocalArtists,
    deleteLocalArtist,
    updateLocalArtist,
    createLocalArtist
};