import express from 'express'
import { addMovie, getMovieById, getMovies } from '../controllers/movieController'
const movieRouter = express.Router()

movieRouter.get('/', getMovies)
movieRouter.get('/:id', getMovieById)
movieRouter.post('/', addMovie)

export default movieRouter