import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

var ListsDropdown = React.createClass({
    getInitialState: function() {
        return {value: 1}
    },
    handleChange: function(event, index, value) {
        this.setState({value: value})
    },
    render: function() {
        return (
            <IconMenu
            iconButtonElement={< IconButton > <FontIcon className="material-icons">more_vert</FontIcon> < /IconButton>}
            anchorOrigin={{
                horizontal: 'middle',
                vertical: 'center'
            }} targetOrigin={{
                horizontal: 'middle',
                vertical: 'center'
            }}>
                <MenuItem primaryText="Edit"/>
                <MenuItem primaryText="Remove"/>
                <MenuItem primaryText="To Favourites"/>
            </IconMenu>
        )
    }
})

export default ListsDropdown;
