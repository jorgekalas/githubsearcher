import {Stack, Typography} from "@mui/material"
import './MainInformation.css'

const MainInformation = ({userState}) => {
    const {
        name,
        login,
        created_at,
    } = userState;

    return(
        <>
            <Stack 
                direction="row"
                className="stackMainInformation"
                >
                    <Typography variant="h4">{name}</Typography>
                    <Typography variant="subtitle2">{created_at}</Typography>
            </Stack>
            <Typography variant="caption">{`@${login}`}</Typography>
        </>
    );
}

export default MainInformation;