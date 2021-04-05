import React,{useState,useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import{Grid,Paper} from"@material-ui/core";
import GlobalDataPieChart from './GlobalDataPieChart';

const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow:1,
        
    },
    paper:{
        padding:theme.spacing(2),
        textAlign:"center",
        color:theme.palette.text.secondary,
    },
    blueColor:{
        color:"blue",
        fontWeight:"900"
    }
}))


const GlobalData = () => {
    const classes = useStyles();
    const [globalData,setGlobalData] = useState({});
    const [deathVal,setdeathVal] = useState(0);
    const [confirmVal,setConfirmVal] = useState(0);
    const [recoverVal,setRecoverVal] = useState(0);

    useEffect(()=>{
        async function getGlobalData(){
            const result = await fetch("https://covid19.mathdro.id/api");
            const data = await result.json();
            //delete unnccessary data

            delete data.countries;
            delete data.countryDetail;
            delete data.dailySummary;
            delete data.dailyTimeSeries;
            delete data.image;
            delete data.lastUpdate;
            delete data.source;

            setGlobalData(data);
            setdeathVal(data.deaths.value);
            setConfirmVal(data.confirmed.value);
            setRecoverVal(data.recovered.value);


        }
        getGlobalData()
    },[]);

    return (
        <div className={classes.root}>
            <Grid style={{marginTop:"30px"}} container spacing={4}>
                {Object.keys(globalData).map((key,ind)=>{

                    return(
                        <Grid item xs={12} sm={4} key={ind}>
                    <Paper className={classes.paper}>
                        <span className={classes.blueColor}>{key.toUpperCase()}</span><br />
                        <br /> {globalData[key].value}

                    </Paper>
                </Grid>
            
                    )
                })}

                </Grid>

                <GlobalDataPieChart deaths={deathVal} confirm={confirmVal} recover={recoverVal}/>

            
        </div>
    )
}

export default GlobalData;
