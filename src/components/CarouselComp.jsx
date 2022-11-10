import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import flower1 from '../images/flower1.jpg';
import flowers from '../images/flowers.png';
import neurons from '../images/neurons.jpg';

export default function CarouselComp() {
    return (
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={flower1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={flowers}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={neurons}
            alt="Third slide"
          />
        </Carousel.Item>
    </Carousel>
    )
}
