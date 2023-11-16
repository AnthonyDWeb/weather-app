import React from "react";

interface props {
	data: object | any;
}

export default function WeatherCard({ data }: props) {
	console.log("data card", data);

	const capitalizeFirstLetter = (string: string) =>
		string.charAt(0).toUpperCase() + string.slice(1);

	const getCelcius = (k: number) => k - 273.15;

	return (
		<div className="weather_card">
			<h2 className="weather_card_name">{data.name}</h2>
			{data.weather.map((e: any) => (
				<div className="weather_card_icon_container" key={e.icon}>
					<img src={`https://openweathermap.org/img/wn/${e.icon}@2x.png`} />
					<p>{capitalizeFirstLetter(e.description)}</p>
				</div>
			))}
			<div className="weather_card_detailed_information">
				<p>Temperature: {getCelcius(data.main.temp).toFixed(1)} ° C</p>
				<p>Humidity: {data.main.humidity} %</p>
				<p>Wind Speed: {data.wind.speed} m/s</p>
			</div>
		</div>
	);
}
