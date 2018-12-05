import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Ladder from './ladder';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary,
    }
});

class Dashboard extends React.Component {
    render() {
        const { classes } = this.props;

        return(
            <div>
                <Grid container spacing={24}>
                    <Grid item md={8} xs={12}>
                        <Paper className={classes.paper}>
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                            >
                                Ladder
                            </Typography>
                            <Ladder />
                        </Paper>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Paper className={classes.paper}>
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                            >
                                Today's schedule
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
};

export default withStyles(styles)(Dashboard);