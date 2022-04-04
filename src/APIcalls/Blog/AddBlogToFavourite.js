import axios from 'axios';

import {API_URL} from '../Backend_URL';

export default async function AddBlogToFavourite(userId,blogId){
    try {
        return await axios.post(`${API_URL}/users/favouriteBlogs/${userId}/${blogId}`).then((response) => {return response});
    } catch (error) {
        return ({status: 500,msg : 'Internal Server Error'});
    }
}