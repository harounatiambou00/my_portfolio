import {AiOutlineHome, AiOutlineGift} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import {TiPlusOutline} from 'react-icons/ti';
import {FaUserGraduate} from 'react-icons/fa';
import {BsFolderCheck} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';

export const drawerLinks = [
    {
        title: 'home_link',
        signet: 'home__section',
        icon: <AiOutlineHome />
    },
    {
        title: 'about_me_link',
        signet: 'about__me__section',
        icon: <BsPerson />
    },
    {
        title: 'skills_link',
        signet: 'skills__section',
        icon: <TiPlusOutline />
    },
    {
        title: 'education_link',
        signet: 'education__section',
        icon: <FaUserGraduate />
    },
    {
        title: 'portfolio_link',
        signet: 'portfolio__section',
        icon: <BsFolderCheck />
    },
    {
        title: 'contact_us_link',
        signet: 'contact__me__section',
        icon: <HiOutlineMail />
    },
    {
        title: 'services_link',
        signet: 'services__section',
        icon: <AiOutlineGift />
    },
]