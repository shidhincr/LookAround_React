'use strict';

var React  = require('react');
var Router = require('react-router');

var Map = React.createClass({
    _getGeocode: function(zipcode, callback){
        var location, geocoder = new google.maps.Geocoder();
        geocoder.geocode( {'address': zipcode}, function( results, status ){
            location = results[ 0 ].geometry.location;
            callback( location );
        });
    },
    _setMapCenter: function( location ){
        var latlng = new google.maps.LatLng( location.k, location.D );
        var map = new google.maps.Map( this.refs.mapBackground.getDOMNode(), {zoom: 15} );
        map.panTo( latlng );
    },
    componentDidMount: function(){
        this._getGeocode(this.props.zipcode, this._setMapCenter);
    },
    componentWillReceiveProps: function(nextProps){
        this._getGeocode(nextProps.zipcode, this._setMapCenter);
    },
    shouldComponentUpdate: function(nextProps, nextState){
        return nextProps.zipcode!=this.props.zipcode;
    },
    render: function(){
        return (
            <div className='map-background' ref='mapBackground'></div>
        );
    }
});

module.exports = Map;
