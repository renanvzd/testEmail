import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from './styles'


export function Banner() {
  return (
    <Container>
      <div>
      <Carousel autoPlay infiniteLoop transitionTime={1500} interval={5000} >
        <div className="containerCarousel">
          <img alt="" src="https://i.imgur.com/Gh5mBuO.png" />
        </div>
        <div className="containerCarousel">
          <img alt="" src="https://i.imgur.com/Gh5mBuO.png" />
        </div>
      </Carousel>
      </div>
    </Container>   
  )
}