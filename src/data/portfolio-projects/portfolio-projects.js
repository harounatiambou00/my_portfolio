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
        description: {
            fr: `
                E-ILIMI est une plateforme commerce en ligne pour la vente et l'achat de livres.
                Par livres, nous voulons dire des livres numériques ou standards, de toutes les catégories (Manga, Developpement personnel, romans ...).
                Avec E-ILIMI n'importe qui dans mon cher pays le NIGER, pourra rechercher
                et commande le livre qu'il veut en deux temps trois mouvements.
            `,
            en: `
                E-ILIMI is an online commerce platform for the sale and purchase of books.
                By books, we mean digital or standard books, of all categories (Manga, Personal development, novels ...).
                With E-ILIMI anyone in my dear country NIGER, will be able to search
                and orders the book he wants in two shakes of a lamb's tale.
            `,
        },
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
            C'est mon site personnel où n'importe qui peut entrer en contact avec moi et en savoir plus sur moi professionnellement.
            Vous pouvez également consulter mes travaux récents et les services que j'offre.
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
            TiamTasks est une application web de gestion de tâches construite avec Laravel 8.
            Avec TiamTasks planifiez votre journée avec des tâches SMART à faire d'ici la fin de la journée.
            Cela vous aidera à devenir plus productif dans tous les aspects de votre vie.
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
            InfoSchool est une plateforme d'apprentissage en ligne pour les débutants dans le monde de la programmation.
            Vous pouvez trouver de nombreux tutos de haute qualité de grandes sociétés d'apprentissage en ligne telles que OpenClassrooms.
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