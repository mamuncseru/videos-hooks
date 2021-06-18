import axios from 'axios';

const KEY = 'AIzaSyBZibHlhg2TX5MQuzQzr7h3cPTtZhfo7MY';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
