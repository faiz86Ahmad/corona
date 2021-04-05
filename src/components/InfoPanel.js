import React,{useState} from 'react';
import {Tabs,Tab,AppBar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import GlobalData from './GlobalData';
import CountryWiseData from './CountryWiseData';
import Precaution from './Precaution';

const usestyles = makeStyles((theme)=>({
    root:{
        margin:"0px auto",
    

    },
    redColor:{
        color:"red",
    },
    blueColor:{
        color:"blue"
    },

    greenColor:{
        color:"green"
    },

    
}))

const InfoPanel = () => {
    const [value,setValue] = React.useState(0);
    const classes = usestyles();
    const HandleTabs =(e,val)=>{
        console.warn(val);
        setValue(val)

    }
    return (
        <div>
            <AppBar  position='static'>
            
                <h1>Covid-19</h1>
                
        <Tabs value={value}  onChange={HandleTabs} className={classes.root}>
            <Tab label="WorldData"></Tab>
            <Tab label="CountryData"></Tab>
            <Tab label="pre-covid"></Tab>
        </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>World Data
        <GlobalData />
        </TabPanel>
        <TabPanel value={value} index={1}>Country Data
        <CountryWiseData />
        </TabPanel>
        <TabPanel value={value} index={2}>Precaution covid-19
        <Precaution />
        </TabPanel>
        </div>
    )
}
export default InfoPanel;

function TabPanel(props){
    const classes = usestyles();
    const {children,value,index}=props
    return(
        <div>
            {
                value===index && (
            <h1 className={classes.blueColor}>{children}</h1>
                )
}
        </div>

    )
}



