import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

const Banner = ({ data }) => {
  return (
    <Carousel interval={2000} wrap={true}>
      {data.map((item, index) => (
        <Carousel.Item key={index}>
          <a href={item.to}>
            <img
              className="d-block w-100"
              src={item.img}
              alt={item.title}
              style={{ height: "350px" }}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
