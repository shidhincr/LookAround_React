'use strict';

var React   = require('react');
var Input   = require('react-bootstrap/Input');
var Button  = require('react-bootstrap/Button');

var ZipcodeInput = React.createClass({
    displayName: 'ZipcodeInput',
    getInitialState: function(){
        return  {isZipcodeValid: false};
    },
    _validate: function(e){
        var zipcodeRegex = /^\d{6}$/;
        var zipcode = e.target.value;
        if( zipcode.length ){
            if( zipcodeRegex.test(zipcode) ){
                this.setState({isZipcodeValid: true});
            }else{
                this.setState({isZipcodeValid: false});
            }
        }else{
            this.setState({isZipcodeValid: false});
        }
    },
    render: function(){
        var zipcodeComponentStyle = {width: '300px'};
        return(
            <div className="zipcodeComponent" style={zipcodeComponentStyle}>
                <Input
                    type="text"
                    placeholder="560068"
                    className="zipcodeInput"
                    buttonAfter={<Button bsStyle="primary" className="goButton" disabled={!this.state.isZipcodeValid}>Go</Button>}
                    onChange={this._validate}
                />
                {this.state.isZipcodeValid &&
                    <span className="zipcodeValidCheck">Valid zipcode</span>
                }
            </div>
        );
    }
});

module.exports = ZipcodeInput;
