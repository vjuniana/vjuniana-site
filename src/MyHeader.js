import "./MyHeader.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Typical from "react-typical";

const myHeader = () => {
  return (
    <div>
      <Container fluid="auto" className="bg-col">
        <div className="header">
          <Typical
            steps={["hello,", 500, "hello, world.", 1000]}
            loop={1}
            wrapper="b"
          />
        </div>
        
        <div className="subHeader">I'm Vena</div>
        <div className="subHeader">I code things</div>
      </Container>
      <Navbar className="navbar-nav justify-content-center" expand="lg">
        <Nav>
          <Nav.Link href="https://www.linkedin.com/in/vena-juniana-149308147/" target="_blank">
            <div className="subHeader-2">&#10100;LinkedIn&#10101;</div>
          </Nav.Link>
          <Nav.Link href="mailto:vjuniana@gmail.com" target="_blank">
            <div className="subHeader-2">&#10100;Email&#10101;</div>
          </Nav.Link>
          <Nav.Link href="https://docs.google.com/document/d/1VPp7OGWIu4ggaz8NkgujOljvWGqRvtjk/edit?usp=sharing&ouid=108136591760326795803&rtpof=true&sd=true" target="_blank">
            <div className="subHeader-2">&#10100;Resume&#10101;</div>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
export default myHeader;
