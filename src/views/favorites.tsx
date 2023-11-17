import React, { useContext } from "react";
import { FavoriteContext } from "../contexts/favorite.context";
import WeatherCard from "../components/card/weather_card";

export default function Favorites() {
	const { favorites } = useContext(FavoriteContext);

	console.log("favorite", favorites);
	return (
		<div className="main_container">
			{favorites.map((c: any) => (
				<WeatherCard data={c} key={`favorite-${c.name}`} route="favorites"/>
			))}
		</div>
	);
}
