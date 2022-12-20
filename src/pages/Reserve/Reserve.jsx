import { Typography, Link } from '@mui/material';
import { Box, height } from '@mui/system'
import './Reserve.css'
function Reserve() {
    return (
        <Box id='Reserve'>
            <Box id='Reservehra'>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{
                        width: '100%',
                        height:'511px',
                        display:'flex',
                        alignItems:'center'
                    }}>
                        <Box>
                        <Typography id='resyoz1'>
                            Reserve Your Seats to <br /> Confirm if You Come with <br /> Your Family
                        </Typography>
                        <Typography id='resyoz2'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br />
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />
                            veniam . Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                        </Typography>
                        </Box>
                    </Box>
                    <Box id='inptich'>
                        <Box sx={{ minWidth: '100%' }}>
                            <input type="text" placeholder="Your Name" id='resinpSt1' />
                            <input type="text" placeholder="Your Email Address" id='resinpSt1' />
                            <input type="text" placeholder="Phone Number" id='resinpSt1' />
                            <input type="text" placeholder="Select Date &amp; time" id='resinpSt1' />
                            <input type="text" placeholder="Select Event" id='resinpSt1' />
                            <Link id='inpyonbut'>
                                Make Reservation
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Reserve;