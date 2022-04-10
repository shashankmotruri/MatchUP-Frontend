import axios from 'axios';
import {API_URL} from '../Backend_URL';

export default async function UpdateUserById(userId,updatedUser){
    if(!userId){
        return ({status: 401,msg : 'User Not Found'});
    }
    return await axios.patch(`${API_URL}/users/${userId}`,updatedUser)
    .then((response) => {
        console.log(response);
        if(response.status === 200){
        return ({status: response.status,msg : response.data.message,user : response.data.user});
        }
    })
    .catch((error) => {
        console.log(error.response);
        return ({status: error.response.status,msg: error.response.data.message})
    })

}
