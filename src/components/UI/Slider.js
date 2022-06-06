import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';

export const Slider = ({
    Banners,
}) => {
    return (
        <>
           <Carousel showThumbs={false} showStatus={false} infiniteLoop>
                {Banners.map(({id, data}) => (
                <div key={id}>
                    <img src={data.main_image.url} alt={data.main_image.alt}/>
                    <p className="legend">{data.title}</p>
                </div>
                ))}
            </Carousel>
        </>
    )
}

Slider.propTypes = {
    Banners: PropTypes.array.isRequired,
}
