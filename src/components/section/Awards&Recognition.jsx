"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import 'swiper/css';

const awards = [
  "/images/awards/1.png",
  "/images/awards/2.png",
  "/images/awards/3.png",
  "/images/awards/4.png",
  "/images/awards/5.png",
  "/images/awards/6.jpg",
  "/images/awards/7.png",
];

const AwardsSlider = () => {
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    setShowSlider(true);
  }, []);

  return (
    <div className="awards-slider">
      <h1 className="slider-heading">Awards & Recognitions</h1>
      {showSlider && (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={1}
          slidesPerView={6}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
          className="swiper-container"
          speed={1000}
        >
          {awards.map((award, index) => (
            <SwiperSlide key={index}>
              <div className="award_item">
                <div className="logo_container">
                  <Image
                    height={60} 
                    width={100}
                    src={award}
                    alt={`Award ${index}`}
                    className="logo_image"
                    quality={100}
                    layout="intrinsic"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <style jsx>{`
        .awards-slider {
          text-align: center;
          margin-bottom: 0px;
        }
        .slider-heading {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 40px;
          color: #333;
        }
        .award_item {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px;  // Adjust height as needed to fit images better
          padding: 8px;
        }
        .logo_container {
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          width: 100px;  // Fixed width for consistency
          height: auto;  // Allow height to adjust automatically
        }
        .logo_image {
          object-fit: contain;  // Ensures the image is scaled to fit without cropping
          width: 100%;          // Makes the image width scale to container
          height: 100%;         // Makes the image height scale to container
        }
      `}</style>
    </div>
  );
};

export default AwardsSlider;
