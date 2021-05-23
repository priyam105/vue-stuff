import qs from 'qs';
import axios from 'axios';
const CLIENT_ID = '4171d21b58af9b8';
const BASE_URL = 'https://api.imgur.com';

export default
    {
        login() {
           // console.log(BASE_URL+'/'+'oauth2/authorize?'+'client_id='+CLIENT_ID+'&response_type=token');
            const queryParam = {
                client_id:CLIENT_ID,
                response_type:'token'  
            };
            window.location=`${BASE_URL}/oauth2/authorize?${qs.stringify(queryParam)}`;
           // window.location= BASE_URL+'/'+'oauth2/authorize?'+'client_id='+CLIENT_ID+'&response_type=token'
        },

        fetchImages(userToken)
        {  return axios.get(`${BASE_URL}/3/account/me/images`,{
                headers:{
                    Authorization:`Bearer ${userToken}`
                }
            });
        }
        
    }