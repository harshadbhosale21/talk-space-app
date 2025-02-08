import React from 'react'
import SideBar from '../pages/side-bar'
import { Grid } from '@mui/material'

const MobileLayout = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <SideBar width={"100%"} />
                </Grid>
            </Grid>
        </>
    )
}

export default MobileLayout
