
import { useEffect, useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import { Box,Typography,CircularProgress} from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function Data()
{
   const [apiData,setApiData]= useState([])
   const [loading,setLoading]= useState(true)
   const navigate = useNavigate()
   
   useEffect(()=>{

    const getdata = JSON.parse(localStorage.getItem('userInfo'))

    if(getdata.name && getdata.phoneNo && getdata.email)
    {
      fetch(' https://jsonplaceholder.typicode.com/posts').
      then((response)=> response.json()).then((data)=>{ setApiData(data); setLoading(false)})
    }
    else
    {
     alert("Please enter all details")
     navigate(-1)
    }
    
   },[])

   return(
     
     <>
    {loading ? <Box sx={{display:'flex',justifyContent:'center',alignItems:"center",height:'100vh'}}><CircularProgress/></Box>  :
    <Box>  
      <Typography variant="h4">Data</Typography>
       <Box sx={{height:400, width: '100%' }}>
       <DataGrid 
       columns={[
         {field:'id', headerName:'ID', width:70},
         {field:'userId', headerName:'USER ID',width:70},
         {field:'title',headerName:'TITLE',width:180,},
         {field:'body',headerName:'BODY',width:800}
       ]}
       rows={apiData}
       rowsPerPageOptions={[25]}
       pageSize={25}
       autoHeight={true}
       />
    </Box>
    </Box>
      }
      </>
   ) 
}