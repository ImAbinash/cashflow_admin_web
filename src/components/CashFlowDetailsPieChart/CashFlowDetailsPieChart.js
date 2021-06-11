import React from 'react';
import { Chart } from "react-google-charts";
import { Card, CardContent, Grid } from '@material-ui/core';

import "./CashFlowDetailsPieChart.css"

const CashFlowDetailsPieChart = () => {
    return (
        <Card className="CFDPC-Card">
            <CardContent className="CFDPC-CardContent">
                <Chart
                    width={'300px'}
                    height={'250px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Type', 'Amount'],
                        ['Expenses', 20000],
                        ['Saving', 4000],
                        ['Debt', 500]
                    ]}
                    options={{
                        title: 'Current Month',
                        chartArea: {'width': '95%', 'height': '90%'},
                        // legend: 'none',
                        pieSliceText: 'label',
                        slices: {
                            0: { offset: 0.1 },
                            1: { offset: 0.1 },
                            2: { offset: 0.1 },
                            3: { offset: 0.1 },
                        },
                        colors:["#26D048","#26BAFF","#AA72C1"],
                    }}
                    rootProps={{ 'data-testid': '3' }}
                />
            </CardContent>
        </Card>
    );
}

export default CashFlowDetailsPieChart;