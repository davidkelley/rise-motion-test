import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import HomePage from './index';
import Summary from '../../components/Summary';

describe('Home Page', () => {

  const emptyFeed = [];

  const result = {
    "channel.name": "Animals",
    "created_time": 1474833893,
    "id": "x4uocqa",
    "owner.avatar_120_url": "http://s1.dmcdn.net/JStNL/120x120-W6P.png",
    "owner.username": "nyrophene",
    "title": "preview1"
  };

  it('renders an empty feed', () => {
    const wrapper = shallow(<HomePage feed={emptyFeed}/>);
    expect(wrapper.find(Summary)).to.have.length(0);
  });

  it('renders a single result', () => {
    const wrapper = shallow(<HomePage feed={[result]}/>);
    expect(wrapper.find(Summary)).to.have.length(1);
  });

  it('renders multiple results', () => {
    const wrapper = shallow(<HomePage feed={[result, result]}/>);
    expect(wrapper.find(Summary)).to.have.length(2);
  });

  it('calls componentDidMount', () => {
    sinon.spy(HomePage.prototype, 'componentDidMount');
    const wrapper = mount(<HomePage feed={emptyFeed}/>);
    expect(HomePage.prototype.componentDidMount).to.have.property('callCount', 1);
    HomePage.prototype.componentDidMount.restore();
  });

});
