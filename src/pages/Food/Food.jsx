import { Box, Typography } from '@mui/material'
import FoodImg1 from '../../assets/img/g1.webp'
import FoodImg2 from '../../assets/img/g2.webp'
import FoodImg3 from '../../assets/img/g3.webp'
import FoodImg4 from '../../assets/img/g4.webp'
import FoodImg5 from '../../assets/img/g5.webp'
import FoodImg6 from '../../assets/img/g6.webp'
import './Food.css'

function Food() {
    return (
        <Box>
            <Box sx={{
                background: '#f9f9ff',
                padding: '120px 205px'
            }}>
                <Box sx={{ paddingBottom: '70px' }}>
                    <Typography id='yozS2'>
                        Food and Customer Gallery
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
                <Box sx={{
                    display: 'flex',
                    marginTop: '60px'
                }}>
                    <Box>
                        <Typography sx={{ marginRight: '15px' }}>
                            <img src={FoodImg1} alt="" />
                        </Typography>
                        <Typography sx={{ marginRight: '15px', marginTop: '30px' }}>
                            <img src={FoodImg4} alt="" />
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ marginLeft: '15px', marginRight: '15px' }}>
                            <img src={FoodImg2} alt="" />
                        </Typography>
                        <Typography sx={{ marginLeft: '15px', marginTop: '30px', marginRight: '15px' }}>
                            <img src={FoodImg6} alt="" />
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ marginLeft: '15px' }}>
                            <img src={FoodImg3} alt="" />
                        </Typography>
                        <Typography sx={{ marginLeft: '15px', marginTop: '30px' }}>
                            <img src={FoodImg5} alt="" />
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Food;