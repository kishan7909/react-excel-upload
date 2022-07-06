import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Line Chart',
        },
    },

};


const LineChart = ({ labels, rows }) => {

    let newdata = rows.map(item => {
        return { x: moment(item['OrderDate']).format("DD-MM-YYYY hh:mm:ss"), y: parseFloat(item['ListPrice']) }
    })

    const data = {
        datasets: [
            {
                label: 'ListPrice',
                data: newdata,
            }
        ],
    };


    return (
        <div>
            <Line options={options} data={data} />
        </div>
    )
}

export default LineChart
