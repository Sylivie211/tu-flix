const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  return (
    <li>
      {movie.poster_path && (
        <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
      )}
      <p>{movie.title}</p>
    </li>
  );
}

export default MovieCard;
