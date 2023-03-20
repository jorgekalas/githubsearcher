import {Grid, Stack, Typography} from "@mui/material"
import TwitterIcon from "@mui/icons-material/Twitter"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import LanguageIcon from "@mui/icons-material/Language"
import BusinessIcon from "@mui/icons-material/Business"
import './LocationInformation.css'


const LocationInformation = ({userState}) => {
    const {
        location,
        twitter_username,
        blog,
        company
    } = userState;

    return(
        <Grid 
            container
            spacing={2}
            className="gridContainerLocation"
            >
                <Grid item xs={6}>
                    <Stack direction="row" spacing={2}>
                        <LocationOnIcon />
                        {location !== null ?
                        <Typography>{location}</Typography>
                        :
                        <Typography>Not available</Typography>
                        }
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack direction="row" spacing={2}>
                        <TwitterIcon />
                        {twitter_username !== null ?
                        <Typography>{twitter_username}</Typography>
                        :
                        <Typography>Not available</Typography>
                        }
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack direction="row" spacing={2}>
                        <LanguageIcon />
                        {blog !== null ?
                        <a target="_blank" href={blog}>
                            <Typography>{blog}</Typography>
                        </a>
                        :
                        <Typography>Not available</Typography>
                        }
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack direction="row" spacing={2}>
                        <BusinessIcon />
                        {company !== null ?
                        <Typography>{company}</Typography>
                        :
                        <Typography>Not available</Typography>
                        }
                    </Stack>
                </Grid>
        </Grid>
    )
}

export default LocationInformation;