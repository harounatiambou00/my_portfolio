import React, {useContext} from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';

import i18next from 'i18next';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import required modules
import { EffectCards, Pagination, Navigation } from "swiper";

import './styles.css';

import { projects } from '../../../data/portfolio-projects/portfolio-projects';

import {IconButton, Button} from '@mui/material';

import {BsGithub} from 'react-icons/bs';
import { HiExternalLink } from 'react-icons/hi';
import {AiFillStar} from 'react-icons/ai';
import {FaCodeBranch} from 'react-icons/fa';


const ProjectsSwiper = () => {
    const {isDarkTheme} = useContext(ThemeContext);

  return (
    <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Pagination, Navigation]}
          navigation
          pagination={{ clickable: true }}
          className="mySwiper h-full w-full"
    >
          {
            projects.map((project) => {
                return(
                    <SwiperSlide
                        className='rounded-md bg-white dark:bg-darkElevation text-dark dark:text-light'
                    >
                       <div
                        className='flex sm:flex-col lg:flex-row w-full h-full p-0'
                       >
                            <img 
                                src={project.image}
                                alt={project.title}
                                className='sm:w-full lg:w-2/4 sm:h-3/6 lg:h-full m-0 p-0'
                            /> 
                            <div
                                className='sm:w-full lg:w-3/4 p-5 font-kanit sm:mr-10 lg:mr-0'
                            >
                                    <div>
                                        <h1
                                            className='text-teal font-righteous'
                                        >
                                            <span
                                                className='text-2xl font-righteous'
                                            >
                                                {projects.indexOf(project)+1}.
                                            </span>
                                            &nbsp;
                                            {project.title}
                                        </h1>
                                        <p
                                            className='font-light text-sm '
                                        >
                                            {i18next.language === "fr"? project.description.fr : project.description.en}
                                        </p>
                                    </div>

                                    <div
                                        className='grid grid-cols-3 gap-1 sm:mr-10 lg:mr-0 mt-4'
                                    >
                                    {
                                        project.techologies.map((technology) => {
                                            return (
                                                <div
                                                    className='border-2 border-light rounded-full p-1 text-xs font-light'
                                                >
                                                    <IconButton
                                                        color={technology.color}
                                                        size='small'
                                                    >
                                                        {technology.icon}
                                                    </IconButton>
                                                    {technology.title}
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                                <div
                                    className='flex items-center justify-center sm:mt-5 lg:mt-10'
                                >
                                    <Button
                                        startIcon={<BsGithub />}
                                        variant='contained'
                                        color='githubLogoColor'
                                        className='mr-5 text-light font-kanit'
                                        href={project.github}
                                    >
                                        
                                        Github
                                    </Button>
                                    <Button
                                        startIcon={<HiExternalLink />}
                                        variant='outlined'
                                        color='light'
                                        className='ml-5 font-kanit'
                                    >
                                            Visit
                                    </Button>
                                </div>
                                <div
                                    className='flex items-center justify-center sm:mt-5 lg:mt-5'
                                >
                                    <IconButton
                                        color={isDarkTheme? 'light':'primary'}
                                        className=''
                                    >
                                        <FaCodeBranch />
                                        <span
                                            className='text-sm text-dark dark:text-light font-righteous'
                                        >
                                            {project.numberOfBranches}
                                        </span>
                                    </IconButton>
                                    <IconButton
                                        color='warning'
                                    >
                                        <AiFillStar />
                                        <span
                                            className='text-sm text-dark dark:text-light font-righteous'
                                        >
                                            {project.numberOfLikes}
                                        </span>
                                    </IconButton>
                                </div>
                            </div>
                       </div>
                    </SwiperSlide>
                );
            })
          }
    </Swiper>
  )
}

export default ProjectsSwiper