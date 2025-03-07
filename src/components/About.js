import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Gridimg from './Gridimg';
import { Fade } from 'react-awesome-reveal';
import { FaRocket, FaBullseye, FaChartLine } from 'react-icons/fa';

import logoLinealIcon from '../images/logo-lineal-icon.png';

const imagePaths = [  
  require('../images/img-11.jpg'),
  require('../images/img-07.jpg'),
];

export default function About() {
  return (
    <section className="about">
      <Container>
        <Row>
          <Col>
            <Fade cascade triggerOnce direction="left">
            <div className="about__header">
              <div className="about__header__content">
                {/* <h3 className="text--subtitle text-center text-uppercase"><em>Who Are <span className="lighted lighted--secondary">We?</span></em></h3> */}
                <img src={logoLinealIcon} alt="Blueprint Strategies" className="image__logo-about"/>
                <p className='text--body text-center'>
                  <strong>Blueprint Strategies</strong> is a forward-thinking agency leveraging AI to help businesses grow faster and smarter. Our mission is to provide not just leads but <strong>real opportunities for success.</strong>
                </p>
              </div>
            </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    
      <Gridimg 
          imagePaths = {imagePaths}
      />
      <Container>
        <Row>
          <Col>
              <Fade triggerOnce>
                <div className='headercontent__content'>
                  <h3 className="text--subtitle text-center text-uppercase"><em>What Makes Us <span className="lighted lighted--secondary">Different</span></em></h3>
                </div>
                <div className="about__content">
                  <ul className="boxes">
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaRocket size={75}/>
                      </div>
                      <h4 className="text--lead boxes__title">1. AI-Driven Precision</h4>
                      <p className='text--body boxes__content'>Automated processes for faster, more accurate results.</p>
                    </li>
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaBullseye size={75}/>
                      </div>
                      <h4 className="text--lead boxes__title">2. Custom Solutions</h4>
                      <p className='text--body boxes__content'>Every campaign is tailored to your specific goals.</p>
                    </li>
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaChartLine size={75}/>
                      </div>
                      <h4 className="text--lead boxes__title">3. Measurable Success</h4>
                      <p className='text--body boxes__content'>Transparent reporting to track your ROI.</p>
                    </li>
                  </ul>
                </div>
                <div className="about__content text-center">
                  <a className="btn btn--secondary" target="__blank" href="mailto:blueprintstrategiesagency@gmail.com">Let's work togueter</a>
                </div>
              </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
