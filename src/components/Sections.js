import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import "../styles/Sections.css";
import FilteredMovieList from "./FilteredMovieList";
import WatchedMovieList from "./WatchedMovieList";

function Sections({ movies, searchQuery }) {
  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <Container className="main-content">
      <Row className="main">
        <FilteredMovieList
          movies={filteredMovies}
          searchQuery={searchQuery}
        ></FilteredMovieList>
        <WatchedMovieList></WatchedMovieList>
      </Row>
    </Container>
  );
}

export default Sections;
