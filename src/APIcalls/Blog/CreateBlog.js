import axios from 'axios';
import { mockImgCover } from '../../utils/mockImages';

import {API_URL} from '../Backend_URL';

export default async function CreateBlog(blogtitle,blogDescription,image,sellerid){
    // let today = new Date();
    // const blog = {
    //     "title" : blogtitle,
    //     "description" : blogDescription,
    //     "cover": mockImgCover(Math.floor(Math.random() * (24)  + 1)),
    //     "avatarUrl": `/static/mock-images/avatars/avatar_${Math.floor(Math.random() * (24) + 1)}.jpg`,
    //     "popularity" : Math.floor(Math.random() * (11)),
    //     "createdAt" : today,
    // }
    // if(blogtitle) {
    //     return await axios.post(`${API_URL}/blogs`,blog)
    // }
    // return null;
    let bodyFormData = new FormData();
    bodyFormData.append('title', blogtitle);
    bodyFormData.append('description', blogDescription);
    bodyFormData.append('sellerUserId',sellerid );
    bodyFormData.append('file', image);
    
    return await axios({
        method: "post",
        url:`${API_URL}/blogs`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response)
          if(response.status === 200 || response.status ===201){
              
              return ({status: response.status,msg : response.data.message});
          }
          return ({status: response.status,msg : response.data.message});
        })
        .catch(function (error) {
          //handle error 
          console.log(error.response);
            return ({status: error.response.status,msg : error.response.data.message});
        });
}