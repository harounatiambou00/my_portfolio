import React from 'react';
import { drawerLinks } from '../../../data/drawer_links/drawer-links';
import DrawerLinksItem from './DrawerLinksItem';

const DrawerLinks = () => {
  return (
    <div
        className='mt-24'
    >
        {drawerLinks.map((link) => {
            return(
                <DrawerLinksItem 
                    title={link.title}
                    signet={link.signet}
                    icon={link.icon}
                />
            );
        })}
    </div>
  )
}

export default DrawerLinks