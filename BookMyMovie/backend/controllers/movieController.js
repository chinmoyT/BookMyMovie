import Movie from '../models/Movie'
import jwt from 'jsonwebtoken'
import Admin from '../models/Admin';

export const addMovie = async(req, res, next)=>{
    const extractedToken = req.headers.authorization.split(" ")[1];
    if(!extractedToken && extractedToken.trim()===""){
        return res.status(404).json({message: "Token not found"});
    }

    let adminId;
    jwt.verify(extractedToken, process.env.SECRET_KEY,(err, decrypted)=>{
        if(err){
            return res.status(404).json({message:`${err.message}`})
        }
        else{
            adminId = decrypted.id;
            return;
        }
    })

    const {title, description, releaseDate, poster, featured, actors} = req.body;
    if(!title && title.trim()==="" && !description && description.trim()==="" && !poster && poster.trim()===""){
        return res.status(422).json({message: "Invalid Inputs"})
    }
    let movie;
    try{
        movie = new Movie({title, description,poster, releaseDate: new Date(`${releaseDate}`), featured, admin: adminId, actors});

        const session = await mongoose.startSession()
        const adminUser = await Admin.findById(adminId)
        session.startTransaction();
        await movie.save({session});
        adminUser.addedMovies.push(movie);
        await adminUser.save({session})
        await session.commitTransaction();

    }catch(error){
        console.log(error);
    }

    if(!movie){
        return res.status(500).json({message: "Request failed"})
    }
    return res.status(200).json({movie})
}

export const getMovies = async(req,res,next)=> {
    let movies;

    try{
        movies = await Movie.find()
    }catch(error){
        console.log(error)
    }

    if(!movies){
        return res.status(500).json({message: "Request failed"})
    }

    return res.status(200).json({movies})   
}

export const getMovieById =async(req,res,next)=> {
    const id = req.params.id;
    let movie;
    try{
        movie = await Movie.findById(id)
    }catch(error){
        console.log(error)
    }

    if(!movie){
        return res.status(404).json({message: "Invalid Movie ID"})
    }

    return res.status(200).json({movie}); 
}