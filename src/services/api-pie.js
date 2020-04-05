import axios from 'axios';

const apiBar = axios.create({
    baseURL: 'https://private-afe609-testefront.apiary-mock.com/anual-result',
})

export default apiBar;