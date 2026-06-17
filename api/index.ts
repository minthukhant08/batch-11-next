import axios from "axios";


const instance = axios.create({
  baseURL: 'http://localhost:3001',
  headers: { 'X-Custom-Header': 'foobar' },
});

export default instance