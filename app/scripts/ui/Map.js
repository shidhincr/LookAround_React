'use strict';

var React  = require('react');
var Router = require('react-router');
var Q = require('q');

var Map = React.createClass({
    _getGeocode: function(zipcode){
        var location, geocoder = new google.maps.Geocoder();
        var defer = Q.defer();
        geocoder.geocode( {'address': zipcode}, function( results, status ){
            location = results[ 0 ].geometry.location;
            defer.resolve( location );
        });
        return defer.promise;
    },
    _setMapCenter: function( location ){
        var latlng = new google.maps.LatLng( location.k, location.D );
        var map = new google.maps.Map( this.refs.mapBackground.getDOMNode(), {zoom: 15} );
        map.panTo( latlng );
    },
    componentDidMount: function(){
        this._getGeocode(this.props.zipcode).then( this._setMapCenter );
    },
    componentWillReceiveProps: function(nextProps){
        this._getGeocode(nextProps.zipcode).then( this._setMapCenter );
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
