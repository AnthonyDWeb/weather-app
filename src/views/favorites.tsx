import React, { useContext } from "react";
import { FavoriteContext } from "../contexts/favorite.context";
import WeatherCard from "../components/card/weather_card";
import useDevice from "../utils/hooks/useDevice";

export default function Favorites() {
	const { favorites } = useContext(FavoriteContext);
	const { device } = useDevice();
	const emptyCardNumber: number = 5 - favorites.length;
	const cards = [];
	for (let i = 0; i < emptyCardNumber; i++) {
		cards.push("Empty Favorite");
	}

	return (
		<div className={`main_container ${device}`}>
			{favorites.map((c: any) => (
				<WeatherCard data={c} key={`favorite-${c.name}`} route="favorites" />
			))}
			{cards.map((e: string,i: number) => (
				<div className={`empty_card ${device}`} key={`${e}${i}`}>
					<p className="empty_card_text">{e}</p>
				</div>
			))}
		</div>
	);
}
