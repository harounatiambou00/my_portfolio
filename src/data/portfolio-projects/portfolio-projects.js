import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';
import {SiJavascript, SiLaravel, SiTailwindcss, SiDotnet, SiMaterialui, SiMicrosoftsqlserver, SiJsonwebtokens} from 'react-icons/si';
import { FaReact, FaBootstrap } from 'react-icons/fa';

import EIlimi from '../../assets/images/projects/e-ilimi.png';
import PersonalWebsite from '../../assets/images/projects/personal-website.png';
import TiamTasks from '../../assets/images/projects/TiamTasks.png';
import Infoschool from '../../assets/images/projects/infoschool.png';



export const projects = [
    {
        title: 'E-ILIMI',
        description: `
            E-ILIMI is an e-commerce platform for book sales and purchases.
            By books we mean numerical books or standard ones, all categories
            combined.
            In my natal language Ilimi stands for “Knowledge”.
            With E-ILIMI anyone in my dear country NIGER, will be able to search
            and order for the book he wants in two shakes of a lamb's tail.
        `,
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
        description: `
            It's my personnal website where anyone can get in touch with me and know more about me professionally.
            You can also check out my recent work and the services that i offer.
        `,
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
    /*{
        title: 'TiamShop',
        description: `
            Tiamshop is an e-commerce website 
        `,
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
    },*/
    {
        title: 'TiamTasks',
        description: `
            TiamTasks is a task managment web application buit with Laravel 8.
            With TiamTasks plan your day with SMART tasks to be doe by the end of the day.
            It will help you to become more porductive in any aspect of your life.
        `,        
        image: TiamTasks,
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
        description: `
            InfoSchool is an e-learning platforms for beginners in the coding world.
            You can find many high level courses from big e-learning companies such as OpenClassrooms. 
        `,    
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