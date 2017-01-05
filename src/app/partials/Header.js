import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import SignDialog from '../SignDialog';


var iconElementRightStyle = {
  position: 'absolute',
  top: '8px',
  right: '10px'
}


var Header = React.createClass({
    getInitialState: function () {
        return {
            signDialogOpen: false,
            appbarTitle: 'Welcome'
        }
    },
    showDrawerHandler: function () {
        this.props.showDrawerHandler();
    },
    changeSignDialogStateToTrue: function () {
        this.setState({
            signDialogOpen: true
        })
    },
    changeSignDialogStateToFalse: function () {
        this.setState({
            signDialogOpen: false
        })
    },
    render: function () {
        return (
            <div>
                <AppBar
                    onLeftIconButtonTouchTap={this.showDrawerHandler}
                    title={this.state.appbarTitle}
                    zDepth={2}
                    onRightIconButtonTouchTap={this.changeSignDialogStateToTrue}
                    iconElementRight={
                        <FlatButton label="sign in" style={iconElementRightStyle}/>
                    }
                />
                <SignDialog
                    signDialogOpen={this.state.signDialogOpen}
                    changeParentStateSignDialogOpen={this.changeSignDialogStateToFalse}
                />
            </div>
        )
    }
})

export default Header;
