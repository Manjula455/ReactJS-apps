import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [reciepe, setReciepe] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchReciepe = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
      setReciepe(data.meals || []);
    } catch (error) {
      console.error(`Reciepe not found`, error);
    }
    setLoading(false);
  };

  return (
    <div class="relative">
      {/* <form class="max-w-md mx-auto">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            value={query}
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for reciepe..."
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={searchReciepe}
          >
            Search
          </button>
          {loading ? (
            <p>Loading...</p>
          ) : reciepe.length === 0 ? (
            <p>No reciepe found</p>
          ) : (
            <div>
              {reciepe.map((meal) => (
                <ul
                  key={meal.idMeal}
                  className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
                >
                  <li>{meal.strMeal}</li>
                  <li>
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      width={200}
                    />
                  </li>
                  <li>
                    {meal.strArea} | {meal.strCategory}
                  </li>
                  <li>
                    {" "}
                    <a href={meal.strYoutube} target="_blank" rel="noreferrer">
                      Watch Video
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          )}
        </div>
      </form> */}

      <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Reciepe Finder
      </h1>
      <input
        type="text"
        value={query}
        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search for reciepe..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={searchReciepe}
      >
        Search Reciepe
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : reciepe.length === 0 ? (
        <p>No reciepe found</p>
      ) : (
        <div>
          {reciepe.map((meal) => (
            <ul key={meal.idMeal}>
              <li>{meal.strMeal}</li>
              <li>
                <img src={meal.strMealThumb} alt={meal.strMeal} width={200} />
              </li>
              <li>
                {meal.strArea} | {meal.strCategory}
              </li>
              <li>
                {" "}
                <a href={meal.strYoutube} target="_blank" rel="noreferrer">
                  Watch Video
                </a>
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
