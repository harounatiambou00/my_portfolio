import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';
import {SiJavascript, SiLaravel, SiTailwindcss, SiDotnet, SiMaterialui, SiMicrosoftsqlserver, SiJsonwebtokens} from 'react-icons/si';
import { FaReact, FaBootstrap } from 'react-icons/fa';

import EIlimi from '../../assets/images/projects/e-ilimi.png';
import PersonalWebsite from '../../assets/images/projects/personal-website.png';
import Tiamshop from '../../assets/images/projects/tiamshop.png';
import Infoschool from '../../assets/images/projects/infoschool.png';



export const projects = [
    {
        title: 'E-ILIMI',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: EIlimi,
        techologies: [
            {
                title: 'HTML5',
                icon: <AiFillHtml5 />,
                color: 'htmlLogoColor',
            },
            {
                title: 'CSS3',
                icon: <DiCss3 />,
                color: 'cssLogoColor',
            },
            {
                title: 'JavaScript',
                icon: <SiJavascript />,
                color: 'javascriptLogoColor',
            },
            {
                title: 'React JS',
                icon: <FaReact />,
                color: 'reactLogoColor',
            },
            {
                title: 'Mui',
                icon: <SiMaterialui />,
                color: 'muiLogoColor',
            },
            {
                title: '.NET',
                icon: <SiDotnet />,
                color: 'dotNetLogoColor',
            },
            {
                title: 'SQL SERVER',
                icon: <SiMicrosoftsqlserver />,
                color: 'sqlServerLogoColor',
            },
            {
                title: 'JWT',
                icon: <SiJsonwebtokens />,
                color: 'jwtLogoColor',
            },
        ],
        bgColor: 'teal',
        color: '',
        github: 'https://github.com/harounatiambou00/E-ILIMI/tree/Development',
        url: '',
        numberOfBranches: 12,
        numberOfLikes: 15,
    },
    {
        title: 'Portfolio Website',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: PersonalWebsite,
        techologies: [
            {
                title: 'HTML5',
                icon: <AiFillHtml5 />,
                color: 'htmlLogoColor',
            },
            {
                title: 'CSS3',
                icon: <DiCss3 />,
                color: 'cssLogoColor',
            },
            {
                title: 'JS',
                icon: <SiJavascript />,
                color: 'javascriptLogoColor',
            },
            {
                title: 'React JS',
                icon: <FaReact />,
                color: 'reactLogoColor',
            },
            {
                title: 'Mui',
                icon: <SiMaterialui />,
                color: 'muiLogoColor',
            },
            {
                title: 'Tailwind Css',
                percentage: 50,
                icon: <SiTailwindcss />,
                color: 'tailwindLogoColor',
            },
        ], 
        bgColor: 'personaWebSiteBgColor',
        color: '',
        github: 'https://github.com/harounatiambou00/my_portfolio/tree/development2',
        url: '',
        numberOfBranches: 5,
        numberOfLikes: 10,
    },
    {
        title: 'TiamShop',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text \n ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: Tiamshop,
        techologies: [
            {
                title: 'HTML5',
                icon: <AiFillHtml5 />,
                color: 'htmlLogoColor',
            },
            {
                title: 'CSS3',
                icon: <DiCss3 />,
                color: 'cssLogoColor',
            },
            {
                title: 'JS',
                icon: <SiJavascript />,
                color: 'javascriptLogoColor',
            },
            {
                title: 'React JS',
                icon: <FaReact />,
                color: 'reactLogoColor',
            },
            {
                title: 'Mui',
                icon: <SiMaterialui />,
                color: 'muiLogoColor',
            },
            {
                title: '.NET',
                icon: <SiDotnet />,
                color: 'dotNetLogoColor',
            },
            {
                title: 'SQL SERVER',
                icon: <SiMicrosoftsqlserver />,
                color: 'sqlServerLogoColor',
            },
        ], 
        bgColor: 'tiamshopBgColor',
        color: '',
        github: 'https://github.com/harounatiambou00/tiamshop/tree/Development',
        url: '',
        numberOfBranches: 10,
        numberOfLikes: 7,
    },
    {
        title: 'TiamTasks',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: '',
        techologies: [
            {
                title: 'HTML5',
                icon: <AiFillHtml5 />,
                color: 'htmlLogoColor',
            },
            {
                title: 'CSS3',
                icon: <DiCss3 />,
                color: 'cssLogoColor',
            },
            {
                title: 'BootStrap',
                icon: <FaBootstrap />,
                color: 'bootstrapLogoColor',
            },
            {
                title: 'Laravel 8',
                icon: <SiLaravel />,
                color: 'laravelLogoColor',
            },
        ], 
        bgColor: 'white',
        color: '',
        github: 'https://github.com/harounatiambou00/TiamTask',
        url: '',
        numberOfBranches: 2,
        numberOfLikes: 4,
    },
    {
        title: 'InfoSchool',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: Infoschool,
        techologies: [
            {
                title: 'HTML5',
                icon: <AiFillHtml5 />,
                color: 'htmlLogoColor',
            },
            {
                title: 'CSS3',
                icon: <DiCss3 />,
                color: 'cssLogoColor',
            },
            {
                title: 'BootStrap',
                icon: <FaBootstrap />,
                color: 'bootstrapLogoColor',
            },
        ], 
        bgColor: 'white',
        color: '',
        github: 'https://github.com/harounatiambou00/Infoschool',
        url: '',
        numberOfBranches: 1,
        numberOfLikes: 2,
    },
];