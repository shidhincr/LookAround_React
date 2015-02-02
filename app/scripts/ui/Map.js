'use strict';

var React  = require('react');
var Router = require('react-router');

var Map = React.createClass({
    _getMapCenter: function(){
        var location,
            latlng,
            mapSettings,
            map,
            _this = this,
            geocoder = new google.maps.Geocoder();

        geocoder.geocode( {'address': _this.props.zipcode}, function( results, status ){
            location = results[ 0 ].geometry.location;
            latlng = new google.maps.LatLng( location.k, location.D );
            mapSettings = {
                center: latlng,
                zoom: 15
            };
            map = new google.maps.Map( _this.refs.mapBackground.getDOMNode(), mapSettings );
            map.panTo( latlng );
        });
    },
    render: function(){
        this._getMapCenter();
        return (
            <div className='map-background' ref='mapBackground'></div>
        );
    }
});

module.exports = Map;
