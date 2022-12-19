import { Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import imgNav1 from '../../assets/img/logo.webp'
import Dropdown from 'react-bootstrap/Dropdown';
import * as React from 'react';
import './style.css'
function Navbar() {
    return (
        <Box sx={{ background: '#973734' }}>
            <Box sx={{ padding: '20px 0', display: 'flex', justifyContent: 'center' }}>
                <Typography>
                    <img src={imgNav1} alt="" />
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: '10px 190px'
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
    )
}
export default Navbar;