import { Box, Typography, Link } from '@mui/material'
import LatImg1 from '../../assets/img/b1.webp'
import LatImg2 from '../../assets/img/b2.webp'
import LatImg3 from '../../assets/img/b3.webp'
import LatImg4 from '../../assets/img/b4.webp'
import { AiOutlineHeart } from "react-icons/ai";
import { SlBubble } from "react-icons/sl";
import './Latest.css'

function Latest() {
    return (
        <Box>
            <Box sx={{
                padding: '120px 188px'
            }}>
                <Box>
                    <Box sx={{
                        paddingBottom: '70px'
                    }}>
                        <Typography id='yozS2'>
                            Latest From Our Blog
                        </Typography>
                        <Typography id='yozS3'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br />
                            dolore magna aliqua.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex'
                }}>
                    <Box sx={{
                        margin: '0 15px',
                        width: '100%'
                    }}>
                        <Typography>
                            <img src={LatImg1} alt="" width={'255px'} />
                        </Typography>
                        <Box sx={{
                            margin: '20px 0 16px 0'
                        }}>
                            <Link id='LatBut1'>
                                10 Jan 2018
                            </Link>
                        </Box>
                        <Typography id='LatImg2'>
                            Cooking Perfect Fried Rice <br />
                            in minutes
                        </Typography>
                        <Typography id='LatImg3'>
                            inappropriate behavior ipsum dolor <br />
                            sit amet, consectetur.
                        </Typography>
                        <Box sx={{ display: 'flex' }}>
                            <Typography id='LatImg4'>
                                <AiOutlineHeart style={{ fontSize: '17px', margin: '0 3px 3px 0' }} />
                                15 Likes
                            </Typography>
                            <Typography id='LatImg5'>
                                <SlBubble style={{ fontSize: '17px', margin: '0 3px 3px 0' }} />
                                02 Comments
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        margin: '0 15px',
                        width: '100%'
                    }}>
                        <Typography>
                            <img src={LatImg2} alt="" width={'255px'} />
                        </Typography>
                        <Box sx={{
                            margin: '20px 0 16px 0'
                        }}>
                            <Link id='LatBut1'>
                                10 Jan 2018
                            </Link>
                        </Box>
                        <Typography id='LatImg2'>
                            Secret of making Heart <br />
                            Shaped eggs
                        </Typography>
                        <Typography id='LatImg3'>
                            inappropriate behavior ipsum dolor <br />
                            sit amet, consectetur.
                        </Typography>
                        <Box sx={{ display: 'flex' }}>
                            <Typography id='LatImg4'>
                                <AiOutlineHeart style={{ fontSize: '17px', margin: '0 3px 3px 0' }} />
                                15 Likes
                            </Typography>
                            <Typography id='LatImg5'>
                                <SlBubble style={{ fontSize: '17px', margin: '0 3px 3px 0' }} />
                                02 Comments
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        margin: '0 15px',
                        width: '100%'
                    }}>
                        <Typography>
                            <img src={LatImg3} alt="" width={'255px'} />
                        </Typography>
                        <Box sx={{
                            margin: '20px 0 16px 0'
                        }}>
                            <Link id='LatBut1'>
                                10 Jan 2018
                            </Link>
                        </Box>
                        <Typography id='LatImg2'>
                            How to check steak if it is <br />
                            tender or not
                        </Typography>
                        <Typography id='LatImg3'>
                            inappropriate behavior ipsum dolor <br />
                            sit amet, consectetur.
                        </Typography>
                        <Box sx={{ display: 'flex' }}>
                            <Typography id='LatImg4'>
                                <AiOutlineHeart style={{ fontSize: '17px', margin: '0 3px 3px 0' }} />
                                15 Likes
                            </Typography>
                            <Typography id='LatImg5'>
                                <SlBubble style={{ fontSize: '17px', margin: '0 3px 3px 0' }} />
                                02 Comments
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        margin: '0 15px',
                        width: '100%'
                    }}>
                        <Typography>
                            <img src={LatImg4} alt="" width={'255px'} />
                        </Typography>
                        <Box sx={{
                            margin: '20px 0 16px 0'
                        }}>
                            <Link id='LatBut1'>
                                10 Jan 2018
                            </Link>
                        </Box>
                        <Typography id='LatImg2'>
                            Seaseme and black seed <br />
                            Flavored Bun Rocks
                        </Typography>
                        <Typography id='LatImg3'>
                            inappropriate behavior ipsum dolor <br />
                            sit amet, consectetur.
                        </Typography>
                        <Box sx={{ display: 'flex' }}>
                            <Typography id='LatImg4'>
                                <AiOutlineHeart style={{ fontSize: '17px', margin: '0 3px 3px 0' }} />
                                15 Likes
                            </Typography>
                            <Typography id='LatImg5'>
                                <SlBubble style={{ fontSize: '17px', margin: '0 3px 3px 0' }} />
                                02 Comments
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Latest;