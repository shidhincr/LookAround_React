'use strict';

var React  = require('react');
var Router = require('react-router');

var Map = React.createClass({
    getDefaultProps: function(){
        return{
            initialZoom: 15,
            centerLat: 12.97160,
            centerLng: 77.59456
        };
    },
    getMapCenter: function(){
        return new google.maps.LatLng(this.props.centerLat,this.props.centerLng);
    },
    componentDidMount: function(rootNode){
        var mapSettings = {
            center: this.getMapCenter(),
            zoom: this.props.initialZoom
        };
        var map = new google.maps.Map( this.refs.mapBackground.getDOMNode(), mapSettings );
        this.setState({map: map});
    },
    componentDidUpdate: function(){
        var map = this.state.map;
        map.panTo( this.getMapCenter() );
    },
    render: function(){
        return (
            <div className='map-background' ref='mapBackground'></div>
        );
    }
});

module.exports = Map;
