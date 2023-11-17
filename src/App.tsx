// Library
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Styles
import "./App.css";
import styled from "styled-components";
// Views
import Homepage from "./views/homepage";
import Favorites from "./views/favorites";
import NavigationBar from "./components/navigation/navigation_bar";
import useDevice from "./utils/hooks/useDevice";
import { FavoriteContextProvider } from "./contexts/favorite.context";
// Components
// Files

function App() {
	const { device } = useDevice();
	return (
		<BrowserRouter>
			<FavoriteContextProvider>
				<PagesContainer>
					<header className={`header ${device}`}>
						<NavigationBar />
					</header>
					<main className={`${device}`}>
						<div className={`title_container ${device}`}>
							<h1 className="main_title">Weather App</h1>
						</div>
						<Routes>
							<Route path="weather-app/" element={<Homepage />} />
							<Route path="weather-app/favorites" element={<Favorites />} />
						</Routes>
					</main>
					<footer className={`footer ${device}`}>
						<NavigationBar />
					</footer>
				</PagesContainer>
			</FavoriteContextProvider>
		</BrowserRouter>
	);
}

export default App;

// const PagesContainer = styled.div<{ device: string }>`

// `;
const PagesContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	justify-content: space-between;
`;
