import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

var btnStyle = {
    margin: '10px'
}
var SignDialog = React.createClass({
    getInitialState: function () {
        return {
            signDialogOpen: false
        }
    },
    hideSignDialogHandler: function () {
        this.setState({
            signDialogOpen: false
        }, function () {
            this.props.changeParentStateSignDialogOpen();
        })
    },
    componentWillReceiveProps : function (nextProps) {
        this.setState({
            signDialogOpen: nextProps.signDialogOpen
        });
    },
    render: function () {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={false}
                onTouchTap={this.hideSignDialogHandler}
                style={{marginRight:'10px'}}
            />,
            <FlatButton
                label="sign up"
                primary={false}
                onTouchTap={this.hideSignDialogHandler}
                style={{float:'left'}}
            />,
            <FlatButton
                label="sign in"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
        ];
        return (
            <Dialog
                className="sign-dialog"
                title="ACCOUNT ? SIGN IN : SIGN UP"
                modal={false}
                open={this.state.signDialogOpen}
                onRequestClose={this.hideSignDialogHandler}
            >
                <div className="sign-dialog__row">
                    Do it via:
                </div>

                <div className="sign-dialog__row">
                    <RaisedButton
                        primary={true}
                        style={btnStyle}
                        label="facebook"
                    />
                    <RaisedButton
                        primary={true}
                        style={btnStyle}
                        label="vkontakte"
                    />
                    <RaisedButton
                        primary={true}
                        style={btnStyle}
                        label="google+"
                    />
                </div>
            </Dialog>
        )
    }
})

export default SignDialog;
