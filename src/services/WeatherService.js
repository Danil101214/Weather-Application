import { API_KEY } from '../components/constants'
import axios from 'axios'

export const WeatherService = {
    async getOne(country) {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${API_KEY}&lang=ru`);
        return response.data;
    }
}