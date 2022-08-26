import React from 'react';
import NavlinksItem from './navlinks_item/NavlinksItem';

import {motion} from 'framer-motion';

const navlinks = [
  {
      name: "home_link",
      to : "home__section"
  },
  {
      name: "about_me_link",
      to : "about__me__section"
  },
  {
      name: "skills_link",
      to : "skills__section"
  },
  {
      name: "education_link",
      to : "education__section"
  },
  {
      name: "portfolio_link",
      to : "portfolio__section"
  },
  {
      name: "contact_us_link",
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