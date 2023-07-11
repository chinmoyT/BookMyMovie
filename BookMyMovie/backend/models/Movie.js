import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    bookings: [{type: mongoose.Types.ObjectId,
    ref: "Booking"}],
    featured: {
        type: Boolean
    },
    actors: [{
        type: String,
        required: true
    }],
    admin: {
        type: mongoose.Types.ObjectId,
        ref: "Admin",
        required: true
    }
})

export default mongoose.model('Movie', movieSchema)