
import './App.css';
import { Grid } from '@material-ui/core';

import CashflowReportCard from './components/CashflowReportCard/CashflowReportCardComponent';
import CashFlowDetailsPieChart from './components/CashFlowDetailsPieChart/CashFlowDetailsPieChart';
import CashFlowTransactionLists from './components/CashFlowTransactionLists/CashFlowTransactionLists';

function App() {
  const cashflowReportData = [
    {
      price: 4500.82,
      title: "Today"
    },
    {
      price: 20000.99,
      title: "Current Week"
    },
    {
      price: 204500.16,
      title: "Current Month"
    },
    {
      price: 1254500.25,
      title: "Current Year"
    }
  ]



  return (
    <div className='App-container'>
      <Grid container direction="row">
        <Grid container item xs={3} >
          <CashflowReportCard data={cashflowReportData[0]} />
        </Grid>
        <Grid container item xs={3}>
          <CashflowReportCard data={cashflowReportData[1]} />
        </Grid>
        <Grid container item xs={3}>
          <CashflowReportCard data={cashflowReportData[2]} />
        </Grid>
        <Grid container item xs={3}>
          <CashflowReportCard data={cashflowReportData[3]} />
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid container item xs={3}>
          <CashFlowDetailsPieChart />
        </Grid>
        <Grid container item xs={9}>
          <CashFlowTransactionLists />
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
