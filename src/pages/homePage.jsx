import { Grid } from '@mui/material'
import React from 'react'

const HomePage = () => {
    return (
        <>
            <div className="w-full h-full bg-gray-200 flex flex-col justify-center ">
                <Grid container spacing={2}>
                    <Grid item xs={6} className='flex justify-end items-center'>
                        <img
                            src="/images/home-icon.png"
                            alt="home-ico"
                            className='w-64'
                        />
                    </Grid>
                    <Grid item xs={6} className='pe-14'>
                        <h2 className="text-3xl text-center font-bold mb-2">Welcome   👋</h2>
                        <h2 className="text-5xl text-center font-bold"> <span className='text-blue-500 ms-1'>John Joe</span></h2>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default HomePage
