"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import 'swiper/css';

const partners = [
  "/images/partners/1.png",
  "/images/partners/2.png",
  "/images/partners/3.png",
  "/images/partners/4.png",
  "/images/partners/5.png",
  "/images/partners/6.png",
  "/images/partners/7.png",
  "/images/partners/8.png",
  "/images/partners/9.png",
  "/images/partners/10.png",
  "/images/partners/11.png",
  "/images/partners/12.png",
  "/images/partners/13.png",
  "/images/partners/14.png",
  "/images/partners/15.png",
  "/images/partners/16.png",
];

const partnerSubset = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
];

const PartnerSlider = () => {
  const subsetPartners = partners.filter((_, index) => partnerSubset.includes(index));
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    setShowSlider(true);
  }, []);

  return (
    <div className="partner-slider">
      <h1 className="slider-heading">Our Clients</h1>
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
          {subsetPartners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="partner_item">
                <div className="logo_container">
                  <Image
                    height={60} 
                    width={100}
                    src={partner}
                    alt={`Partner ${index}`}
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
  .partner-slider {
    text-align: center;
    margin-bottom: 0px;
  }
  .slider-heading {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 40px;
    color: #333;
  }
  .partner_item {
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

export default PartnerSlider; 