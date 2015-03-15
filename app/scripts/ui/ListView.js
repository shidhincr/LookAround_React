'use strict';

var React = require('react');
var eventEmitter = require('event-emitter');

var ListView = React.createClass({
  getInitialState: function() {
    return {
      listData: []
    }
  },
  componentDidMount: function () {
    eventEmitter.on('placesUpdate', this.updateList);
  },
  updateList: function(results) {
    this.setState({
      listData: results
    });
  },
  render: function () {
    var listItems = this.state.listData.map(function(index, item) {
      return (
        <tr id={'listItem'+ index}>
          <td>{index}</td>
          <td>something</td>
          <td>som</td>
          <td>shidhin</td>
        </tr>
      )
    });
    return (
      <div className="list-view">
        <table className="table table-striped">
          <thead>
          <tr>
            <th>#</th>
            <th>NAME</th>
            <th>ADDRESS</th>
            <th>LOCATION</th>
          </tr>
          </thead>
          <tbody>
            {listItems}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = ListView;
