import { Box, Typography, Link } from "@mui/material"
import "./What.css"

function What() {
    return (
        <Box>
            <Box sx={{
                background: '#f9f9ff',
                padding: '120px 205px'
            }}>
                <Box sx={{ paddingBottom: '70px' }}>
                    <Typography id='yozS2'>
                        What kind of Foods we serve for you
                    </Typography>
                    <Typography id='yozS3'>
                        Who are in extremely love with eco friendly system.
                    </Typography>
                </Box>
                <Box id='TabsWh'>
                    <Typography id="tabsli1">
                        All Menu
                    </Typography>
                    <Typography id="tabsli2">
                        Breakfast
                    </Typography>
                    <Typography id="tabsli2">
                        Lunch
                    </Typography>
                    <Typography id="tabsli2">
                        Dinner
                    </Typography>
                    <Typography id="tabsli2">
                        Budget Meal
                    </Typography>
                    <Typography id="tabsli3">
                        Buffet
                    </Typography>
                </Box>
                <Box sx={{ marginTop: '50px' }}>
                    <Box>
                        <Box sx={{display:'flex'}}>
                            <Box id='brwh1'>
                                <Box id='tabichyoz'>
                                    <Typography id='tabichyoz1'>Cappuccion</Typography>
                                    <Typography id='tabichyoz2'>$49</Typography>
                                </Box>
                                <Typography id='tabichyoz3'>Usage of the Internet is becoming more common due to <br /> rapid advance.</Typography>
                            </Box>
                            <Box id='brwh2'>
                                <Box id='tabichyoz'>
                                    <Typography id='tabichyoz1'>Americano</Typography>
                                    <Typography id='tabichyoz2'>$49</Typography>
                                </Box>
                                <Typography id='tabichyoz3'>Usage of the Internet is becoming more common due to <br /> rapid advance.</Typography>
                            </Box>
                        </Box>
                        <Box sx={{display:'flex'}}>
                            <Box id='brwh1'>
                                <Box id='tabichyoz'>
                                    <Typography id='tabichyoz1'>Macchiato</Typography>
                                    <Typography id='tabichyoz2'>$49</Typography>
                                </Box>
                                <Typography id='tabichyoz3'>Usage of the Internet is becoming more common due to <br /> rapid advance.</Typography>
                            </Box>
                            <Box id='brwh2'>
                                <Box id='tabichyoz'>
                                    <Typography id='tabichyoz1'>Mocha</Typography>
                                    <Typography id='tabichyoz2'>$49</Typography>
                                </Box>
                                <Typography id='tabichyoz3'>Usage of the Internet is becoming more common due to <br /> rapid advance.</Typography>
                            </Box>
                        </Box>
                        <Box sx={{display:'flex'}}>
                            <Box id='brwh1'>
                                <Box id='tabichyoz'>
                                    <Typography id='tabichyoz1'>Piccolo Latte</Typography>
                                    <Typography id='tabichyoz2'>$49</Typography>
                                </Box>
                                <Typography id='tabichyoz3'>Usage of the Internet is becoming more common due to <br /> rapid advance.</Typography>
                            </Box>
                            <Box id='brwh2'>
                                <Box id='tabichyoz'>
                                    <Typography id='tabichyoz1'>Ristretto</Typography>
                                    <Typography id='tabichyoz2'>$49</Typography>
                                </Box>
                                <Typography id='tabichyoz3'>Usage of the Internet is becoming more common due to <br /> rapid advance.</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default What;