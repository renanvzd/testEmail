import styled from 'styled-components';


export const Container = styled.div`
  
  div {
    padding-top: 1.4rem;
  }

  .carousel .thumb {
    display: none;
  }
  .carousel .thumbs-wrapper {
    display: none;
  }

  .carouesl.carouesl-slider.control-arrow {
    padding-top: 0px;
  }

  .control-arrow {
    display: none;
  }

  @media (max-width: 400px) {
    .containerCarousel {
      img {
        height: 150px;
      }
    }
  }
`
