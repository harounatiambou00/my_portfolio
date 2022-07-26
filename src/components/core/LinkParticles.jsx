import React, {useContext} from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";


const LinkParticles = () => {
    //Initializing tsParticles
    const particlesInit = async (main) => {
      console.log(main);
  
      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(main);
    };
  
    const particlesLoaded = (container) => {
      console.log(container);
    };
    const {isDarkTheme} = useContext(ThemeContext)
  return (
    <Particles
      className='max-h-screen'
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "inherit",
          },
        },
        fpsLimit: 500,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 50,
              duration: 0.6,
            },
          },
        },
        particles: {
          color: {
            value: isDarkTheme? '#EEEEEE' : '#121212',
          },
          links: {
            color: isDarkTheme? "#EEEEEE": "#000000",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width:0.25,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 20,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default LinkParticles