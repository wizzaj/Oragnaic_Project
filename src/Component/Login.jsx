import { Box,TextField,Typography,Button} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login()
{
    const navigate = useNavigate()
    const [formdata,setFormData] = useState({
        name:'',
        phoneNo:'',
        email:''
    })

    const handleSubmit = (event)=>
    {
    event.preventDefault()
    localStorage.setItem("userInfo",JSON.stringify(formdata))
    navigate("/data")
    }
    
    const handleChange = (event)=>
    {
       const {name,value}=event.target
       setFormData((oldvalue)=>{
        return{
            ...oldvalue,
            [name]:value
        }
       })
    }

  return(
    <Box>
    <Box sx={{
        my:2
    }} >
     <Box component="form" onSubmit={handleSubmit} autoComplete='off' sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin: 'auto',
        border:'1px solid ',
        px: '10px',
        py: '25px',
        gap: 2
     }}
     >
     <Typography variant='h5' color='#646cff'>Login</Typography>

     <TextField 
     name= "name"
     label="Name" 
     type='text'
     value={formdata.name}
     onChange={handleChange}
     />

     <TextField 
        name='phoneNo'
        label="Phone Number"
        type='tel'
        value={formdata.phoneNo}
        onChange={handleChange}
        inputProps={{
            pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
            title: "Phone number must be in the format xxx-xxx-xxxx",
          }}
      />

     <TextField 
      name='email'
      label="email" 
      type="email"
      value={formdata.email}
      onChange={handleChange}
      />
      
      <Button type='submit' variant='contained'>Submit</Button>
     
     </Box>
    </Box>
    </Box>
    )
}