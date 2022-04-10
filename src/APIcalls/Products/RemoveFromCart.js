import axios from 'axios';
import {API_URL} from '../Backend_URL';

export default async function RemoveFromCart(productId,userId){
    try {
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token': sessionStorage.getItem('token')
        }
    return await axios.delete(`${API_URL}/users/cartProducts/${userId}/${productId}`,{headers: headers}).then(response => {return response});
    } catch (error) {
        return ({status: 404, msg: error.message});
    }
} 