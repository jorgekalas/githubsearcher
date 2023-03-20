import { Stack, TextField, IconButton } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import {useState} from 'react'

const Searcher = ({setInputUser}) => {

    const [valueInput, setValueInput] = useState('');

    const onSearchValueChange = (event) => {
        const inputValue = event.target.value
        setValueInput(inputValue);
    }

    // console.log('valueInput', valueInput);

    const handleSubmit = () => {
        setInputUser(valueInput);
    }



    return(
    <Stack 
        direction='row' 
        sx={{
            marginTop:"30px",
            width:"100%",
        }}>
            <TextField 
            id="outlined-basic" 
            label="GitHub User"
            placeholder="Octocat" 
            variant="outlined" 
            size="small"

            sx={{width:"90%"}}

            value={valueInput}
            onChange={onSearchValueChange}


            />

            <IconButton 
            size="small"
            sx={{
                left:"-45px"
            }}
            onClick = {handleSubmit}
            >
                <SearchIcon/>
            </IconButton>
    </Stack>
    )
}

export default Searcher;