import {SiStackoverflow, SiGithub, SiVisualstudiocode, SiVisualstudio, SiPostman, SiAndroid, SiLinux} from 'react-icons/si';
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
    {
        title: 'VS CODE',
        percentage: 90,
        icon: <SiVisualstudiocode />,
        color: 'vsCodeLogoColor',
    },
    {
        title: 'Visual Studio',
        percentage: 70,
        icon: <SiVisualstudio />,
        color: 'visualStudioLogoColor',
    },
    {
        title: 'Postman',
        percentage: 60,
        icon: <SiPostman />,
        color: 'postmanLogoColor',
    },
    {
        title: 'Android Studio',
        percentage: 50,
        icon: <SiAndroid />,
        color: 'androidLogoColor',
    },
    {
        title: 'Linux OS',
        percentage: 40,
        icon: <SiLinux />,
        color: 'linuxColor',
    },
];