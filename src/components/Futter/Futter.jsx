import { Box } from '@mui/material'
import { AiOutlineArrowRight } from "react-icons/ai";
import {FaFacebookF,FaTwitter,FaDribbble,FaBehance } from "react-icons/fa";
import './Futter.css'

function Futter() {
    return (
        <Box>
            <Box className="futer">
                <Box className="futer-twx">
                    <Box className="futer-ram">
                        <Box className="futer-open">
                            Opening Hours
                        </Box>
                        <Box className="futer-draw">
                            Monday - Friday
                            <span style={{ marginLeft: '30%' }}>08.00 am - 10.00 pm</span>
                        </Box>
                        <Box class="futer-draw">
                            Saturday
                            <span style={{ marginLeft: '43%' }}>08.00 am - 10.00 pm</span>
                        </Box>
                        <Box class="futer-draw">
                            Sunday
                            <span style={{ marginLeft: '45%' }}>08.00 am - 10.00 pm</span>
                        </Box>
                    </Box>


                    <Box className="futer-ram">
                        <Box className="futer-open">
                            Contact Us
                        </Box>
                        <Box className="futer-draw1">56/8, los angeles, rochy beach, Santa monica, United states of america - 1205
                        </Box>
                        <Box className="futer-nomer">
                            012-6532-568-9746 <br />
                            012-6532-569-9748
                        </Box>

                    </Box>

                    <Box className="futer-ram">
                        <Box className="futer-open">
                            Newsletter
                        </Box>
                        <Box className="futer-draw1">You can trust us. we only send promo offers, not a single spam.
                        </Box>
                        <Box className="futer-in">
                            <input type="text" class="futer-input" placeholder="Your Email Address" />
                            <Box className="futer-qizil">
                                <AiOutlineArrowRight style={{
                                    color:'#fff',
                                    fontSize:'16px',
                                    textAlign:'center',
                                    width:'100%',
                                    marginTop:'10px'
                                }} />
                            </Box>
                        </Box>

                    </Box>
                </Box>

            </Box>
            <Box className="futer-past">
                <Box className="futer-raska">
                    <Box className="futer-ios">
                        Copyright ©20222022 All rights reserved | This templsate is made with by <a href="#"
                            className="futer-span">Colorlib</a>
                    </Box>

                    <Box className="futer-abet">

                        <Box className="futer-icon">
                            <FaFacebookF />
                        </Box>
                        <Box className="futer-icon">
                            <FaTwitter />
                        </Box>
                        <Box className="futer-icon">
                            <FaDribbble />
                        </Box>
                        <Box className="futer-icon">
                            <FaBehance />
                        </Box>
                    </Box>

                </Box>

            </Box>
        </Box>
    )
}
export default Futter;