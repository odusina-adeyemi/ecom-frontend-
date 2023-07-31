import React from "react";
import css from "./Testimonial.module.css";
import Hero from "../../assets/testimonialHero.png";
import { TestimonialsData } from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  return (
    <div className={css.testimonial}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
            Seedily says he has been able to attest to the authenticity bolder
            cosmetics
          </span>
        </div>

        <img src={Hero} alt="" />
        <div className={css.container}>
          <span> 100K</span>
          <span>Happy Customers with us</span>
        
        </div>
      </div>

      <div className={css.reviews}>Reviews</div>
      <div className={css.carousel}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={css.tCarousel}
          breakpoints={{
            856:{
              slidesPerView:3
            },
            640:{
              slidesPerView:2
            },
            0: {
              slidesPerView:1
            }
          }}

        >
          {TestimonialsData.map((testimonials, i) => (
            <SwiperSlide>
              <div className={css.testimonials}>
                <img src={testimonials.image} alt="" />
                <span>{testimonials.comment}</span>
                <hr />
                <span>{testimonials.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
