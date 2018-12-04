import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Layout from './components/main-layout/layout';
import { withStyles } from '@material-ui/core/styles';

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
    const { classes, theme } = this.props;

     return(
      <div className={classes.root}>
        <Layout />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          Testing 123
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);
