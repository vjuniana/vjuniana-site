import './AboutMe.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HtmlLogo from './html.png';
import CSSLogo from './css.png';
import JSLogo from './js.png';
import MySql from './mysql.png';
import ReactLogo from './react.png';
import JavaLogo from './java.png';
import UnityLogo from './unity.png';
import BootLogo from './bootstrap.png';
import CLogo from './c.png';
import Me from './me.jpg';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import { fadeIn } from 'react-animations'
const pulseAnimation = keyframes`${pulse}`;
const PulseDiv = styled.div`
  animation: infinite 3s ${pulseAnimation};
`;
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 10s ${FadeInAnimation};
`;
const AboutMe = () => {
    return(
      <div>
        <Container fluid="auto">
            <Row>
            
            <div className="left-box">
            <FadeInDiv>
                <div className="title-text">ABOUT ME</div>
                
                <div className="about-desc about-text-box">Hi! I'm Vena and I'm a fresh Computer Science graduate from University of Wollongong. I'm based in Singapore and currently looking for career opportunities!
                </div>
                <div className="about-desc about-text-box">You can reach me at vjuniana@gmail.com or you can connect with me through LinkedIn (click above!) </div>
                <img src= {Me} className="rounded-circle image-style"></img></FadeInDiv>
            </div>
            </Row>
            
            <div className="right-box">
            <div className="title-text-2">LANGUAGES</div>
              <Row>
                <Col>
                <PulseDiv>
                  <div className="logo-text">
                      <img src={HtmlLogo} alt= "html" />
                  HTML</div></PulseDiv></Col>
                <Col>
                <PulseDiv>
                  <div className="logo-text">
                      <img src={CSSLogo} alt= "css" />
                  CSS</div></PulseDiv></Col>
                <Col>
                <PulseDiv>
                  <div className="logo-text">
                      <img src={JSLogo} alt= "js" />
                   JavaScript</div></PulseDiv></Col>
              </Row>
              <Row>
              <Col>
              <PulseDiv>
                  <div className="logo-text">
                      <img src={ReactLogo} alt= "react" />
                  React</div></PulseDiv></Col>
              <Col>
              <PulseDiv>
                  <div className="logo-text">
                      <img src={JavaLogo} alt= "java" />
                  Java</div></PulseDiv></Col>
                  <Col>
              <PulseDiv>
                  <div className="logo-text">
                      <img src={BootLogo} alt= "bootstrap" />
                  Bootstrap</div></PulseDiv></Col>
              </Row>
              <Row>
              <Col>
              <PulseDiv>
                  <div className="logo-text">
                      <img src={UnityLogo} alt= "Unity" />
                  Unity</div></PulseDiv></Col>
              <Col>
              <PulseDiv>
                  <div className="logo-text">
                      <img src={CLogo} alt= "csharp" />
                  C#</div></PulseDiv></Col>
              <Col>
              <PulseDiv>
                  <div className="logo-text">
                      <img src={MySql} alt= "mysql" />
                  SQL</div></PulseDiv></Col>
              
              </Row>
            </div>
        </Container>
      </div>  
    );  
}

export default AboutMe;