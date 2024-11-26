"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
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

const OurFunFact11 = () => {
  const subsetPartners = partners.filter((_, index) => partnerSubset.includes(index));
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    setShowSlider(true);
  }, []);

  return (
    <section
      className="home11-funfact mx-auto maxw1700"
      style={{
        backgroundColor: '#808080',
        width: '98%',
        padding: '20px 0',
        borderRadius: '12px', // Added rounded corners
        overflow: 'hidden', // Ensures content respects rounded corners
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        <div className="row">
          <div className="col-12">
            <div className="partner-slider mt-4">
              <h1
                className="slider-heading text-center"
                style={{
                  marginBottom: '30px',
                  fontSize: '30px',
                  fontWeight: 'bold', // Title in bold
                  color: '#000', // Title in black
                }}
              >
                Our Clients
              </h1>
              {showSlider && (
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={15}
                  slidesPerView={6}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 10 },
                    480: { slidesPerView: 3, spaceBetween: 10 },
                    640: { slidesPerView: 4, spaceBetween: 15 },
                    768: { slidesPerView: 5, spaceBetween: 15 },
                    1024: { slidesPerView: 6, spaceBetween: 20 },
                  }}
                  className="swiper-container"
                  speed={1000}
                >
                  {subsetPartners.map((partner, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={partner}
                        alt={`Partner ${index}`}
                        width={120} // Dynamically sized for better scaling
                        height={80} // Dynamically sized for better scaling
                        style={{
                          objectFit: 'contain',
                          margin: 'auto',
                        }}
                        quality={100}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFunFact11;
