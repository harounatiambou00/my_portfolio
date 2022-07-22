import React from 'react';
import { IconButton, Box, CircularProgress } from '@mui/material';

const SkillCard = ({title, percentage, icon, color}) => {
  return (
    <div
        className='mx-2 mb-4'
    >
        <div
            className='flex justify-between items-center w-full'
        >
            <div>
                <IconButton
                    color={color}
                >
                    {icon}
                </IconButton>
                {title}
            </div>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress variant="determinate" value={percentage} color={color} />
                <Box
                    sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}
                >
                    <div
                        className='font-light text-sm'
                    >
                        {`${Math.round(percentage)}%`}
                    </div>
                </Box>
            </Box>
        </div>
    </div>
  )
}

export default SkillCard