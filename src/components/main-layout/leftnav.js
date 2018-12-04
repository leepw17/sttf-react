import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/';
import Hidden from '@material-ui/core/Hidden';

const drawerWidth = 200;

const styles = theme => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        }
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar
});

class Leftnav extends React.Component {
    state = {
        mobileOpen: false
    }
    render(){
        const { classes } = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbar}>
                    Snag<br/>
                    Table Tennis Federation
                </div>
                <Divider />
                <List>
                    <ListItem button key="Home">
                        <ListItemText primary="Home" />
                    </ListItem>
                </List>
            </div>
        );

        return(
            <nav className={classes.drawer}>
                <Hidden smUp implementation="css">
                    <Drawer
                        container = {this.props.container}
                        variant="temporary"
                        anchor={'left'}
                        open={this.state.mobileOpen}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true
                        }}
                    >
                    {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            variant="permanent"
                            open
                        >
                        {drawer}
                        </Drawer>
                </Hidden>
            </nav>
        );
    }
}

Leftnav.propTypes = {
    classes: PropTypes.object.isRequired,
    container: PropTypes.object,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Leftnav);