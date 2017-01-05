import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';


var MyDrawer = React.createClass({
    getInitialState: function () {
        return {
            open: false
        }
    },
    onTouchTapHandler: function () {
        this.setState({
            open: false
        })
    },
    componentWillReceiveProps : function (nextProps) {
        if (nextProps.open !== this.state.open) {
            this.setState({
                open: nextProps.open
            });
        }
    },
    render: function () {
        return (
            <div>
                <Drawer
                    open={this.state.open}
                    docked={false}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem className="drawer-header" >
                        <IconButton onTouchTap={this.onTouchTapHandler} className="drawer-header-btn">
                            <FontIcon className="material-icons">menu</FontIcon>
                        </IconButton>
                    </MenuItem>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        )
    }
})

export default MyDrawer;