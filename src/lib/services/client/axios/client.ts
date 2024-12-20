import axios from 'axios';

const axiosClient = axios.create({
	baseURL: '/api'
});

// Authorization

export default axiosClient;
