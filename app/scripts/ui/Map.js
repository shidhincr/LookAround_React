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
        var defer = Q.defer();
        var latlng = new google.maps.LatLng( location.k, location.D );
        var map = new google.maps.Map( this.refs.mapBackground.getDOMNode(), {zoom: 15} );

        map.panTo( latlng );
        defer.resolve( {latlng: latlng, map: map} );

        return defer.promise;
    },
    _showPlaces: function( mapObj ){
        var request = {
            location: mapObj.latlng,
            radius: 2000,
            types: [this.props.place]
        };

        var infoWindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService( mapObj.map );
        var _this = this;

        service.nearbySearch( request, function(results, status){
            if( status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    _this._drawMarker( results[i], mapObj.map );
                }
            }
        } );
    },
    _drawMarker: function( place, map){
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
        });
    },
    componentDidMount: function(){
        this._getGeocode(this.props.zipcode).then( this._setMapCenter ).then( this._showPlaces );
    },
    componentWillReceiveProps: function(nextProps){
        this._getGeocode(nextProps.zipcode).then( this._setMapCenter ).then( this._showPlaces );
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
