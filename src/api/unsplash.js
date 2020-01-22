import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 2cfba3544851395992c9d2e530b4302ddcfc3c325c39193697a46b71794b33c7'
	}
});