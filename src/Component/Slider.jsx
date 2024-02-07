import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MDBRipple } from 'mdb-react-ui-kit';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const sliderImageUrl = [
    //First image url
    {
      url:
        "./Image/Slider/mua.jpg",
        heading:"Makeup"
    },
    {
      url:
        "./Image/Slider/mehndi.jpg",
        heading:"Mehandi"
    },
    //Second image url
    {
      url:
        "./Image/Slider/bridal-wear.jpg",
        heading:"bridal wear"
    },
    //Third image url
    {
      url:
        "./Image/Slider/groom-wear.jpg",
        heading:"groom wear"
    },
  
    //Fourth image url
  
    {
      url:
        "./Image/Slider/decorators.jpg",
        heading:"decoration"
    }
  ];
const slider = () => {
  return (

<div className='img'>
<Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={false}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
                <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'>
                    <img src={imageUrl.url} alt="movie" /><br/>
                </MDBRipple>
                <h4>{imageUrl.heading}</h4>
            </div>
          );
        })}
      </Carousel>
</div>
  )
}

export default slider