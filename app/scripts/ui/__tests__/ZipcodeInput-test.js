/** @jsx React.DOM */

jest.dontMock('../ZipcodeInput');

describe('ZipcodeInput', function () {
  var ZipcodeInput = require('../ZipcodeInput');
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var zipCodeComponent = null;

  beforeEach(function () {
    zipCodeComponent = TestUtils.renderIntoDocument(<ZipcodeInput ackWhenValid={true}/>);
  });

  it('should set the submit button in disabled state initially', function () {
    var submitButton = TestUtils.findRenderedDOMComponentWithTag(zipCodeComponent, 'button');
    expect(submitButton.getDOMNode().disabled).toBe(true);
  });

  it('should verify the zipcode is valid when input changes', function () {
    var inputBox = TestUtils.findRenderedDOMComponentWithTag(zipCodeComponent, 'input');
    expect(zipCodeComponent.state.isZipcodeValid).toBe(false);
    TestUtils.Simulate.change(inputBox, {target: {value: 'something'}});
    expect(zipCodeComponent.state.isZipcodeValid).toBe(false);
    TestUtils.Simulate.change(inputBox, {target: {value: '123'}});
    expect(zipCodeComponent.state.isZipcodeValid).toBe(false);
    TestUtils.Simulate.change(inputBox, {target: {value: '98005'}});
    expect(zipCodeComponent.state.isZipcodeValid).toBe(true);
    TestUtils.Simulate.change(inputBox, {target: {value: '560065'}});
    expect(zipCodeComponent.state.isZipcodeValid).toBe(true);
  });

  it('should enable/disable the submit button for based on zipcode validity', function () {
    var submitButton = TestUtils.findRenderedDOMComponentWithTag(zipCodeComponent, 'button');
    var inputBox = TestUtils.findRenderedDOMComponentWithTag(zipCodeComponent, 'input');
    expect(submitButton.getDOMNode().disabled).toBe(true);
    TestUtils.Simulate.change(inputBox, {target: {value: '560065'}});
    expect(submitButton.getDOMNode().disabled).toBe(false);
    TestUtils.Simulate.change(inputBox, {target: {value: '78'}});
    expect(submitButton.getDOMNode().disabled).toBe(true);
  });

  it('should show the valid zipcode message when the zipcode is valid', function () {
    var inputBox = TestUtils.findRenderedDOMComponentWithTag(zipCodeComponent, 'input');
    var feedBackSpan = TestUtils.scryRenderedDOMComponentsWithClass(zipCodeComponent,'alert-success');
    expect(feedBackSpan.length).toBe(0);

    TestUtils.Simulate.change(inputBox, {target: {value: '560065'}});
    feedBackSpan = TestUtils.scryRenderedDOMComponentsWithClass(zipCodeComponent,'alert-success');
    expect(feedBackSpan.length).toBe(1);
  });

  it('should be able to submit the form with valid zipcode', function () {
    zipCodeComponent._search = jest.genMockFn();
    var inputBox = TestUtils.findRenderedDOMComponentWithTag(zipCodeComponent, 'input');
    var submitButton = TestUtils.findRenderedDOMComponentWithTag(zipCodeComponent, 'button');
    TestUtils.Simulate.click(submitButton);
    expect(zipCodeComponent._search).not.toBeCalled();
    TestUtils.Simulate.change(inputBox, {target: {value: '560065'}});
    TestUtils.Simulate.click(submitButton);
    expect(zipCodeComponent._search).toBeCalled();
  });

});

