import axios from 'axios';
import {API_URL} from '../Backend_URL';

// async function GetUsers(){
//     const users = await axios.get(`${API_URL}/users`)
//      .then((result) => {return result.data})
//      .catch((error) => {
//          console.log(error);
//      })
 
//      return users;
// }
 
//  const isuserExists = async (email) => {
//     const users = await GetUsers();
//      let isUser = false;
//      for(let i = 0; i < users.length; i++) {
//         if(users[i].email === email) {
//              isUser = true;
//              return isUser;
//         }
//      }

//      return isUser;
//  }

export default async function Signin(user){
    // return ({status: 200,msg : 'User Sucessfully Signed In'});
    if(!user.email || !user.password){
        return ({status: 401,msg : 'Please Enter all input fields!'});
    }
    return await axios.post(`${API_URL}/users/signin`,user)
    .then((response) => {
        console.log(response);
        if(response.status === 200){
        return ({status: response.status,msg : 'User Sucessfully Signed In',user : response.data.user});
        }
    })
    .catch((error) => {
        console.log(error.response);
        return ({status: error.response.status,msg: error.response.data.message})
    })

}
