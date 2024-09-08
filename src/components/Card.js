import { Card } from "react-bootstrap";
import "../styles/card.css";
function Movie({ movie }) {
  return (
    <>
      <Card className="movie-card">
        <Card.Img className="movie-image" variant="left" src={movie.Poster} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>📆 {movie.Year}</Card.Text>
        </Card.Body>
      </Card>
      <br></br>
    </>
  );
}

export default Movie;
