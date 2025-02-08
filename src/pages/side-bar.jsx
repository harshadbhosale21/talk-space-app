import { Avatar, Badge, Button, CardContent, CardHeader, Divider, Fab, Grid, IconButton, TextField, Tooltip, Typography } from '@mui/material';
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import React, { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Status from '../components/status';
import DirectConnections from '../components/direct-connections';

import classnames from 'classnames';

import ProfileMenu from './profileMenu';

const SideBar = (props) => {

    const { width } = props;

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            {/* Fixed Content */}
            <div className="sticky top-0 bg-white z-10">
                <CardContent>
                    <Grid container>
                        <Grid item xs={8}>
                            <CardHeader title="TalkSpace" />
                        </Grid>
                        <Grid item xs={4} className="flex justify-end items-center">
                            <IconButton color="info" onClick={handleDrawerToggle}>
                                <i className='ri-more-2-fill'></i>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Divider />
                    <div className="w-full my-2">
                        <div className="flex justify-between items-center">
                            <Typography className="text-xl">Status</Typography>
                            <Button variant="outlined" color="info" size="small">View All</Button>
                        </div>
                        <Grid container>
                            <Grid item xs={2} className='flex items-center justify-center'>
                                <div className="mt-3">
                                    <Tooltip title="add status">
                                        <Badge
                                            badgeContent={<i className='ri-add-fill'></i>}
                                            overlap='circular'
                                            color="secondary"
                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                            className='hover:cursor-pointer'
                                        >
                                            <div className="flex flex-col items-center hover:cursor-pointer">
                                                <img
                                                    src='/images/avatars/1.png'
                                                    alt="profile"
                                                    className="w-16 h-16 rounded-full border-2 border-blue-500"
                                                />
                                            </div>
                                        </Badge>
                                    </Tooltip>
                                    <p className="text-sm mt-2">Your Status</p>
                                </div>
                            </Grid>
                            <Grid item xs={10}>
                                <Status />
                            </Grid>
                        </Grid>
                    </div>
                    <Divider />
                </CardContent>
            </div>

            {/* Scrollable Content */}
            <CardContent className='h-[433px] overflow-y-auto custom-scrollbar'>
                <Grid container spacing={2} className='mb-2.5'>
                    <Grid item xs={12} className='flex justify-center items-center gap-1.5'>
                        <Fab size='small' color="info" variant='square'>
                            <i class="ri-search-line"></i>
                        </Fab>
                        <TextField
                            placeholder="Search by name..."
                            className="sm:w-[350px] max-sm:flex-1"
                            variant="outlined"
                            sx={{
                                height: 36, // Reduced height
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "18px", // Fully rounded (semi-circle)
                                    height: "36px", // Consistent height
                                    paddingX: "10px",

                                    "& fieldset": {
                                        borderColor: "gray", // Default border color
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "gray", // No change on hover
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "info.main", // Border color on focus
                                    },
                                },
                            }}
                        />

                    </Grid>
                    <Grid item xs={4} md={4} lg={4} className='flex justify-start items-center'>
                        <p className='font-semibold text-lg font-sans'>Messages (1)</p>
                    </Grid>
                    <Grid item xs={8} md={8} lg={8} className='flex justify-end items-center'>
                        <Button
                            variant='contained'
                            color='info'
                            size='small'
                            startIcon={<i className='ri-chat-1-fill'></i>}
                            sx={{
                                borderRadius: '100px',
                                textTransform: 'none',
                                fontFamily: 'sans-serif',
                                fontWeight: 'bold',
                                boxShadow: "0px 4px 10px rgba(0, 123, 255, 0.5)",
                                marginRight: '10px'
                            }}
                            className='me-2'
                        >
                            Chat
                        </Button>
                        <Button
                            variant='contained'
                            color='info'
                            size='small'
                            startIcon={<i class="ri-user-add-fill"></i>}
                            sx={{
                                borderRadius: '100px',
                                textTransform: 'none',
                                fontFamily: 'sans-serif',
                                fontWeight: 'bold',
                                boxShadow: "0px 4px 10px rgba(0, 123, 255, 0.5)"
                            }}
                        >
                            Find Connections
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} className=''>
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
                                <Tab value='1' label='Direct' />
                                <Tab value='2' label='Group' />
                            </TabList>
                            <TabPanel value="1">
                                <DirectConnections />
                            </TabPanel>
                        </TabContext>
                    </Grid>
                </Grid>

            </CardContent>
            <div className="w-full bg-blue-400 text-center p-2">
                © {new Date().getFullYear()} <a href="https://harshb.vercel.app" className="text-white hover:text-blue-900">Harshad Bhosale</a>. All rights reserved.
            </div>

            <ProfileMenu
                open={open}
                handleClose={() => setOpen(!open)}
                width={width}
            />
        </>
    )
}

export default SideBar
