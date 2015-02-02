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
                this.setState({isZipcodeValid: true, zipcode: zipcode});
            }else{
                this.setState({isZipcodeValid: false});
            }
        }else{
            this.setState({isZipcodeValid: false});
        }
    },
    _search: function(){
        window.location = "#/search/"+this.state.zipcode+"/atm";
    },
    render: function(){
        var zipcodeComponentStyle = {width: '300px'};
        return(
            <div className="zipcodeComponent" style={zipcodeComponentStyle}>
                <Input
                    type="text"
                    placeholder="560068"
                    defaultValue={this.props.zipcode}
                    buttonAfter={<Button bsStyle="primary" className="goButton" disabled={!this.state.isZipcodeValid} onClick={this._search}>Go</Button>}
                    onChange={this._validate}
                />
                {this.props.ackWhenValid && this.state.isZipcodeValid &&
                    <span className="alert-success">Valid zipcode</span>
                }
            </div>
        );
    }
});

module.exports = ZipcodeInput;
