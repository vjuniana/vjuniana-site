import './MyHeader.css';
import Container from "react-bootstrap/Container";
import Typical from 'react-typical';

const MyFooter = () => {
    return(
      <div>
          <Container fluid="auto" className="footer">
              <div className="subHeader">&copy; Vena Juniana</div>
          </Container>
      </div>  
    );
}
export default MyFooter;