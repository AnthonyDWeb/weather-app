// Library
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Styles
import "./App.css";
import styled from "styled-components";
// Views
import Homepage from "./views/homepage";
import Favorites from "./views/favorites";
import NavigationBar from "./components/navigation/navigation_bar";
import useDevice from "./utils/hooks/useDevice";
// Components
// Files

function App() {
	const { device } = useDevice();
	return (
		<BrowserRouter>
			<PagesContainer device={device}>
				<header className={`header ${device}`}>
					<NavigationBar />
				</header>
				<main>
					<h1 className="main_title">Weather App</h1>
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/favorites" element={<Favorites />} />
					</Routes>
				</main>
				<footer className={`footer ${device}`}>
					<NavigationBar />
				</footer>
			</PagesContainer>
		</BrowserRouter>
	);
}

export default App;

const PagesContainer = styled.div<{ device: string }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	padding: ${(props) =>
		props.device === "mobile" ? "3vh 5vw 0 5vw" : "0 5vw"};
`;
