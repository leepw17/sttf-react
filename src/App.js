import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Layout from './components/main-layout/layout';
import Dashboard from './components/dashboard/dashboard';
import Schedule from './components/schedule/schedule';
import { withStyles } from '@material-ui/core/styles';

import { Switch, Route } from 'react-router-dom';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
})

class App extends React.Component {

  render() {
    const { classes } = this.props;

     return(
      <div className={classes.root}>
        <CssBaseLine />
        <Layout />
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <Switch>
              <Route exact path='/' component={ Dashboard } />
              <Route path='/schedule' component={ Schedule } />
            </Switch>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);
