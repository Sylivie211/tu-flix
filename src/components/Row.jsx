import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./Row.css";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

function Row({ title, endpoint }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMovies() {
      try {
        const response = await fetch(
          `${BASE_URL}${endpoint}?api_key=${API_KEY}`,
        );
        if (!response.ok) {
          throw new Error(`Request failed with status:${response.status}`);
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadMovies();
  }, [endpoint]);

  if (loading) return <p>Loading{title}</p>;
  if (error) return <p>Something went wrong:{error}</p>;

  return (
    <div>
      <section className="row">
        <h2 className="row-title">{title}</h2>
        <ul className="row-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Row;
