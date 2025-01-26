import React from 'react';
import { useMediaQuery } from '@mui/material';
import MobileLayout from './mobileLayout';
import WebLayout from './webLayout';

const Layout = () => {

    const isMobile = useMediaQuery('(max-width:1024px)');

    return isMobile ? <MobileLayout /> : <WebLayout />;
}

export default Layout
