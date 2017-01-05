import React, {Component} from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ListsDropdown from './ListsDropdown';


var Lists = React.createClass({
    getInitialState: function() {
        return {view: this.props.view, lists: this.props.lists}
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({view: nextProps.view, lists: nextProps.lists});
    },
    handleClick: function(item) {
        this.changeMainViewTo('list', item._id);
    },
    handleActionsButtonClick: function(item, event) {
        event.stopPropagation();
        return;
        // some logic
    },
    changeMainViewTo:function(newView, id){
      this.props.setNewViewTo(newView, id);
    },
    render: function() {
        var lists = this.state.lists;
        var listTemplate = lists.map(function(item, index) {
            var childBoundClick = this.handleActionsButtonClick.bind(this, item);
            var boundClick = this.handleClick.bind(this, item);
            return (
                <TableRow
                  selectable={false}
                  onClick={boundClick}
                  key={index}
                  displayBorder={false}
                  >
                    <TableRowColumn>{index}</TableRowColumn>
                    <TableRowColumn>{item.name}</TableRowColumn>
                    <TableRowColumn>{item.pubDate}</TableRowColumn>
                    <TableRowColumn>
                        <ListsDropdown />
                    </TableRowColumn>
                </TableRow>
            )
        }.bind(this));
        return (
            <Table className="table-parent" fixedHeader={true} selectable={false}>
                <TableHeader displaySelectAll={false} enableSelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>#</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>pubDate</TableHeaderColumn>
                        <TableHeaderColumn>Actions</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {listTemplate}
                </TableBody>
            </Table>
        )
    }
})

export default Lists;
