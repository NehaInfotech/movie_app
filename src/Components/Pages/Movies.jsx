import React, { useEffect, useRef } from 'react';
import { Container } from '@mui/material';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';

function Movies() {
  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        autoScroll: {
          speed: -1,
        },
      });
      splide.mount({ AutoScroll });
    }
  }, []);

  return (
    <Container>
      <div className="splide" ref={splideRef}>
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">Movie 1</li>
            <li className="splide__slide">Movie 2</li>
            <li className="splide__slide">Movie 3</li>
            {/* Add more slides as needed */}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Movies;
