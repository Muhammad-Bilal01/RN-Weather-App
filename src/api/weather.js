import axios from "axios";
import { API_KEY } from "../constants";


const forcastEndPoint = params => `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;
const locationEndPoint = params => `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${params.cityName}`;


const apiCall = async (endpoint) => {
    const option = {
        method: "GET",
        url: endpoint,
    }

    try {
        const response = await axios.request(option);
        return response.data;
    } catch (error) {
        console.error("ERROR: ", error)
        return null;
    }
}


export const fetchWeatherForcast = params => {
    let forecastUrl = forcastEndPoint(params)
    return apiCall(forecastUrl)
}

export const fetchLocations = params => {
    let locationUrl = locationEndPoint(params)
    return apiCall(locationUrl)
}