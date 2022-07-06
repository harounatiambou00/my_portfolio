import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';
import {SiJavascript, SiTailwindcss, SiMaterialui, SiRedux, SiTypescript} from 'react-icons/si';
import { FaReact, FaBootstrap } from 'react-icons/fa';

export const frontendSkills = [
    {
        title: 'HTML5',
        percentage: 90,
        icon: <AiFillHtml5 />,
        color: 'htmlLogoColor',
    },
    {
        title: 'CSS3',
        percentage: 90,
        icon: <DiCss3 />,
        color: 'cssLogoColor',
    },
    {
        title: 'JavaScript',
        percentage: 60,
        icon: <SiJavascript />,
        color: 'javascriptLogoColor',
    },
    {
        title: 'React JS',
        percentage: 80,
        icon: <FaReact />,
        color: 'reactLogoColor',
    },
    {
        title: 'Tailwind Css',
        percentage: 50,
        icon: <SiTailwindcss />,
        color: 'tailwindLogoColor',
    },
    {
        title: 'Material UI',
        percentage: 90,
        icon: <SiMaterialui />,
        color: 'muiLogoColor',
    },
    {
        title: 'BootStrap',
        percentage: 90,
        icon: <FaBootstrap />,
        color: 'bootstrapLogoColor',
    },
    {
        title: 'Redux',
        percentage: 20,
        icon: <SiRedux />,
        color: 'reduxLogoColor',
    },
    {
        title: 'TypeScript',
        percentage: 20,
        icon: <SiTypescript />,
        color: 'typescriptLogoColor',
    },
];