import { Typography,Link } from "@mui/material";
import { Box } from "@mui/system";
import AboutImg from '../../assets/img/about-img.webp'
import './About.css'

function About() {
    return (
        <Box>
            <Box sx={{
                padding: '120px 205px'
            }}>
                <Box sx={{
                    display: 'flex'
                }}>
                    <Box sx={{
                        paddingRight: '15px',
                        height: '390px',
                        alignItems: 'center',
                        display:'flex'
                    }}>
                        <Box>
                        <Typography id='abYo1'>
                            About Our Story
                        </Typography>
                        <Typography id='abYo2'>
                            Who are in extremely love with eco friendly system. Lorem ipsum dolor <br />
                            sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br />
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br />
                            commodo consequat.
                        </Typography>
                        <Link id="aboutBut">
                        view full menu
                        </Link>
                        </Box>
                    </Box>
                    <Box sx={{
                        paddingLeft: '15px',
                        width: '55.3%',
                        textAlign: 'right'
                    }}>
                        <Typography>
                            <img src={AboutImg} alt="" width={'540px'} height={'390px'} />
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}
export default About;  