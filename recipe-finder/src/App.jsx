import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [reciepe, setReciepe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const addToFavorite = (reciepe) => {
    if (!favorites.find((fav) => fav.idMeal === reciepe.idMeal)) {
      const updated = [...favorites, reciepe];
      setFavorites(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));
    }
  };

  const removeFromFavorite = (reciepe) => {
    const updated = favorites.filter((fav) => fav.idMeal === reciepe.idMeal);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };
  const searchReciepe = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      setReciepe(res.data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
    setLoading(false);
  };
  return (
    <div className="App">
      <h1>🍽 Recipe Finder</h1>
      <input
        type="text"
        value={query}
        placeholder="SearchSearch for a recipe..."
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-full max-w-md mb-4"
      />
      <button
        onClick={searchReciepe}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      {loading ? (
        <p>loading...</p>
      ) : reciepe.length === 0 ? (
        <p>No reciepe found</p>
      ) : (
        <div>
          {reciepe.map((meal) => {
            const isFavorites = favorites.some(
              (fav) => fav.idMeal === meal.idMeal
            );
            return (
              <div key={meal.idMeal}>
                <h1>{meal.strMeal}</h1>
                <img src={meal.strMealThumb} alt={meal.strMeal} width={200} />
                <p>
                  {meal.strArea}| {meal.strCategory}
                </p>
                <a href={meal.strYoutube} target="_blank" rel="noreferrer">
                  Watch Video
                </a>
                {isFavorites ? (
                  <button
                    onClick={() => removeFromFavorite(meal.idMeal)}
                    className="bg-orange-400 text-white px-4 py-2 rounded"
                  >
                    💔 Remove Favorite
                  </button>
                ) : (
                  <button
                    onClick={() => addToFavorite(meal)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    ❤️ Save Favorite
                  </button>
                )}
              </div>
            );
          })}
          <h2>Your Favorites</h2>
          <div className="favorite-list">
            {favorites.map((meal) => (
              <div key={meal.idMeal}>
                <p>{meal.strMeal}</p>
                <button onClick={() => removeFromFavorite(meal.idMeal)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
