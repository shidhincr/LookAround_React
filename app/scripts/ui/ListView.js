'use strict';

var React = require('react');
var eventEmitter = require('../utils/eventEmitter');

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
    var listItems = this.state.listData.map(function(item, index) {
      return (
        <tr id={'listItem'+ index } key={item.id}>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td>{item.vicinity}</td>
          <td>{item.geometry.location.D},{item.geometry.location.k}</td>
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
