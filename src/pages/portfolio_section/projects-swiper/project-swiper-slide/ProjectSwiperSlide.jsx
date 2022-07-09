import React from 'react';

import { SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { Chip } from '@mui/material';

import '../styles.css';

const ProjectSwiperSlide = ({title, description, image, technologies, bgColor, color}) => {
  return (
    <SwiperSlide
        className='flex'
    >
        <div
            className='flex'
        >
            <img 
                src={image}
                alt='img'
            />
            <h1>{title}</h1>
            <p>
                {description}
            </p>
            {
                technologies.map((technology) => {
                    return (
                        <Chip 
                            icon={technology.icon}
                            label={technology.title}
                            variant='outlined'
                        />
                    );
                })
            }
        </div>
    </SwiperSlide>
  )
}

export default ProjectSwiperSlide