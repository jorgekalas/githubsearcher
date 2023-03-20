import {Grid, CardMedia, Stack} from "@mui/material"
import MainInformation from "../../components/MainInformation/MainInformation"
import Description from "../Description/Description"
import './UserCard.css'

const UserCard = ({userState}) => {
    const avatar_url = userState.avatar_url

    return(
        <Grid container spacing={2} className = "userCardContainer">
            <Grid item xs={3}>
                <CardMedia 
                component="img" 
                image={avatar_url}
                alt="GitHub User"
                className="cardMedia"
                />
            </Grid>
            <Grid item xs={9}>
                <Stack 
                    direction="column"
                    spacing={1}
                    className= "stackInformation">

                        <MainInformation userState = {userState}/>
                        <Description userState = {userState}/>
                        
                </Stack>
            </Grid>
        </Grid>
    )
}

export default UserCard;