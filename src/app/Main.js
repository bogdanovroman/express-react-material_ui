
import React, {Component} from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './partials/Header';
import Content from './Content';
import MyDrawer from './Drawer';

darkBaseTheme.palette.primary1Color = '#ffd67d';
// darkBaseTheme.palette.accent1Color = '#f1f1f1';
// console.log(darkBaseTheme.palette);

var Main = React.createClass({
    getInitialState: function () {
        return {
            drawerStateOpen: false,
            view: 'lists'
        }
    },
    showDrawerHandler: function () {
        this.setState({
            drawerStateOpen: true
        })
    },
    render: function () {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div>
                    <Header showDrawerHandler={this.showDrawerHandler}/>
                    <MyDrawer open={this.state.drawerStateOpen}/>
                    <Content view={this.state.view}/>
                </div>
            </MuiThemeProvider>
        )
    }
})

export default Main;
