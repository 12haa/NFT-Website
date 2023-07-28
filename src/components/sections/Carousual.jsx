
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import { EffectCards } from "swiper/modules";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import img from "../../assets/Nfts/bighead.svg";

// import img2 from "../../assets/Nfts/bighead.svg";
import img2 from "../../assets/Nfts/bighead-2.svg";
import img3 from "../../assets/Nfts/bighead-3.svg";
import img4 from "../../assets/Nfts/bighead-4.svg";
import img5 from "../../assets/Nfts/bighead-5.svg";
import img6 from "../../assets/Nfts/bighead-6.svg";
import img7 from "../../assets/Nfts/bighead-7.svg";
import img8 from "../../assets/Nfts/bighead-8.svg";
import img9 from "../../assets/Nfts/bighead-9.svg";
import img10 from "../../assets/Nfts/bighead-10.svg";
// import img from "../../assets/Nfts/bighead-2.svg";
const Container = styled.section`
  width: 25vw;
  height: 70vh;

  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-color: ${(props) => props.theme.carouselColor};
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .swiper-pagination {
    color: black;
    font-size: 18px;
    font-weight: 200;
  }

  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
  }
`;
const Corousual = () => {
    return (
        <Container>
            <Swiper
                autoplay={{
                    delay: 1800,
                    disableOnInteraction: false,
                }}
                pagination={{ type: "fraction" }}
                navigation={true}
                scrollbar={{ draggable: true }}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    {" "}
                    <img src={img} alt="image" />{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <img src={img2} alt="image" />{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <img src={img3} alt="image" />{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <img src={img4} alt="image" />{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <img src={img5} alt="image" />{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <img src={img6} alt="image" />{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <img src={img7} alt="image" />{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <img src={img8} alt="image" />{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <img src={img9} alt="image" />{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <img src={img10} alt="image" />{" "}
                </SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default Corousual;
