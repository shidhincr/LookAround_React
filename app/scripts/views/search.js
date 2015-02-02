'use strict';

var React   = require('react');
var Header  = require('../ui/header.js');
var Filters = require('../ui/filters.js');
var Results = require('../ui/results.js');
var Grid    = require('react-bootstrap/Grid');
var Row     = require('react-bootstrap/Row');
var Col     = require('react-bootstrap/Col');

var Search  = React.createClass({
    render: function(){
        var zipcode = location.href.split(/search\//)[1].match(/\d+/g)[0];
        return (
            <Grid fluid>
                <Header zipcode={zipcode}/>
                <div className='row-fluid clearfix'>
                    <Col xs={3} className='filters'>
                        <Filters />
                    </Col>
                    <Col xs={9}>
                        <Results zipcode={zipcode}/>
                    </Col>
                </div>
            </Grid>
        );
    }
});

module.exports = Search;
