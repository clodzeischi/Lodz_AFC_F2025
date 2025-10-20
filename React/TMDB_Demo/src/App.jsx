import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/authentication',
    headers: {accept: 'application/json'}
};

axios
    .request(options)
    .then(res => console.log(res.data))
    .catch(err => console.error(err));