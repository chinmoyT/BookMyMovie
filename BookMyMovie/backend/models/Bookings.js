import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Types.ObjectId,
        ref: "Movie",
        required: true
    },
    date: {
        type: Date,
        required: true,
    },
    seatNumber: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: String
    }
})

export default mongoose.model('Booking', bookingSchema)