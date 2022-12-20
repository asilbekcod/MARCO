import { Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import imgNav1 from '../../assets/img/logo.webp'
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useEffect, useState } from 'react';
import './style.css'
function Navbar() {
    const [height, setHeight] = useState(0);
    useEffect(() => {
      window.addEventListener('scroll', () => {
        setHeight(window.pageYOffset);
      })
      return () => window.removeEventListener('scroll', () => { })
    })
  
    return (
        <Box sx={{position:'fixed',width:'100%',}}>
            <Box sx={{ padding: height > 100 ? '0px' : '20px 0', display: height > 100 ? 'none' : 'flex', justifyContent: 'center' }}>
                <Typography>
                    <img src={imgNav1} alt="" />
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: height > 100 ? '0px' : '0px 190px',
                background:height > 100 ? 'rgba(34,34,34,0.9)' : 'none',
                transition:'all 0.5s',
            }}> 
            <Box sx={{
                borderTop: height > 100 ? '0px' : '1px solid rgba(255, 255, 255, 0.2)',
                borderBottom: height > 100 ? '0px' : '1px solid rgba(255, 255, 255, 0.2)',
                width:'100%'
            }}>
                <Box id='navbar'>
                    <Link className="sozNav">
                        HOME
                    </Link>
                    <Link className="sozNav">
                        ABOUT
                    </Link>
                    <Link className="sozNav">
                        MENU
                    </Link>
                    <Link className="sozNav">
                        GALLERY
                    </Link>
                    <Box id='drNav1'>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                BLOG
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Typography>
                                    Blog Home
                                </Typography>
                                <Typography>
                                    Blog Single
                                </Typography>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Box>
                    <Box id='drNav2'>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                PAGES
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Typography>
                                    Element
                                </Typography>
                                <Box id='drNav3'>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                level 2
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Typography>
                                                Item One
                                            </Typography>
                                            <Typography>
                                                Item Two
                                            </Typography>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Box>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Box>
                    <Link className="sozNav">
                        CONTACT
                    </Link>
                </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Navbar;