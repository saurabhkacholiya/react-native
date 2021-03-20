/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @emails oncall+react_native
 */

'use strict';

const React = require('react');
const ReactTestRenderer = require('react-test-renderer');
const Text = require('../../../Text/Text');
const TouchableHighlight = require('../TouchableHighlight');
const TouchableWithoutFeedback = require('../TouchableWithoutFeedback');

describe('TouchableHighlight', () => {
  it('renders correctly', () => {
    const instance = ReactTestRenderer.create(
      <TouchableHighlight style={{}}>
        <Text>Touchable</Text>
      </TouchableHighlight>,
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });
});

describe('<TouchableWithoutFeedback />', () => {
  it('should render as expected', () => {
    const instance = ReactTestRenderer.create(
      <TouchableWithoutFeedback>
        <Text>Touchable</Text>
      </TouchableWithoutFeedback>,
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });
});

describe('<TouchableWithoutFeedback disabled={true} />', () => {
  it('should be disabled when disabled is true', () => {
    const instance = ReactTestRenderer.create(
      <TouchableWithoutFeedback disabled={true}>
        <Text>Touchable</Text>
      </TouchableWithoutFeedback>,
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });
});

describe('<TouchableWithoutFeedback disabled={true} accessibilityState={{}} />', () => {
  it('should be disabled when disabled is true and accessibilityState is empty', () => {
    const instance = ReactTestRenderer.create(
      <TouchableWithoutFeedback disabled={true} accessibilityState={{}}>
        <Text>Touchable</Text>
      </TouchableWithoutFeedback>,
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });
});

describe('<TouchableWithoutFeedback disabled={true} accessibilityState={{checked: true}} />', () => {
  it('should keep accessibilityState when disabled is true', () => {
    const instance = ReactTestRenderer.create(
      <TouchableWithoutFeedback
        disabled={true}
        accessibilityState={{checked: true}}>
        <Text>Touchable</Text>
      </TouchableWithoutFeedback>,
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });
});

describe('<TouchableWithoutFeedback disabled={true} accessibilityState={{disabled: false}} />', () => {
  it('should overwrite accessibilityState with value of disabled prop', () => {
    const instance = ReactTestRenderer.create(
      <TouchableWithoutFeedback
        disabled={true}
        accessibilityState={{disabled: false}}>
        <Text>Touchable</Text>
      </TouchableWithoutFeedback>,
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
