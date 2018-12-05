import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { withStyles, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import '../../data/ladder-data';
import { LADDER_DATA } from '../../data/ladder-data';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper
    },
    avatar: {
        margin: 10,
        backgroundColor: '#ff5722',
        color: '#fff',
    },
    chipavatar:{
        backgroundColor: '#ff5722',
        color: '#fff',
    },
    chip: {
        margin: theme.spacing.unit,
    },
    ladderfull: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
        width: '100%',
    },
    laddermin:{
        [theme.breakpoints.up('xs')]: {
            display: 'none',
        }
    },
    griditemcontainer: {
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        padding: 10,
    },
    gridfull: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        }
    },
    gridmin: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    right: {
        textAlign: 'right',
    },

});

function handleClick() {
    alert('You want to challenge?');
}

class Ladder extends React.Component{
    render() {
        const { classes } = this.props;
        return (
         
            <div className={classes.root}>
                <Grid container spacing={24}>
                { LADDER_DATA.map((obj, index) => (
                    <Grid key={index} container className={classes.griditemcontainer}>
                        <Grid container alignItems='center' className={classes.gridfull}>
                            <Grid item sm={2}>
                                <Avatar className={classes.avatar}>{obj.rank}</Avatar>
                            </Grid>
                            <Grid item sm={7}>
                                {<Typography
                                    variant="subtitle1"
                                >
                                    {obj.name}
                                </Typography>}
                            </Grid>
                            <Grid item sm={3}  className={classes.right}>
                                { obj.challenged ? (
                                    <Chip
                                    label="Challenge"
                                    onClick={handleClick}
                                    className={classes.chip}
                                    color='secondary'
                                    clickable
                                    >
                                    </Chip>
                                ) : (
                                    <Chip
                                    label="Unchallengeable"
                                    className={classes.chip}
                                    variant="outlined"
                                >
                                </Chip>
                                )}
                            </Grid>
                        </Grid>
                        <Grid container spacing={16} className={classes.gridmin}>
                            <Grid item xs={6}>
                                <Chip
                                    avatar={<Avatar className={classes.avatar}>{obj.rank}</Avatar>}
                                    label={obj.name}
                                    className={classes.chip}
                                    variant="outlined"
                                >
                                </Chip>
                            </Grid>
                            <Grid item xs={6} className={classes.right}>
                                { obj.challenged ? (
                                    <Chip
                                    label="Challenge"
                                    onClick={handleClick}
                                    className={classes.chip}
                                    color='secondary'
                                    clickable
                                    >
                                    </Chip>
                                ) : (
                                    <Chip
                                    label="Unchallengeable"
                                    className={classes.chip}
                                    variant="outlined"
                                >
                                </Chip>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Ladder);

/*
                <List>
                    { LADDER_DATA.map((obj, index) => (
                        <div key={index}>
                            <Divider />
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar className={classes.avatar}>{obj.rank}</Avatar>
                                </ListItemIcon>
                                <ListItemText primary={obj.name}>
                                </ListItemText>
                                <ListItemSecondaryAction>
                                    { obj.challenged ? (
                                        <Chip
                                        label="Challenge"
                                        onClick={handleClick}
                                        className={classes.chip}
                                        color='secondary'
                                        clickable
                                        >
                                        </Chip>
                                    ) : (
                                        <Chip
                                        label="Unchallengeable"
                                        className={classes.chip}
                                        variant="outlined"
                                    >
                                    </Chip>
                                    )}
                                </ListItemSecondaryAction>
                            </ListItem>
                        </div>
                    ))}
                </List>
                */