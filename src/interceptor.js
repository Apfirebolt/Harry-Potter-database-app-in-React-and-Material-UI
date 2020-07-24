import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://www.potterapi.com/v1/'
});

let storedToken = localStorage.getItem('Token');
if(storedToken) {
  axiosInstance.defaults.headers.common = {
    'Authorization': `Token ${storedToken}`
  }
}

export default axiosInstance;