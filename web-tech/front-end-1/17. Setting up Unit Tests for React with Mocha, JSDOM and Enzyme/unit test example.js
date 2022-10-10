// (1)

import React from 'react'
import expect from 'expect'
import { shallow, mount } from 'enzyme'
import FormInput from '../form-elements/FormInput'

describe('Form Component', () => {

  it('should returns correct label for firstname', () => {
    const wrapper = mount(<FormInput
      inputType = "firstname"
      changeHandler={() => {return null}}
      />)
    expect(wrapper.find('label').text()).toEqual('First name');
  });

  it('should return correct placeholder for firstname', () => {
    const wrapper = mount(<FormInput
      inputType = "firstname"
      changeHandler={() => {return null}}
      />)
    const input = wrapper.find('input');
    expect(input.prop('placeholder')).toEqual('Enter your first name');
  });
})

// (2) spying
import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Form from '../Form'
import  initialState from '../../reducers/initialState'

describe('<Form />', () => {

  let state;
  let spySubmitHandler;

  beforeEach(() => {
    state = initialState.information;
    spySubmitHandler = sinon.spy();
  });

  it('should fire onSubmit function', () => {

    const wrapper = mount(
    <Form
      information={state}
      onSubmitHandler={spySubmitHandler}
    />);
    wrapper.find('button').simulate('click');
    sinon.assert.calledOnce(spySubmitHandler)
  });
});