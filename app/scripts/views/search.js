'use strict';

var React   = require('react');
var Router  = require('react-router');
var Header  = require('../ui/header.js');
var Filters = require('../ui/filters.js');
var Results = require('../ui/results.js');
var Grid    = require('react-bootstrap/Grid');
var Row     = require('react-bootstrap/Row');
var Col     = require('react-bootstrap/Col');

var Search  = React.createClass({
    render: function(){
        var query   = Router.HashLocation.getCurrentPath().split(/search\//)[1].split('/');
        var zipcode = query[0];
        var place   = query[1];
        return (
            <Grid fluid>
                <Header zipcode={zipcode}/>
                <div className='row-fluid clearfix'>
                    <Col xs={3} className='filters'>
                        <Filters />
                    </Col>
                    <Col xs={9}>
                        <Results zipcode={zipcode} place={place}/>
                    </Col>
                </div>
            </Grid>
        );
    }
});

module.exports = Search;
