import {Stack, Typography} from '@mui/material'
import PaperInformation from '../../components/PaperInformation/PaperInformation'
import LocationInformation from '../../components/LocationInformation/LocationInformation'
import './Description.css'


const Description = ({userState}) => {
    const bio = userState.bio;

    return(
        <>
            <Stack className='stackDescription'>
            {
                bio !== null ?
                <Typography variant="body1">{bio}</Typography>
                :
                <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatem minima commodi necessitatibus a enim temporibus</Typography>
            }
            </Stack>
            <PaperInformation userState={userState} />
            <LocationInformation userState={userState} /> 
        </>
    )
}

export default Description;