'use strict';

var React   = require('react');
var Input   = require('react-bootstrap/Input');
var Button  = require('react-bootstrap/Button');

var ZipcodeInput = React.createClass({
    displayName: 'ZipcodeInput',
    validate: function(e){
        var zipcodeRegex = /^\d{6}$/;
        var zipcode = e.target.value;
        if( zipcode.length ){
            if( zipcodeRegex.test(zipcode) ){
                $('.goButton').removeAttr('disabled');
                $('.zipcodeValidCheck').show();
            }else{
                $('.goButton').attr('disabled','disabled');
                $('.zipcodeValidCheck').hide();
            }
        }else{
            $('.zipcodeValidCheck').hide();
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
                    buttonAfter={<Button bsStyle="primary" className="goButton" disabled>Go</Button>}
                    onChange={this.validate}
                />
                <span className="zipcodeValidCheck">Valid zipcode</span>
            </div>
        );
    }
});

module.exports = ZipcodeInput;
