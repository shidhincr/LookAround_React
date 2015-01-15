'use strict';

var React = require('react');
var Input   = require('react-bootstrap/Input');
var _ = require('lodash');
var request = require('superagent');
var Router = require('react-router');
var initialPlaces = [];

/**
 * Escape the regex characters and trim the space.
 * @param  {[String]} text
 * @return {[String]}      [return a valid regex expression string]
 */
var makeValidRegex = function(text){
  return text.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&").replace(/^\s+|\s+$/gm,'');
};

var Filters = React.createClass({
    mixins: [Router.State],
    displayName: 'Filters',
    getInitialState: function(){
        return { places: initialPlaces };
    },
    /**
     * Get the initial places.json data once the component is mounted.
     */
    componentDidMount: function(){
        var self = this;
        request.get('/data/places.json').end(function(response){
            initialPlaces = response.body && response.body.data;
            self.setState({
               places: initialPlaces || [] 
            });
        });
    },
    render: function () {
        var zipcode = this.getParams().zipcode;
        var list = _.map(this.state.places, function(place, index){
                        var key = [place.url.replace(/\//,''),index].join('_');
                        return (
                            <li key={key}>
                                <a href={'#/search/'+ zipcode + place.url}>
                                    {place.title}
                                </a>
                            </li>)
                    });
        return (
            <div>
				<Input type="text" ref="searchPlace" className="input-medium search-query" label='Filter By' onChange={this.filterPlaces}/>
            	<div className='bs-docs-sidebar places-container'>
            		<ul className='nav nav-list bs-docs-sidenav affix-top'>
            			{list}
            		</ul>
            	</div>
            </div>
        );
    },

    /**
     * Filter the places according to the text entered.
     * @return {[type]} [description]
     */
    filterPlaces: function(){
        var filterQuery = makeValidRegex(this.refs.searchPlace.getValue());
        var rgx = new RegExp(filterQuery, 'ig');
        var filteredPlaces = _.filter(initialPlaces, function(place){
            return Boolean(place.url.match(rgx));
        });
        
        this.setState({
            places: filteredPlaces
        });
    }
});

module.exports = Filters;