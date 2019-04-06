import axios from 'axios';

const API_URL = 'https://78n3id557f.execute-api.us-east-1.amazonaws.com/api/';

export default axios.create({
    baseURL: API_URL
});
