import React from 'react';
import { Card,CardContent,Grid } from '@material-ui/core';

import Auxiliary from '../../Auxiliary/Auxiliary';
import "./CashflowReportCardComponent.css";

function CashflowReportCard(props) {
    return (
        <Card className="CFRC-Card">
            <CardContent className="CFRC-CardContent">
                <Grid container direction="row">
                    <Grid item xs={4}>
                        chartsssss
                    </Grid>
                    <Grid item xs={8}>
                        <p className="CFRC-Cardprice">{props.data.price}</p>
                        <p className="CFRC-Cardtitle">{props.data.title}</p>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    );
};

export default CashflowReportCard;