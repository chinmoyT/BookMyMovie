import axios from 'axios'
export const getAllMovies = async()=> {
    const res = await axios.get("localhost:9000/movies")
                            .catch((error)=> console.log(error));

    if(res.status!== 200){
        return console.log("No data")
    }

    const data = await res.data;
    return data;
}   


export const sendUserAuthRequest = async(data, signup)=> {
    const res = axios.post(`localhost:9000/user/${signup? "signup" : "login"}`, {
        name : signup?  data.name : "",
        email : data.email,
        password: data.password
    })
    .catch((error)=> {
        console.log(error)
    })

    if(res.status !== 200 && res.status !== 201){
        console.log("Unexpected error occured") 
    }

    const resData = await res.data;
    return resData;
}

export const getMovieDetails = async(id)=> {
    const res = await axios.get(`localhost:9000/movie${id}`)
    .catch((error)=> console.log(error))

    if(res.status !== 200){
        return console.log("Unexpected error");
    }

    const resData = await res.data;
    return resData;
}

export const newBooking = async(data)=> {
    const res = await axios.post(`localhost:9000/booking`,{
        movie: data.movie,
        seatNumber : data.seatNumber,
        date: data.date
    })
    .catch((error)=> console.log(error));

    if(res.status !== 201){
        return console.log("Unexpected error");
    }

    const resData = await res.data;
    return resData;
}