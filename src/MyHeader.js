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
          <Nav.Link href="https://drive.google.com/file/d/1M9tbHZmMY2qg7pmu6HUzADySvOEt5qgH/view?usp=sharing" target="_blank">
            <div className="subHeader-2">&#10100;Resume&#10101;</div>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
export default myHeader;
