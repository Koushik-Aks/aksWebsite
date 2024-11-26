"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Navigation, Pagination } from "swiper";

import { testimonial } from "@/data/project";
import Image from "next/image";
import { useState } from "react";

export default function Testimonial1() {
  const [getCurrentTestimonial, setCurrentTestimonial] = useState(
    testimonial[2]
  );

  const testimonialHandler = (data) => {
    setCurrentTestimonial(data);
  };

  return (
    <>
      <style jsx>{`
        .testi-text {
          overflow: visible; /* Ensures the text is not clipped */
          white-space: normal; /* Prevents text from breaking unnecessarily */
          word-wrap: break-word; /* Prevents text from overflowing */
          padding-right: 5px; /* Prevents clipping on the right */
          margin-top: px; /* Adjust space above the text */
        }

        .testimonial-style2 {
          min-height: 150px; /* Ensure enough height for the content */
          margin-bottom: 5px; /* Reduce space between testimonial content */
        }

        .testi-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 5px 5px; /* Adjust padding to reduce space */
        }

        .testi-content h4 {
          margin-bottom: 5px; /* Reduce space below the title */
          font-weight: normal; /* Remove bold effect from the title */
        }

        .testi-content h6 {
          margin-top: 7px; /* Adjust space above the name */
          margin-bottom: 5px; /* Adjust space below the name */
        }

        .testi-content p {
          margin-top: 5px; /* Adjust space above the company name */
        }

        .row {
          margin-bottom: -60px; /* Reduce space between rows */
        }

        /* Adjust space between swiper controls and content */
        .swiper__btn {
          margin: 0 5px;
        }
      `}</style>

      <section className="our-testimonial">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 mx-auto wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-title text-center">
                <h2>Testimonials</h2>
                <p className="paragraph">
                  {/* You can add descriptive text here */}
                </p>
              </div>
            </div>
          </div>

          {/* Swiper Navigation & Pagination */}
          <div className="row align-items-center mb-4">
            <div className="col-auto ms-auto d-none d-lg-flex">
              <button className="swiper__btn btn__prev__testimonials">
                <i className="far fa-arrow-left-long" />
              </button>
              <div className="swiper__pagination swiper__pagination__testimonials mx-2"></div>
              <button className="swiper__btn btn__next__testimonials">
                <i className="far fa-arrow-right-long" />
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 m-auto wow fadeInUp" data-wow-delay="500ms">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={{
                  prevEl: ".btn__prev__testimonials",
                  nextEl: ".btn__next__testimonials",
                }}
                pagination={{
                  el: ".swiper__pagination__testimonials",
                  clickable: true,
                }}
                modules={[Navigation, Pagination]}
              >
                {testimonial.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="testimonial-style2">
                      <div className="testi-content text-md-center">
                        <span className="icon fas fa-quote-left" />
                        <h4 className="testi-text">{item.title}</h4>
                        <h6 className="name">{item.name}</h6>
                        <p className="design">{item.company}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}