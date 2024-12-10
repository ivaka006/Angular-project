import { Schema, model } from "mongoose";

const gameSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The game name is required.'],
        trim: true 
    },
    year: {
        type: Number,
        required: [true, 'The release year is required.'],
        min: [1950, 'The year must be 1950 or later.'],
        max: [new Date().getFullYear(), 'The year cannot be in the future.']
    },
    company: {
        type: String,
        required: [true, 'The company that made the game is required.'],
        trim: true
    },
    genre: {
        type: String,
        required: [true, 'The game genre is required.'],
        enum: {
            values: ['Action', 'Adventure', 'RPG', 'Shooter', 'Strategy', 'Simulation', 'Sports', 'Puzzle', 'Other'],
            message: 'Invalid genre.'
        }
    },
    type: {
        type: String,
        required: [true, 'The game type is required.'],
        enum: {
            values: ['Single-player', 'Multiplayer', 'Co-op', 'MMO', 'Other'],
            message: 'Invalid game type.'
        }
    },
    description: {
        type: String,
        required: [true, 'A game description is required.'],
        maxlength: [1000, 'The description cannot exceed 1000 characters.']
    },
    imageUrl: {
        type: String,
        required: [true, 'An image URL is required.'],
        match: [/^https?:\/\/.+/, 'Invalid URL format.']
    }
}, {
    timestamps: true 
});

export default model('Game', gameSchema);