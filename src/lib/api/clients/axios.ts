import axios from 'axios';

const axiosClient = axios.create({
	baseURL: 'https://dummyjson.com'
});

// Authorization

export default axiosClient;
