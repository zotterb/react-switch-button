jest.dontMock('../react-switch-button.js');

describe('Switch button', function() {
  it('changes slider position when switched on', function() {
    var React = require('react/addons');
    var SwitchButton = require('../react-switch-button.js');
    var TestUtils = React.addons.TestUtils;
    var noop = jest.genMockFunction();

    // Render a switch
    var switchBtn = TestUtils.renderIntoDocument(
      <SwitchButton
        label='DROP TABLE'
        onChange={noop}
        />
    );

    // Verify that toggle with text is rendered
    var label = TestUtils.findRenderedDOMComponentWithTag(
      switchBtn, 'label');
    var input = TestUtils.findRenderedDOMComponentWithTag(
      switchBtn, 'input');
    expect(React.findDOMNode(label).textContent).toEqual('DROP TABLE');
    expect(React.findDOMNode(input).checked).toEqual(false);

    // // Simulate a click and verify that it is now On
    var input = TestUtils.findRenderedDOMComponentWithTag(
      switchBtn, 'input');
    TestUtils.Simulate.change(input);

    expect(noop.mock.calls.length).toBe(1);
  });
});
