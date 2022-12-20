import { Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import './Home.css'

function Home() {
    return (
            <Box id='Home'>
                <Box sx={{
                    padding: '290px 205px 0 205px',
                }}>
                    <Box>
                        <Typography id='homeYoz'>
                            WIDE OPTIONS OF CHOICE
                        </Typography>
                        <Typography id='homeYoz2'>
                            Delicious Recipes
                        </Typography>
                        <Typography id='homeYoz3'>
                            inappropriate behavior is often laughed off as “boys will be boys,” women <br />
                            face higher conduct standards especially in the workplace. That’s why it’s <br />
                            crucial that, as women.
                        </Typography>
                        <Link id='homeYoz4'>
                            Check Our Menu
                        </Link>
                    </Box>
                </Box>
            </Box>

    )
}
export default Home;