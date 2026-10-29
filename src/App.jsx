import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
/* const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"; */

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMovies() {
      try {
        const response = await fetch(
          `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
        );
        if (!response.ok) {
          throw new Error(`Request failed with status:${response.status}`);
        } else {
          const data = await response.json();
          console.log(data);
          setMovies(data.results);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadMovies();
  }, []);

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Something went wrong:{error}</p>;

  return (
    <div>
      <h1>Tu-Flix</h1>
      <ul>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default App;
