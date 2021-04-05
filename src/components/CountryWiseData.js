import React,{useState,useEffect} from 'react';
import {Container,TextField,Button,Grid,Paper, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";
import GlobalDataPieChart from './GlobalDataPieChart';
import axios from  "axios";

const useStyle = makeStyles((theme)=>({
    root:{
       width:"100vw",
       height:"150vh",
       marginTop:"30px",
       background:"#e9eafe",
       padding:"30px",
       

    },
    blueColor:{
        color:"blue",
        background:"#fff",
        width:300,
        fontSize:"20px",
        fontWeight:"bold"
    },
    btn:{
      width:"80",
      height:"55px",
      marginLeft:"10px" ,
      },
      paper:{
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          width:"350px",
          height:"200px",
          background:"#fff",
          color:"Blue",
          marginTop:"50px",
          margin:theme.spacing(3),
          
        
      },
      containerP:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"

      },
      font:{
          fontSize:"25px",
          textAlign:"center",
          fontWeight:"bold"

      },
      selectBox:{
          width:"400px",
          height:"50px",
          fontSize:"22px",
          overflow:"hidden"

      },
      selectDays:{
        width:"160px",
        height:"50px",
        fontSize:"22px"

    }
 
   
}))


const CountryWiseData = () => {
 
    const [country,setCountry] = useState("");
    const [confirm,setConfirm] = useState(0);
    const [recover,setRecover] = useState(0);
    const [death,setDeath] = useState(0);
    const [loading,setLoading] = useState(false)
    const [covidSummary,setCovidSummary] = useState([{}]);
    const classes=useStyle();
    console.log(covidSummary,"covidSummary")

    useEffect(()=>{
   async function getCountryWiseData() {
       const result = await fetch(`https://covid19.mathdro.id/api/countries/`);
       
       const data = await result.json();
    
      
       setCovidSummary(data.countries);
       

       
   }
   getCountryWiseData();
   

    },[]);

    const getCountryData =(countryName)=>{
        axios.get(`https://covid19.mathdro.id/api/countries/${countryName}`).
        then(res=>{
            console.log(res);
            setConfirm(res.data.confirmed.value);
            setRecover(res.data.recovered.value);
            setDeath(res.data.deaths.value);
        })
    
     
          
        
       }

    
 const countryHandler =(e)=>{
    setCountry(e.target.value);
    getCountryData(e.target.value);
}


    

    
    return (
       
        <Container className={classes.root} >
            <div className={classes.containerP} >
                <select className={classes.selectBox} value={country} onChange={countryHandler}>
                    <option>Select Country</option>
                    {
                       covidSummary.map((country,index)=>{
                           return(
                               <option key={index} value={country.name}>{country.name}</option>
                           )
                       })

                    }
                
                </select>
               
            </div>


            <Grid className={classes.containerP} container mx="auto">
                <Paper className={classes.paper}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h2" className={classes.font}>Confirmed</Typography>
                    <Typography variant="h3" className={classes.font}>{confirm}</Typography>

                </Grid>
                </Paper>
                <Paper  className={classes.paper}>
                <Grid item xs={12} sm={4}>
                    <Typography  variant="h2" className={classes.font}>Recovered</Typography>
                    <Typography variant="h3" className={classes.font}>{recover}</Typography>

                </Grid>
                </Paper>
                <Paper  className={classes.paper}>
                <Grid item xs={12} sm={4}>
                    <Typography  variant="h2" className={classes.font}>Death</Typography>
                    <Typography variant="h3" className={classes.font}>{death}</Typography>

                </Grid>
                </Paper>

            </Grid>
            
        <GlobalDataPieChart deaths={death} confirm={confirm} recover={recover}/>
        
            
            
        </Container>
       
    )
}

export default CountryWiseData
