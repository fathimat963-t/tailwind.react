import React, { useState } from "react";

import Form from "./Components/Form";
import Preview from "./Components/Preview";
import { Container, Grid } from "@mui/material";

const App = () => {

    const [adhardata, setadhardata]= useState({

        fullName:'',
        DOB:'',
        gender:'',
        housename:'',
        street:"",
        district:'',
        state:'',
        pincode:'',
        phonenumber:"",
        email:'',
        identityproof:'',
        addressproof:'',
        fathername:'',
        mothername:'',
        maritalstatus:'',
        nationality:'',
        occupation:""


    })

 return (

   <Grid className="bg-gray-900" sx={{p:6}} container spacing={3}>
    <Grid size={6}>
<Form className="m-2" setadhardata={setadhardata} adhardata={adhardata}/>
    </Grid>
   <Grid size={6}>
   <Preview adhardata={adhardata}/>
   </Grid>
   </Grid>
  

  
  )
}


export default App;