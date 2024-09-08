import { Col } from "react-bootstrap";
import Movie from "./Card";
function FilteredMovieList({ movies, searchQuery }) {
  if (!searchQuery) {
    return (
      <Col className="movies movie-list">
        <p>Search your favourite movies</p>
      </Col>
    );
  }
  return (
    <Col className="movies movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
      ) : (
        <p>No movies matched your search.</p>
      )}
    </Col>
  );
}

export default FilteredMovieList;
