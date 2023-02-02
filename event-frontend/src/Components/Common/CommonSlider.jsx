import React from 'react';
import Slider from 'react-slick';


function CommonSlider({ images = [], slidesToShow = 4, className = 'slider-container' }) {


    const settingsDots = {
        dots: true,
        infinite: false,
        fade: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 1000,
    };


    return (
        <div className={className} style={{ height: 250 }}>
            <Slider {...settingsDots} >
                {
                    images.map((image, index) => (
                        <div key={index}>
                            {
                                image?.hasOwnProperty("type") ?
                                    image?.type?.includes('image') ?
                                        <img className="d-block slider-image" src={image?.image} alt={"Slide" + index} key={index} />
                                        : <video height="163" controls>
                                            <source src={image?.image} type="video/mp4"></source>

                                        </video> :
                                    <img className="d-block slider-image" src={image.image} alt={"Slide" + index} key={index} />
                            }
                        </div>
                    ))
                }

            </Slider>
        </div>
    );
}

export default CommonSlider;
