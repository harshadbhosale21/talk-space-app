import { Divider, Grid } from '@mui/material';
import React from 'react'

const Messenger = () => {
    return (
        <>
            <div className="sticky top-0 bg-blue-300 h-20 z-10">
                <Grid container className='h-full'>
                    <Grid item xs={8} className='flex ps-6 justify-start items-center'>
                        <img
                            src="/images/avatars/2.png"
                            alt="profile=pic"
                            className='w-16 h-16 me-4 rounded-full border-2 border-white'
                        />
                        <p className=' text-xl font-bold text-blue-700'>John Joe</p>
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                </Grid>
            </div>
            <Divider />
            <div className="w-full min-h-[calc(100vh-82px)] h-auto chat-room">

            </div>
        </>
    )
}

export default Messenger;
