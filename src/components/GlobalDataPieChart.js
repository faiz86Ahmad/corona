import React from 'react';
import {Pie} from "react-chartjs-2";
import useMediaQuery from '@material-ui/core/useMediaQuery';


const SimpleMediaScreen =()=>{
    const matches = useMediaQuery('(min-width:600px)');
}




const GlobalDataPieChart = (props) => {
    
    const data = {
        labels: [
            'Death',
            'Confirmed',
            'Recovered'
        ],
        datasets: [{
            data: [props.deaths,props.confirm,props.recover],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };
    


    return (
     <div className="piechart">
          <h4>Covid-19 PieChart</h4>
          <div className="container">
          <Pie data={data} height={90}/>
        
          </div>
          </div>
          
      );
    }


export default GlobalDataPieChart;
