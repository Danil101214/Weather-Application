import AboutUs from "./Pages/AboutUs/AboutUs";
import NotFound from "./Pages/NotFound/NotFound";
import Weather from "./Pages/weather/Weather";

export const router = [
    {
        path: '/',
        Element: AboutUs
    },
    {
        path: '/weather',
        Element: Weather
    },
    {
        path: '*',
        Element: NotFound
    }
]