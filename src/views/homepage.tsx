import React, { useRef, useState } from "react";
import "../App.css";
import { weatherSearch } from "../utils/api/fetch_data";
import WeatherCard from "../components/card/weather_card";

export default function Homepage() {
	const [city, setData] = useState<object | any>();
	const [isCheked, setChecked] = useState(false);
	const cityName = useRef<string>("");

	// FUNCTIONS
	const fetchData = async () => {
		const dataFetch = await weatherSearch(cityName.current);
		setData(dataFetch);
	};
	const checkChange = () => {
		setChecked(!isCheked);
	};

	// RENDERS
	const Search = () => {
		return (
			<section className="search_section">
				<input
					type="text"
					className="search_input"
					placeholder="Enter city name"
					defaultValue={cityName.current}
					onChange={(t) => (cityName.current = t.target.value)}
				/>
				<button className="search_button" onClick={() => fetchData()}>
					search
				</button>
			</section>
		);
	};

	const Result = () => {
		return city && (
			<section className={`result_section ${city !== undefined}`}>
				<WeatherCard data={city} />
				<div className="checkbox_container">
					<p>City by default</p>
					<input
						onClick={checkChange}
						type="checkbox"
						defaultChecked={isCheked}
					/>
				</div>
			</section>
		);
	};

	return (
		<div className="main_container">
			<Search />
			<Result />
		</div>
	);
}
