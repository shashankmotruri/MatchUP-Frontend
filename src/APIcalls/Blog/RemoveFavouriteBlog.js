import axios from 'axios';
import {API_URL} from '../Backend_URL';

export default async function RemoveFavouriteBlog(blogId,userId){
    try {        
    return await axios.delete(`${API_URL}/users/favouriteBlogs/${userId}/${blogId}`).then(response => {return response});
    } catch (error) {
        return ({state: 500 , msg : "Internal Server Error"})
    }
} 