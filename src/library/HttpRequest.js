
import Axios from 'axios';

const fetchMiddleware = (action) => {
    if (action) {
        const {
          url, method, body
        } = action;
        
        return Axios({
            url: url,
            method,
            data: body || '',
        }); 
    }
}

export default fetchMiddleware;