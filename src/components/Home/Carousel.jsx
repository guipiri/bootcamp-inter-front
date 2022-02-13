import React from 'react';
import {Carousel} from 'react-bootstrap'
import img1 from '../../img/cxSom1.jpg';
import img2 from '../../img/cxSom2.jpeg';
import img3 from '../../img/cxSom3.jpeg';

function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Caixas potentes</h3>
          <p>Ideais para festivais e festas com grandes públicos...</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <p style={{color: 'black', fontWeight:'bold', fontSize:'30px'}}>Caixas perfeitas para seu carro...</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>E para sua casa também</h3>
          <p>Caixas amplificadas da melhor qualidade adaptadas para ambientes menores.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;

