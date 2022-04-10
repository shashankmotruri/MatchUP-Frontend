import axios from 'axios';
import {API_URL} from '../Backend_URL';

export default async function GetUserById(userId){
    if(!userId){
        return ({status: 401,msg : 'User Not Found'});
    }
    return await axios.get(`${API_URL}/users/${userId}`)
    .then((response) => {
        if(response.status === 200){
        return ({status: response.status,msg : 'User Sucessfully Fetched',user : response.data});
        }
    })
    .catch((error) => {
        console.log(error.response);
        return ({status: error.response.status,msg: error.response.data.message})
    })

}
