import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
function Header({ onSearch }) {
  const [query, setQuery] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(query);
    }
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary header-nav">
      <Container fluid>
        <Navbar.Brand href="#">🍿Entertainment</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="search">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <input
            type="text"
            className="searchbar"
            placeholder="Search Movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <p>Found 3 results</p>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
