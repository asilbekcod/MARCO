import { Box, Typography } from '@mui/material'
import HuldRasm1 from '../../assets/img/tum.webp'
import HuldRasm2 from '../../assets/img/yulduz.png'
import './Hulda.css'


function Hulda() {
    return (
        <Box id='Hulda'>
            <Box>
                <Typography sx={{
                    textAlign: 'center',
                    width: '100%'
                }}>
                    <img src={HuldRasm1} alt="" width={'80px'} />
                </Typography>
                <Typography id='HulYoz1'>
                    Hulda Sutton
                </Typography>
                <Typography sx={{
                    textAlign: 'center',
                    width: '100%'
                }}>
                    <img src={HuldRasm2} alt="" />
                </Typography>
                <Typography id='HulYoz2'>
                    “Accessories Here you can find the best computer accessory for your laptop, <br />
                    monitor, printer, scanner, speaker. Here you can find the best computer <br />
                    accessory for your laptop, monitor, printer, scanner, speaker.”
                </Typography>
                <Box id='boxtorhul'>
                    <Typography id='HulTor1'></Typography>
                    <Typography id='HulTor'></Typography>
                    <Typography id='HulTor'></Typography>
                    <Typography id='HulTor'></Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default Hulda;