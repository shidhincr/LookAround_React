var React  = require('react');
var Router = require('react-router');

/** @jsx React.DOM */
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
        //TODO:: Ivin: Couldnt find a way to pass the dom reference from the place of usage. Hardcoding for now.
        var map = new google.maps.Map( $('.map-background')[0], mapSettings );
        this.setState({map: map});
    },
    componentDidUpdate: function(){
        var map = this.state.map;
        map.panTo( this.getMapCenter() );
    },
    render: function(){
        return (
            <div className='map'></div>
        );
    }
});

module.exports = Map;
