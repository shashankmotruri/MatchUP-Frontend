import axios from 'axios';
import {API_URL} from '../Backend_URL';

export default async function RemoveFromCart(productId,userId){
    try {
    return await axios.delete(`${API_URL}/users/cartProducts/${userId}/${productId}`).then(response => {return response});
    } catch (error) {
        return ({status: 404, msg: error.message});
    }
} 