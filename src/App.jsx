import "./App.css";
import Navbar from "./components/Navbar";
import Row from "./components/Row";

function App() {
  return (
    <div>
      <Navbar />
      <Row title="Trending Now" endpoint="/trending/movie/day" />
      <Row title="Popular" endpoint="/movie/popular" />
      <Row title="Top Rated" endpoint="/movie/top_rated" />
    </div>
  );
}
export default App;
