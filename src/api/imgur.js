import qs from 'qs';
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
        }
        
    }