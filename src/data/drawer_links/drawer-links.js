import {AiOutlineHome, AiOutlineGift} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import {TiPlusOutline} from 'react-icons/ti';
import {FaUserGraduate} from 'react-icons/fa';
import {BsFolderCheck} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';

export const drawerLinks = [
    {
        title: 'Home',
        signet: 'home__section',
        icon: <AiOutlineHome />
    },
    {
        title: 'About Me',
        signet: 'about__me__section',
        icon: <BsPerson />
    },
    {
        title: 'Skills',
        signet: 'skills__section',
        icon: <TiPlusOutline />
    },
    {
        title: 'Education',
        signet: 'education__section',
        icon: <FaUserGraduate />
    },
    {
        title: 'Portfolio',
        signet: 'portfolio__section',
        icon: <BsFolderCheck />
    },
    {
        title: 'Contact Me',
        signet: 'contact__me__section',
        icon: <HiOutlineMail />
    },
    {
        title: 'Services',
        signet: 'services__section',
        icon: <AiOutlineGift />
    },
]