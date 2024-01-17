import AboutUs from "./Pages/AboutUs/AboutUs";
import NotFound from "./Pages/NotFound/NotFound";
import Weather from "./Pages/weather/Weather";
import { ABOUT_US, NOT_FOUND, WEATHER } from "./components/constants";

export const router = [
    {
        path: ABOUT_US,
        Element: AboutUs
    },
    {
        path: WEATHER,
        Element: Weather
    },
    {
        path: NOT_FOUND,
        Element: NotFound
    }
]