import React, { createContext, useState } from "react";

type FavoriteContextProviderProps = {
	children: React.ReactNode;
};

export type favoriteContextType = {
	favorites: object[];
	addToFavorites: (data: object) => void;
};

export const FavoriteContext = createContext<favoriteContextType>({
    favorites: [],
    addToFavorites: function (data: object): void {
        throw new Error("Function not implemented.");
    }
});

export const FavoriteContextProvider = (
	children: FavoriteContextProviderProps
) => {
	const [favorites, setFavorites] = useState<object[]>([]);

	const addToFavorites = (data: object) => {
        if (favorites.length < 5) {
            const newFavorites = [...favorites];
            newFavorites.push(data);
            newFavorites.length === 4 && alert("One more and you'll reach the maximum of favorites");
            newFavorites.length === 5 && alert("You reach the maximum of favorites");
            setFavorites(newFavorites);
        }
	};

	const favoriteValue = { favorites, addToFavorites };
	return <FavoriteContext.Provider value={favoriteValue} {...children} />;
};
