import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [reciepe, setReciepe] = useState([]);
  const [loading, setLoading] = useState(false);

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
          {reciepe.map((meal) => (
            <div key={meal.idMeal}>
              <h1>{meal.strMeal}</h1>
              <img src={meal.strMealThumb} alt={meal.strMeal} width={200} />
              <p>
                {meal.strArea}| {meal.strCategory}
              </p>
              <a href={meal.strYoutube} target="_blank" rel="noreferrer">
                Watch Video
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
