import React, { useEffect, useState } from 'react';
import { WeatherCard } from "./WeatherCard";
import { Search } from './Search';

export const Data = () => {

    const [searchValue, setSearchValue] = useState("pune");
    const [tempInfo, setTempInfo] = useState({});

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=34c09de119108bf5b427de14f3489099`;
            let res = await fetch(url);
            let data = await res.json();

            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const { speed } = data.wind;
            const { name } = data;
            const { country, sunset } = data.sys;

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                speed,
                name,
                country,
                sunset
            };

            setTempInfo(myNewWeatherInfo);

        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getWeatherInfo();
    }, [])

    return (
        <div>
            <Search getWeatherInfo={getWeatherInfo} setSearchValue={setSearchValue} searchValue={searchValue} />
            <WeatherCard tempInfo={tempInfo} />
        </div>
    );
};
