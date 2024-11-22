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
    <section className="home11-funfact bdrs12 mx-auto maxw1700" style={{ backgroundColor: '#808080' }}>
      <div className="container" style={{ width: '100%', height: '80px', paddingTop: '0px', marginTop: '-70px' }}> {/* Adjust paddingTop here */}
        <div className="row" style={{ height: '100%' }}> {/* Set row height to match container */}
          <div className="col-xl-10 mx-auto" style={{ height: '100%' }}>
            {/* Partner Slider Section */}
            <div className="partner-slider mt-5" style={{ height: '100%' }}>
              <h1 className="slider-heading text-center" style={{ marginBottom: '40px' }}>Our Clients</h1>
              {showSlider && (
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={20}  // Adjust space between slides
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFunFact11;
