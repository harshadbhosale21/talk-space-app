import { Button, CardContent, CardHeader, Divider, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Status from '../components/status';

const SideBar = () => {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

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
                                {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Divider />
                    <div className="w-full my-2">
                        <div className="flex justify-between items-center">
                            <Typography className="text-xl">Status</Typography>
                            <Button variant="outlined" color="info" size="small">View All</Button>
                        </div>
                        <Status />
                    </div>
                    <Divider />
                </CardContent>
            </div>

            {/* Scrollable Content */}
            <CardContent className='h-[433px] overflow-y-auto custom-scrollbar'>
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
                <p className="p-4">Scrollable Content...</p>
                <p className="p-4">Scrollable Content...</p>
            </CardContent>
            <div className="w-full bg-blue-400 text-center p-2">
                © {new Date().getFullYear()} <a href="https://harshb.vercel.app" className="text-white hover:text-blue-900">Harshad Bhosale</a>. All rights reserved.
            </div>
        </>
    )
}

export default SideBar
