import "./ShowCase.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Container from 'react-bootstrap/Container';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import Pic1 from "./pic1.png";
import Pic2 from "./pic2.png";
import Pic3 from "./pic3.png";
import Pic4 from "./pic4.png";
import Pic5 from "./pic5.png";
import Pic6 from "./pic6.png";
import Pic7 from "./pic7.png";
import Pic8 from "./pic8.png";
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDivTitle = styled.div`
  animation: 5s ${FadeInAnimation};
`;
const FadeInDiv = styled.div`
  animation: 6s ${FadeInAnimation};
`;
const fadeImages = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8];
const fadeProperties = {
    autoplay: true,
    duration: 4000
}
const ShowCase = () => {
  return (
    <div>
    <Container fluid="auto">
      <div className="showcase-box">
       
        <FadeInDivTitle><div className="title-text-show">FYP SHOWCASE</div></FadeInDivTitle>
        <FadeInDiv>
        <Fade {...fadeProperties}>
          <div className="each-fade">
            <img src={fadeImages[0]} className="image-style-show responsive" />
          </div>
          <div className="each-fade">
            <img src={fadeImages[1]} className="image-style-show" />
          </div>
          <div className="each-fade">
            <img src={fadeImages[2]} className="image-style-show" />
          </div>
          <div className="each-fade">
            <img src={fadeImages[3]} className="image-style-show" />
          </div>
          <div className="each-fade">
            <img src={fadeImages[4]} className="image-style-show" />
          </div>
          <div className="each-fade">
            <img src={fadeImages[5]} className="image-style-show" />
          </div>
          <div className="each-fade">
            <img src={fadeImages[6]} className="image-style-show" />
          </div>
          <div className="each-fade">
            <img src={fadeImages[7]} className="image-style-show" />
          </div>
        </Fade>
        <div
          style={{
            borderTop: "1px solid #000000 ",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
          }}
        ></div>
        <div className="desc-text-show">Non-Entity is a Final Year Project done by a group of 5 students from University of Wollongong, developed with Unity Game Engine using C# as the preferred language.
        It is a first-person-view PC game with Sci-Fi theme that has a storyline and puzzle mechanics.</div>
        </FadeInDiv>
      </div>
      </Container>
    </div>
  );
};

export default ShowCase;
