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
        var zipcodeRegex = /^\d{5,6}$/;
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
    _search: function(event){
      window.location = "#/search/"+this.state.zipcode+"/atm";
      event.preventDefault();
    },
    render: function(){
        var zipcodeComponentStyle = {width: '300px'};
        return(
            <div className="zipcodeComponent" style={zipcodeComponentStyle}>
                <form onSubmit={this._search}>
                  <Input
                    type="text"
                    placeholder="560068"
                    defaultValue={this.props.zipcode}
                    buttonAfter={<Button bsStyle="primary" className="goButton" disabled={!this.state.isZipcodeValid} type="submit" onClick={this._search}>Go</Button>}
                    onChange={this._validate}
                  />
                  {this.props.ackWhenValid && this.state.isZipcodeValid && <div className="validation-feedback alert-success">Valid zipcode</div>}
                </form>
            </div>
        );
    }
});

module.exports = ZipcodeInput;
