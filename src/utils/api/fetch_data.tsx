export const weatherSearch = async (city: string) => {
	const res = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7c4161e5bf58a767701a53b267e073ef`
	);
	const data = await res.json();
	return data;
};
