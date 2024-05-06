import Carousel from "react-bootstrap/Carousel";
import firstImg from "../assets/1.jpeg";
import secondImg from "../assets/2.jpeg";
import thirdImg from "../assets/3.jpeg";
export default function ImgSlider() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={firstImg} alt="firstImg" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={secondImg} alt="secondImg" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={thirdImg} alt="thirdImg" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
