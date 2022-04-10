import axios from 'axios';

import {API_URL} from '../Backend_URL';

export default async function AddBlogToFavourite(userId,blogId){
    try {
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token': sessionStorage.getItem('token')
        }
        return await axios.post(`${API_URL}/users/favouriteBlogs/${userId}/${blogId}`,{headers: headers}).then((response) => {return response});
    } catch (error) {
        return ({status: 500,msg : 'Internal Server Error'});
    }
}