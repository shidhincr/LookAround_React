'use strict';

var React = require('react');
var Map   = require('../ui/Map.js');
var TabPane = require('react-bootstrap/TabPane');
var TabbedArea = require('react-bootstrap/TabbedArea');

var Results = React.createClass({
    displayName: 'Results',
    render: function () {
        return (
            <div className="results-section">
                <TabbedArea defaultActiveKey={1}>
                    <TabPane eventKey={1} tab="Map view">
                        <Map zipcode={this.props.zipcode}/>
                    </TabPane>
                    <TabPane eventKey={2} tab="List view">
                        List of Results here
                    </TabPane>
                </TabbedArea>
            </div>
        );
    }
});

module.exports = Results;
