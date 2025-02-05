import React, { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles'

import classnames from 'classnames';
import { Badge } from '@mui/material';

const BadgeContentSpan = styled('span', {
    name: 'MuiBadgeContentSpan'
})(({ color = 'success', badgeSize = 14 }) => ({
    width: `${badgeSize}px`, // Ensure badgeSize is properly used
    height: `${badgeSize}px`,
    borderRadius: '50%',
    cursor: 'pointer',
    border: '1px solid white',
    // backgroundColor: `var(--mui-palette-${color}-main)`, // Fixed template literal syntax
    backgroundColor: 'green',
    boxShadow: '0 0 0 2px var(--mui-palette-background-paper)'
}));

const connectionData = [
    {
        avatar: "/images/avatars/1.png",
        name: 'John Joe',
        message: 'Hello there',
        role: 'Software Engineer',
        isChatActive: true
    },
    {
        avatar: "/images/avatars/2.png",
        name: 'Alex Sameuls',
        message: 'Wait for me',
        role: 'Marketing Executive',
        isChatActive: false
    },
    {
        avatar: "/images/avatars/3.png",
        name: 'Dane Davids',
        message: 'Good morning',
        role: 'UI/UX developer',
        isChatActive: false
    },
    {
        avatar: "/images/avatars/4.png",
        name: 'Mark Hughs',
        message: 'Good Noght',
        role: 'Manager',
        isChatActive: false
    },
]


const DirectConnections = () => {

    const [isChatActive, setIsChatActive] = useState(true);
    const [connectionList, setConnectionList] = useState(connectionData);

    const handleSelectConnection = (index) => {
        const updatedList = connectionData.map((item, i) =>
            i === index ? { ...item, isChatActive: true } : { ...item, isChatActive: false }
        );
        setConnectionList(updatedList);
    };


    return (
        <>
            {/* <p className="p-4">Scrollable Content...</p>
            <p className="p-4">Scrollable Content...</p>
            <p className="p-4">Scrollable Content...</p>
            <p className="p-4">Scrollable Content...</p>
            <p className="p-4">Scrollable Content...</p>
            <p className="p-4">Scrollable Content...</p>
            <p className="p-4">Scrollable Content...</p>
            <p className="p-4">Scrollable Content...</p>
            <p className="p-4">Scrollable Content...</p>
            <p className="p-4">Scrollable Content...</p>
            <p className="p-4">Scrollable Content...</p>
            <p className="p-4">Scrollable Content...</p> */}

            {
                connectionList.length === 0 ? (
                    <Typography>No Connections Here</Typography>
                ) : connectionList.map((item, index) => (
                    <>
                        <li
                            className={classnames('flex items-start gap-4 p-2 plb-2 cursor-pointer rounded-lg mbe-1', {
                                'bg-blue-400 shadow-xs': item.isChatActive,
                                'text-[var(--mui-palette-blue-contrastText)]': item.isChatActive
                            })}
                            onClick={() => handleSelectConnection(index)}
                        >
                            <Badge
                                overlap='circular'
                                badgeContent={<BadgeContentSpan color="success" badgeSize="10" />}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                invisible={!item.isChatActive}
                            >
                                <Avatar
                                    src={item.avatar}
                                    alt='profile'
                                    className={classnames('cursor-pointer')}
                                    sx={{
                                        border: '2px solid white'
                                    }}
                                />
                            </Badge>
                            <div className="min-is-0 flex-auto">
                                <Typography color={item.isChatActive ? 'white' : 'text.secondary'}>{item.name}</Typography>
                                <Typography variant='body2' color={item.isChatActive ? 'white' : 'text.secondary'} className='truncate'>
                                    {item.message}
                                </Typography>
                            </div>
                            <div className='flex flex-col items-end justify-start'>
                                <Typography
                                    variant='body2'
                                    color={item.isChatActive ? 'white' : 'text.secondary'}
                                    className={classnames('truncate', {
                                        'text-textDisabled': !item.isChatActive
                                    })}
                                >
                                    12 Feb
                                </Typography>
                            </div>
                        </li>
                    </>
                ))
            }
        </>
    )
}

export default DirectConnections
