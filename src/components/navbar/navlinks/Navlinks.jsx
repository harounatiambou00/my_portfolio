import React from 'react';
import NavlinksItem from './navlinks_item/NavlinksItem';

import {motion} from 'framer-motion';


const navlinks = [
  {
      name: "Home",
      to : "home__section"
  },
  {
      name: "About Me",
      to : "about__me__section"
  },
  {
      name: "Skills",
      to : "skills__section"
  },
  {
      name: "Education",
      to : "education__section"
  },
  {
      name: "Portfolio",
      to : "portfolio__section"
  },
  {
      name: "Contact Me",
      to : "contact__me__section"
  },
];

const Navlinks = () => {
  return (
    <motion.div
      className='flex text-center items-center justify-center'
      initial={{y: -100}}
      animate={{y: 0}}
      transition={{duration: 1.25}}
    >
      {navlinks.map((navlink) => {
        return (
          <NavlinksItem key={navlink.name} name={navlink.name} signet={navlink.to} />
        );
      })}
    </motion.div>
  )
}

export default Navlinks