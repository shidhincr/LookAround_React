'use strict';

var React = require('react');
var Header = require('../ui/header.js');
var Filters = require('../ui/filters.js');
var Results = require('../ui/results.js');
var Grid = require('react-bootstrap/Grid');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');


var Search  = React.createClass({
    render: function(){
        return (
            <Grid fluid>
                <div className='row-fluid'>
                    <Header />
                </div>
                <div className='row-fluid'>
                    <Col xs={3} className='container well'>
                        <Filters />
                    </Col>
                    <Col xs={9}>
                        <Results />
                    </Col>
                </div>
            </Grid>
        );
    }
});

module.exports = Search;