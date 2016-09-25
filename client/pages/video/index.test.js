import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import $ from 'jquery';
import { shallow, mount } from 'enzyme';
import VideoPage from './index';
import Summary from '../../components/Summary';
import Card from '../../components/Card';

describe('Video Page', () => {

  const emptyRelated = [];

  const related = {
    "channel.name": "Animals",
    "created_time": 1474833893,
    "id": "x4uocqa",
    "owner.avatar_120_url": "http://s1.dmcdn.net/JStNL/120x120-W6P.png",
    "owner.username": "nyrophene",
    "title": "preview1"
  };

  const video = {
    "channel.name": "Lifestyle & How-to",
    "comments_total": 0,
    "created_time": 1474633560,
    "description": "Tough Mudder in 60 seconds with Lucy Pavia",
    "embed_url": "http://www.dailymotion.com/embed/video/x4uecwe",
    "owner.avatar_120_url": "http://s1.dmcdn.net/AVM/120x120-bnf.png",
    "owner.username": "timeincuk",
    "title": "Marie Claire - Tough Mudder in 60 seconds"
  };

  before((done) => {
    $.fn.embed = () => {};
    done();
  });

  it('renders an empty related feed', () => {
    const wrapper = shallow(<VideoPage video={video} related={emptyRelated}/>);
    expect(wrapper.find(Summary)).to.have.length(0);
  });

  it('renders a single related result', () => {
    const wrapper = shallow(<VideoPage video={video} related={[related]}/>);
    expect(wrapper.find(Summary)).to.have.length(1);
  });

  it('renders multiple related results', () => {
    const wrapper = shallow(<VideoPage video={video} related={[related, related]}/>);
    expect(wrapper.find(Summary)).to.have.length(2);
  });

  it('calls componentDidMount', () => {
    sinon.spy(VideoPage.prototype, 'componentDidMount');
    const wrapper = mount(<VideoPage video={video} related={emptyRelated}/>);
    expect(VideoPage.prototype.componentDidMount).to.have.property('callCount', 1);
    VideoPage.prototype.componentDidMount.restore();
  });

  it('calls embed', () => {
    sinon.spy($.fn, 'embed');
    const wrapper = mount(<VideoPage video={video} related={emptyRelated}/>);
    expect($.fn.embed).to.have.property('callCount', 1);
    $.fn.embed.restore();
  });

});
