import React, {Component} from 'react';
import Lists from './Lists';
import CurrentList from './CurrentList';
import FlatButton from 'material-ui/FlatButton';

var Content = React.createClass({
    getInitialState: function() {
        return {
          view: this.props.view,
          lists: [],
          currentListId: 0
        }
    },
    componentWillMount: function() {
        this.getAllLists();
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({view: nextProps.view});
    },
    setNewView: function(newView, id){
      this.setState({
          view: newView,
          currentListId: id
      })
    },
    getAllLists: function() {
        var source = '/all_lists';
        this.listsRequest = $.get(source, function(result) {
            var Lists = JSON.parse(result);
            this.setState({lists: Lists});
        }.bind(this));
    },
    changeViewToLists: function(){
      this.setState({
        view: 'lists'
      })
    },
    render: function() {
        var Data;
        if (this.state.view == 'lists') {
            Data = <Lists
              view={this.state.view}
              lists={this.state.lists}
              setNewViewTo={this.setNewView}
              />;
        } else if(this.state.view == 'list'){
            Data = <CurrentList
              lists={this.state.lists}
              currentListId={this.state.currentListId}
                />;
        }
        var disabled = this.state.view == 'list' ? false : true;
        return (
            <div className="content-wrapper">
                <FlatButton
                  label="To lists"
                  primary={true}
                  onClick={this.changeViewToLists}
                  disbled={disabled}
                  />
                {Data}
            </div>
        )
    }
})

export default Content;
