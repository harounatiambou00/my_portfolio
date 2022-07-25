import React from 'react';

import {AiFillHeart} from 'react-icons/ai';

const Footer = () => {
  return (
    <div
        className='text-center w-full pt-10 pb-2 text-dark dark:text-light cursor-pointer hover:text-teal'
    >
        Designed & Built with the <AiFillHeart className='inline text-red-700 opacity-100' /> by <br/><span className='font-righteous'>TIAMTECH LLC</span><br />
    </div>
  )
}

export default Footer