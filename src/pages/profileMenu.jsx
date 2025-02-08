import React, { useState } from 'react';
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Drawer from '@mui/material/Drawer';
import { Badge, CardContent, IconButton, Tooltip } from '@mui/material';

const ProfileMenu = (props) => {

    const { open, handleClose, width } = props;

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <>
            <Drawer
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        width: width // Remove quotes for a numeric value
                    }
                }}
            >
                <CardContent>
                    <div className="w-full flex justify-between items-center">
                        <Tooltip title="Log Out">
                            <IconButton color='error' className="self-end" onClick={handleClose}>
                                <i class="ri-logout-box-line"></i>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Close">
                            <IconButton className="self-end" onClick={handleClose}>
                                <i className="ri-close-fill"></i>
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div className="w-full mb-2 flex flex-col justify-center items-center">
                        <Badge
                            overlap='circular'
                            badgeContent={<i className='ri-edit-fill'></i>}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            className='hover:cursor-pointer'
                            color='info'
                        >
                            <img
                                src='/images/avatars/1.png'
                                alt="john Joe"
                                className="w-28 h-28 rounded-full border-2 border-blue-500"
                            />
                        </Badge>
                        <p className="text-lg font-bold mt-2">John Joe</p>
                    </div>
                    <TabContext value={value}>
                        <TabList
                            variant='fullWidth'
                            onChange={handleChange}
                            aria-label='full width tabs example'
                            sx={{
                                "& .MuiTabs-indicator": {
                                    backgroundColor: "#007BFF", // Change indicator color
                                },
                                "& .MuiTab-root": {
                                    color: "gray", // Default tab color
                                },
                                "& .Mui-selected": {
                                    color: "#007BFF", // Selected tab text color
                                }
                            }}
                        >
                            <Tab value='1' label='Profile' icon={<i className='ri-user-fill'></i>} />
                            <Tab value='2' label='Favorites' icon={<i className='ri-heart-fill'></i>} />
                            <Tab value='3' label='Settings' icon={<i className='ri-settings-3-fill'></i>} />
                            <Tab value='4' label='About' icon={<i className='ri-information-fill'></i>} />
                        </TabList>
                    </TabContext>
                </CardContent>
            </Drawer>
        </>
    )
}

export default ProfileMenu
