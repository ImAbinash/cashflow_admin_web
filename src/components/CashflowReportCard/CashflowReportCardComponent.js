import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import { Chart } from "react-google-charts";

import "./CashflowReportCardComponent.css";

function CashflowReportCard(props) {
    return (
        <Card className="CFRC-Card">
            <CardContent className="CFRC-CardContent">
                <Grid container direction="row">
                    <Grid item xs={5}>

                        <Chart
                            width={'100px'}
                            height={'100px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Type', 'Amount'],
                                ['Expenses', 20000],
                                ['Saving', 4000],
                                ['Debt', 500]
                            ]}
                            options={{
                                // title: 'Cashflow',
                                //sliceVisibilityThreshold: 0.2, // 20%
                                legend: {position: 'bottom'},
                                pieSliceText: 'label',
                                // title: 'Cashflow',
                                pieStartAngle: 100,
                                chartArea: {'width': '80%', 'height': '90%'},
                                colors:['#EF6D9F','#03C9AC','#222222']
                            }}
                            rootProps={{ 'data-testid': '3' }}
                        />

                    </Grid>
                    <Grid item xs={7}>
                        <div className="CFRC-CardContentDetailsBlock">
                            <p className="CFRC-Cardprice">{props.data.price}</p>
                            <p className="CFRC-Cardtitle">{props.data.title}</p>
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    );
};

export default CashflowReportCard;