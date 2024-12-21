import axios from 'axios';

const axiosServer = axios.create({
	baseURL: 'https://dummyjson.com'
});

export default axiosServer;
