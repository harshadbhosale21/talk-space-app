import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Button, CardContent, CardHeader, Grid } from '@mui/material';
import Status from '../components/status';

import SideBar from '../pages/side-bar';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
        ],
    }),
);

export default function WebLayout() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        // <Box sx={{ display: 'flex' }}>
        //     {/* <CssBaseline /> */}
        //     {/* <AppBar position="fixed" open={open}>
        //         <Toolbar>
        //             <IconButton
        //                 color="inherit"
        //                 aria-label="open drawer"
        //                 onClick={handleDrawerOpen}
        //                 edge="start"
        //                 sx={[
        //                     {
        //                         marginRight: 0,
        //                     },
        //                     // open && { display: 'none' },
        //                 ]}
        //             >
        //                 <MenuIcon />
        //             </IconButton>
        //             <Typography variant="h6" noWrap component="div">
        //                 Mini variant drawer
        //             </Typography>
        //         </Toolbar>
        //     </AppBar> */}
        //     <Drawer
        //         variant="permanent" open={open}
        //         // sx={{
        //         //     width: open ? 60 : 0,
        //         //     transition: 'width 0.3s ease-in-out',
        //         //     overflowX: 'hidden',
        //         //     flexShrink: 0,
        //         //     whiteSpace: 'nowrap',
        //         //     '& .MuiDrawer-paper': {
        //         //         width: open ? 60 : 0,
        //         //         overflowX: 'hidden',
        //         //     },
        //         //     '&.MuiDrawer-docked': {
        //         //         width: open ? 60 : 0,
        //         //         display: open ? 'block' : 'none',
        //         //         flexShrink: open ? 0 : 1,
        //         //     },
        //         // }}
        //         sx={{
        //             width: open ? 60 : 0,
        //             transition: 'width 0.3s ease-in-out',
        //             overflowX: 'hidden',
        //             flexShrink: 0,
        //             whiteSpace: 'nowrap',
        //             '& .MuiDrawer-paper': {
        //                 width: open ? 60 : 0,
        //                 transition: 'width 0.3s ease-in-out',
        //                 overflowX: 'hidden',
        //             },
        //             '&.MuiDrawer-docked': {
        //                 width: '0px !important',
        //                 // display: open ? 'block' : 'none',
        //                 // flexShrink: open ? 0 : 1,
        //             },
        //         }}
        //     >
        //         <DrawerHeader>
        //             <IconButton onClick={handleDrawerToggle}>
        //                 {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        //             </IconButton>
        //         </DrawerHeader>
        //         <Divider />
        //         <List>
        //             {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        //                 <ListItem key={text} disablePadding sx={{ display: 'block' }}>
        //                     <ListItemButton
        //                         sx={[
        //                             {
        //                                 minHeight: 48,
        //                                 px: 2.5,
        //                             },
        //                             open
        //                                 ? {
        //                                     justifyContent: 'initial',
        //                                 }
        //                                 : {
        //                                     justifyContent: 'center',
        //                                 },
        //                         ]}
        //                     >
        //                         <ListItemIcon
        //                             sx={[
        //                                 {
        //                                     minWidth: 0,
        //                                     justifyContent: 'center',
        //                                 },
        //                                 open
        //                                     ? {
        //                                         mr: 3,
        //                                     }
        //                                     : {
        //                                         mr: 'auto',
        //                                     },
        //                             ]}
        //                         >
        //                             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        //                         </ListItemIcon>
        //                         <ListItemText
        //                             primary={text}
        //                             sx={[
        //                                 open
        //                                     ? {
        //                                         opacity: 1,
        //                                     }
        //                                     : {
        //                                         opacity: 0,
        //                                     },
        //                             ]}
        //                         />
        //                     </ListItemButton>
        //                 </ListItem>
        //             ))}
        //         </List>
        //         <Divider />
        //         <List>
        //             {['All mail', 'Trash', 'Spam'].map((text, index) => (
        //                 <ListItem key={text} disablePadding sx={{ display: 'block' }}>
        //                     <ListItemButton
        //                         sx={[
        //                             {
        //                                 minHeight: 48,
        //                                 px: 2.5,
        //                             },
        //                             open
        //                                 ? {
        //                                     justifyContent: 'initial',
        //                                 }
        //                                 : {
        //                                     justifyContent: 'center',
        //                                 },
        //                         ]}
        //                     >
        //                         <ListItemIcon
        //                             sx={[
        //                                 {
        //                                     minWidth: 0,
        //                                     justifyContent: 'center',
        //                                 },
        //                                 open
        //                                     ? {
        //                                         mr: 3,
        //                                     }
        //                                     : {
        //                                         mr: 'auto',
        //                                     },
        //                             ]}
        //                         >
        //                             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        //                         </ListItemIcon>
        //                         <ListItemText
        //                             primary={text}
        //                             sx={[
        //                                 open
        //                                     ? {
        //                                         opacity: 1,
        //                                     }
        //                                     : {
        //                                         opacity: 0,
        //                                     },
        //                             ]}
        //                         />
        //                     </ListItemButton>
        //                 </ListItem>
        //             ))}
        //         </List>
        //     </Drawer>
        //     <Box component="main" sx={{
        //         flexGrow: 1,
        //     }}>
        //         <Grid container >
        //             <Grid item xs={4} className='border-2 min-h-screen h-auto overflow-y-auto'>
        //                 <div className="flex justify-end items-center w-full h-24">
        //                     <IconButton onClick={handleDrawerToggle}>
        //                         {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        //                     </IconButton>
        //                 </div>
        //             </Grid>
        //             <Grid item xs={8}>

        //             </Grid>
        //         </Grid>
        //     </Box>
        // </Box>
        <Grid container>
            <Grid item xs={4} className="relative border min-h-screen h-screen">
                <SideBar />
            </Grid>
            <Grid item xs={8}>
                {/* Other Content */}
                <div className="h-screen overflow-y-auto">
                    <div className="sticky top-0 bg-blue-300 h-20 z-10">

                    </div>
                    <Divider />
                    <div className="w-full min-h-[calc(100vh-82px)] h-auto chat-room">

                    </div>
                </div>
            </Grid>
        </Grid>

    );
}
