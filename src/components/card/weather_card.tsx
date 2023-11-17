import React, { useContext } from "react";
import { FavoriteContext } from "../../contexts/favorite.context";

interface props {
	data: object | any;
	route?: string
}

export default function WeatherCard({ data, route }: props) {
	const { favorites, addToFavorites } = useContext(FavoriteContext);

	const capitalizeFirstLetter = (string: string) =>
		string.charAt(0).toUpperCase() + string.slice(1);

	const getCelcius = (k: number) => k - 273.15;

	return (
		<div className="weather_card">
			<h2 className="weather_card_name">{data.name}</h2>
			{data.weather.map((e: any) => (
				<div className="weather_card_icon_container" key={e.icon}>
					<img src={`https://openweathermap.org/img/wn/${e.icon}@2x.png`} alt="icon"/>
					<p>{capitalizeFirstLetter(e.description)}</p>
				</div>
			))}
			<div className="weather_card_detailed_information">
				<p>Temperature: {getCelcius(data.main.temp).toFixed(1)} ° C</p>
				<p>Humidity: {data.main.humidity} %</p>
				<p>Wind Speed: {data.wind.speed} m/s</p>
			</div>
			{(favorites.length < 5 && route !== "favorites") && (
				<button className="add_button" onClick={() => addToFavorites(data)}>Add to Favorite</button>
			)}
		</div>
	);
}
