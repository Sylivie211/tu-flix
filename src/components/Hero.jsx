import { useEffect, useState } from "react";
import "./Hero.css";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/w1280";

function Hero() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadMovie() {
      try {
        const response = await fetch(
          `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
        );
        if (!response.ok) {
          throw new Error(`Request failed with status:${response.status}`);
        }
        const data = await response.json();

        setMovie(data.results[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadMovie();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong:{error}</p>;

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${BACKDROP_BASE_URL}${movie.backdrop_path})`,
      }}
    >
      <div className="hero-content">
        <h2 className="hero-title">{movie.title}</h2>
        <p className="hero-overview">{movie.overview}</p>
      </div>
    </section>
  );
}

export default Hero;
