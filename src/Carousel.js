import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle'; // Import Swiper bundle
import 'swiper/css/bundle';

function Carousel() {
  useEffect(() => {
    // Initialize Swiper after the component is mounted
    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 2,
      speed: 600,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },
      breakpoints: {
        // Define responsive breakpoints here
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        // Add more breakpoints as needed
      },
    });
  }, []);// Empty dependency array ensures that the effect runs once after mount

  return (
    <>
      <div className="max-w-[1350px] flex justify-center py-5 text-center mx-auto">
        <div className="basis-[100%]  text-[#fc3b00]">
          <h1 className="font-extrabold" style={{ fontSize: "11vh" }}>
            TRANSFORM{' '}
            <span style={{ WebkitTextStroke: '1px #fc3b00', color: 'transparent' }}>
              YOUR BODY <br></br> TRANSFORM YOUR
            </span>{' '}
            LIFE
          </h1>
        </div>
      </div>

      <div
        className="swiper-container main-carousel-body mb-10"
        style={{
          background: "#ffffff",
          margin: "0",
          height: "70vh",
          overflowX:"hidden"
        }}
      >
        <div className="swiper-wrapper">
          {/* Add your swiper slides here */}
          <div
            className="swiper-slide"
            style={{
              backgroundImage: `url('https://i.pinimg.com/564x/db/a2/e4/dba2e4adbc3d510b2c52ab6a385e57f5.jpg')`,
            }}
          ></div>

            <div
            className="swiper-slide"
            style={{
              backgroundImage: `url('https://i.pinimg.com/564x/0d/12/c8/0d12c8df3a7c05bbfe552fd3fdfa8f6c.jpg')`,
            }}
          ></div>

            <div
            className="swiper-slide"
            style={{
              backgroundImage: `url('https://i.pinimg.com/564x/47/90/7d/47907d6090bd8c3d00eb074fbdde9175.jpg')`,
            }}
          ></div>

            <div
            className="swiper-slide"
            style={{
              backgroundImage: `url('https://i.pinimg.com/564x/cc/0d/e3/cc0de362cf86d0a3723e20e9f08dea82.jpg')`,
            }}
          ></div>

            <div
            className="swiper-slide"
            style={{
              backgroundImage: `url('https://i.pinimg.com/564x/b0/34/26/b0342613dbe62fc3a8fc7f5c7368aa80.jpg')`,
            }}
          ></div>

            <div
            className="swiper-slide"
            style={{
              backgroundImage: `url('https://i.pinimg.com/564x/ae/cb/c8/aecbc8749c28271bd421380f6b882a4a.jpg')`,
            }}
          ></div>
          <div
            className="swiper-slide"
            style={{
              backgroundImage: `url('https://i.pinimg.com/564x/a7/c6/1f/a7c61f845fb72670b743eb6e045b1976.jpg')`,
            }}
          ></div>
          {/* Add other slides similarly */}
        </div>

        {/* Add Pagination */}
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
}

export default Carousel;
