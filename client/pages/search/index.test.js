import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import SearchPage from './index';
import Summary from '../../components/Summary';

describe('Search Page', () => {

  const emptyResults = [];

  const result = {
    "channel.name": "Animals",
    "created_time": 1474833893,
    "id": "x4uocqa",
    "owner.avatar_120_url": "http://s1.dmcdn.net/JStNL/120x120-W6P.png",
    "owner.username": "nyrophene",
    "title": "preview1"
  };

  it('renders an empty feed', () => {
    const wrapper = shallow(<SearchPage results={emptyResults}/>);
    expect(wrapper.find(Summary)).to.have.length(0);
  });

  it('renders a single result', () => {
    const wrapper = shallow(<SearchPage results={[result]}/>);
    expect(wrapper.find(Summary)).to.have.length(1);
  });

  it('renders multiple results', () => {
    const wrapper = shallow(<SearchPage results={[result, result]}/>);
    expect(wrapper.find(Summary)).to.have.length(2);
  });

  it('calls componentDidMount', () => {
    sinon.spy(SearchPage.prototype, 'componentDidMount');
    const wrapper = mount(<SearchPage results={emptyResults}/>);
    expect(SearchPage.prototype.componentDidMount).to.have.property('callCount', 1);
    SearchPage.prototype.componentDidMount.restore();
  });

});
