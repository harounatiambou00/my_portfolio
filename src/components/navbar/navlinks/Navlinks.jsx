import React from 'react';
import NavlinksItem from './navlinks_item/NavlinksItem';


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
    <div
      className='flex text-center items-center justify-center'
    >
      {navlinks.map((navlink) => {
        return (
          <NavlinksItem key={navlink.name} name={navlink.name} signet={navlink.to} />
        );
      })}
    </div>
  )
}

export default Navlinks