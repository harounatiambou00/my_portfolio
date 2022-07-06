import {SiStackoverflow, SiGithub} from 'react-icons/si';
import {FaGitAlt} from 'react-icons/fa';

export const tools = [
    {
        title: 'Git',
        percentage: 70,
        icon: <FaGitAlt />,
        color: 'gitLogoColor',
    },
    {
        title: 'Stackoverflow',
        percentage: 70,
        icon: <SiStackoverflow />,
        color: 'stackoverflowLogoColor',
    },
    {
        title: 'GitHub',
        percentage: 90,
        icon: <SiGithub />,
        color: 'githubLogoColor',
    },
];