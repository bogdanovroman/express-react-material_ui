import React, {Component} from 'react'; 
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Toggle from 'material-ui/Toggle';

var CurrentList = React.createClass({
    render: function() {
        var array = this.props.lists,
            id = this.props.currentListId;
        for (var i = 0; i < array.length; i++) {
            var list;
            if (array[i]._id == id) {
                list = array[i];
            }
        }
        return (
            <div>

              <Paper zDepth={2}>
                  <List >
                    <ListItem primaryText={list.name}/>
                  </List>
              </Paper>
            </div>
        )
    }
})

export default CurrentList;
